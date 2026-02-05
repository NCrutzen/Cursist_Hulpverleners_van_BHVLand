
import React, { useState, useCallback, useMemo } from 'react';
import { TeamColor, AppScreen, ResourceType, TeamStats } from './types';
import { SKILLS, ALL_QUESTIONS } from './constants';
import TeamSelection from './components/TeamSelection';
import Dashboard from './components/Dashboard';
import SkillsAssessment from './components/SkillsAssessment';
import QuestionQuiz from './components/QuestionQuiz';
import Summary from './components/Summary';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('setup-own');
  const [ownTeam, setOwnTeam] = useState<TeamColor | null>(null);
  const [targetTeam, setTargetTeam] = useState<TeamColor | null>(null);
  const [hasCompletedSkillThisRound, setHasCompletedSkillThisRound] = useState(false);

  const [teamsStats, setTeamsStats] = useState<Record<TeamColor, TeamStats>>({
    geel: { completedSkills: [], usedQuestionIds: [], resources: { Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 } },
    oranje: { completedSkills: [], usedQuestionIds: [], resources: { Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 } },
    rood: { completedSkills: [], usedQuestionIds: [], resources: { Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 } },
    groen: { completedSkills: [], usedQuestionIds: [], resources: { Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 } },
  });

  const [roundResources, setRoundResources] = useState<Record<ResourceType, number>>({
    Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0
  });

  const handleOwnTeamSelect = (color: TeamColor) => {
    setOwnTeam(color);
    setCurrentScreen('setup-target');
  };

  const handleTargetTeamSelect = (color: TeamColor) => {
    setTargetTeam(color);
    setRoundResources({ Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 });
    setHasCompletedSkillThisRound(false);
    setCurrentScreen('dashboard');
  };

  const updateResources = useCallback((added: ResourceType[]) => {
    if (!targetTeam) return;

    setRoundResources(prev => {
      const next = { ...prev };
      added.forEach(r => next[r]++);
      return next;
    });

    setTeamsStats(prev => {
      const teamStats = prev[targetTeam];
      const nextResources = { ...teamStats.resources };
      added.forEach(r => nextResources[r]++);
      return {
        ...prev,
        [targetTeam]: {
          ...teamStats,
          resources: nextResources
        }
      };
    });
  }, [targetTeam]);

  const markSkillComplete = useCallback((skillId: string) => {
    if (!targetTeam) return;
    setTeamsStats(prev => {
      const teamStats = prev[targetTeam];
      if (teamStats.completedSkills.includes(skillId)) return prev;
      return {
        ...prev,
        [targetTeam]: {
          ...teamStats,
          completedSkills: [...teamStats.completedSkills, skillId]
        }
      };
    });
    
    setHasCompletedSkillThisRound(true);
    const skill = SKILLS.find(s => s.id === skillId);
    if (skill) {
      updateResources(skill.rewards);
    }
  }, [targetTeam, updateResources]);

  const markQuestionUsed = useCallback((questionId: string) => {
    if (!targetTeam) return;
    setTeamsStats(prev => {
      const teamStats = prev[targetTeam];
      return {
        ...prev,
        [targetTeam]: {
          ...teamStats,
          usedQuestionIds: [...teamStats.usedQuestionIds, questionId]
        }
      };
    });
  }, [targetTeam]);

  const handleFinishRound = () => {
    setCurrentScreen('summary');
  };

  const handleNextRound = () => {
    setRoundResources({ Samenwerking: 0, Tijd: 0, Kennis: 0, Besluitkracht: 0, Materiaal: 0 });
    setHasCompletedSkillThisRound(false);
    setCurrentScreen('dashboard');
  };

  const handleSwitchTeam = () => {
    setCurrentScreen('setup-target');
  };

  return (
    <div className="min-h-screen flex flex-col max-w-lg mx-auto bg-white shadow-xl overflow-x-hidden">
      <header className="bg-[#002b47] text-white p-4 shadow-md sticky top-0 z-50 flex items-center justify-between">
        <h1 className="font-bold text-xl tracking-tight">BHV Land</h1>
        {ownTeam && (
          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase font-semibold opacity-80">Jouw Team</span>
            <div className={`w-4 h-4 rounded-full border border-white ${getTeamBgColor(ownTeam)}`}></div>
          </div>
        )}
      </header>

      <main className="flex-1 overflow-y-auto p-4 pb-20">
        {currentScreen === 'setup-own' && (
          <TeamSelection 
            title="Kies jouw eigen teamkleur" 
            onSelect={handleOwnTeamSelect} 
          />
        )}

        {currentScreen === 'setup-target' && (
          <TeamSelection 
            title={`Welk team ga je beoordelen?`} 
            exclude={ownTeam || undefined} 
            onSelect={handleTargetTeamSelect} 
          />
        )}

        {currentScreen === 'dashboard' && targetTeam && (
          <Dashboard 
            targetTeam={targetTeam}
            hasCompletedSkillThisRound={hasCompletedSkillThisRound}
            onNavigate={setCurrentScreen}
            onFinish={handleFinishRound}
            onSwitchTeam={handleSwitchTeam}
          />
        )}

        {currentScreen === 'skills' && targetTeam && (
          <SkillsAssessment 
            targetTeam={targetTeam}
            completedSkills={teamsStats[targetTeam].completedSkills}
            hasCompletedSkillThisRound={hasCompletedSkillThisRound}
            onSkillComplete={(id) => {
              markSkillComplete(id);
              setCurrentScreen('dashboard');
            }}
            onBack={() => setCurrentScreen('dashboard')}
          />
        )}

        {currentScreen === 'questions' && targetTeam && (
          <QuestionQuiz 
            targetTeam={targetTeam}
            usedQuestionIds={teamsStats[targetTeam].usedQuestionIds}
            onCorrectAnswer={(qId, bonusResource) => {
              markQuestionUsed(qId);
              const resourcesToAdd: ResourceType[] = ['Kennis'];
              if (bonusResource) resourcesToAdd.push(bonusResource);
              updateResources(resourcesToAdd);
            }}
            onBack={() => setCurrentScreen('dashboard')}
          />
        )}

        {currentScreen === 'summary' && targetTeam && (
          <Summary 
            targetTeam={targetTeam}
            roundResources={roundResources}
            onNextRound={handleNextRound}
            onSwitchTeam={handleSwitchTeam}
          />
        )}
      </main>
    </div>
  );
};

const getTeamBgColor = (team: TeamColor) => {
  switch (team) {
    case 'geel': return 'bg-[#e4e022]';
    case 'oranje': return 'bg-[#f28b39]';
    case 'rood': return 'bg-[#e73546]';
    case 'groen': return 'bg-[#63b986]';
  }
};

export default App;
