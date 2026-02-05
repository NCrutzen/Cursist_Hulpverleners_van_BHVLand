
import React from 'react';
import { TeamColor, ResourceType } from '../types';
import ResourceHexagon from './ResourceHexagon';

interface Props {
  targetTeam: TeamColor;
  roundResources: Record<ResourceType, number>;
  onNextRound: () => void;
  onSwitchTeam: () => void;
}

const Summary: React.FC<Props> = ({ targetTeam, roundResources, onNextRound, onSwitchTeam }) => {
  const resourceTypes: ResourceType[] = ['Samenwerking', 'Kennis', 'Besluitkracht', 'Tijd', 'Materiaal'];

  return (
    <div className="flex flex-col space-y-8 py-4">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">Ronde Voltooid!</h2>
        <p className="text-slate-500">Resultaten voor team <span className="font-bold capitalize">{targetTeam}</span></p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center space-x-2">
          <span className="text-xl">🏆</span> <span>Deze ronde verdiend:</span>
        </h3>
        <div className="flex flex-col space-y-4">
          {resourceTypes.map((res) => {
            const count = roundResources[res];
            return (
              <div key={res} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 active:bg-slate-100">
                <div className="flex items-center space-x-4">
                  <ResourceHexagon resource={res} teamColor={targetTeam} size={48} />
                  <span className="font-bold text-slate-700">{res}</span>
                </div>
                <span className={`text-2xl font-black px-4 ${count > 0 ? 'text-green-600' : 'text-slate-300'}`}>
                  +{count}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col space-y-3 pt-4">
        <button
          onClick={onNextRound}
          className="w-full bg-[#002b47] text-white py-5 rounded-2xl font-black text-xl active:bg-slate-800 shadow-xl"
        >
          VOLGENDE RONDE
        </button>
        <button
          onClick={onSwitchTeam}
          className="w-full bg-white text-[#002b47] border-2 border-[#002b47] py-4 rounded-2xl font-bold text-lg active:bg-slate-50"
        >
          Ander team beoordelen
        </button>
      </div>
    </div>
  );
};

export default Summary;
