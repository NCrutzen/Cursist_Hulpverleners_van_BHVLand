
import { Skill, Question } from './types';

export const SKILLS: Skill[] = [
  { id: '1', name: 'Buik → rug draaien', rewards: ['Samenwerking', 'Tijd'] },
  { id: '2', name: 'Stabiele zijligging', rewards: ['Samenwerking', 'Tijd'] },
  { id: '3', name: 'AED-elektrodes plakken', rewards: ['Kennis', 'Besluitkracht'] },
  { id: '4', name: 'Reanimatie', rewards: ['Tijd', 'Besluitkracht'] },
  { id: '5', name: 'Pleisters plakken', rewards: ['Materiaal', 'Tijd'] },
  { id: '6', name: 'Steunverband aanleggen', rewards: ['Materiaal', 'Samenwerking'] },
  { id: '7', name: 'Dekenrol aanleggen', rewards: ['Materiaal', 'Samenwerking'] },
  { id: '8', name: 'Wond steriel afdekken', rewards: ['Materiaal', 'Tijd'] },
];

export const ALL_QUESTIONS: Question[] = [
  // Deel 1: Spoedeisende Eerste Hulp
  {
    id: 'q1',
    text: 'Wat zijn de eerste drie stappen die je neemt zodra je een slachtoffer aantreft dat mogelijk gereanimeerd moet worden?',
    options: [
      'Veiligheid controleren, het bewustzijn controleren en om hulp roepen.',
      'Ademhaling controleren, de AED aansluiten en direct 112 bellen.',
      'De luchtweg vrijmaken, 112 bellen en direct beginnen met 30 borstcompressies.',
      'Het slachtoffer in de stabiele zijligging leggen, de hartslag meten en hulp inschakelen.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q2',
    text: 'Wat is het belangrijkste verschil in de benadering van een bewusteloos slachtoffer mét versus zónder normale ademhaling?',
    options: [
      'Bij een normale ademhaling pas je direct de AED toe; zonder ademhaling wacht je op de ambulance.',
      'Bij een normale ademhaling bel je de huisarts; zonder ademhaling bel je direct 112.',
      'Er is geen verschil; bij beide situaties start je altijd direct met borstcompressies.',
      'Bij een normale ademhaling leg je het slachtoffer in de stabiele zijligging; zonder ademhaling start je reanimatie.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q3',
    text: 'Hoe diep moet je de borstkas indrukken bij een volwassene en waarom moet de borstkas daarna weer volledig omhoog komen?',
    options: [
      '2 tot 3 centimeter; om te voorkomen dat de ribben van het slachtoffer breken.',
      'Minimaal 8 centimeter; om de bloeddruk hoog genoeg te krijgen voor de hersenen.',
      '5 tot 6 centimeter; om het hart de kans te geven zich tussen de compressies weer volledig met bloed te vullen.',
      'Zo diep mogelijk; de diepte is minder belangrijk dan de snelheid van de compressies.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q4',
    text: 'Wat is the juiste procedure voor het plakken van AED-elektroden als het slachtoffer een pacemaker heeft?',
    options: [
      'De AED mag in dit geval niet gebruikt worden vanwege het risico op een storing.',
      'Je plakt de elektrode net onder de pacemaker.',
      'Je plakt de elektrode direct bovenop de pacemaker om de elektrische geleiding te versterken.',
      'Je plakt beide elektroden op de rug van het slachtoffer om de pacemaker te ontwijken.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q5',
    text: 'Waar moet je specifiek op letten bij het draaien van een slachtoffer van de buik naar de rug om verdere schade te voorkomen?',
    options: [
      'Dat de arm aan de zijde van de BHV\'er recht omhoog langs het hoofd wordt gelegd als stabiel draaipunt.',
      'Dat het hoofd, de hals en de romp tijdens de gehele draaibeweging zoveel mogelijk in één lijn blijven.',
      'Dat het slachtoffer eerst in de stabiele zijligging wordt geplaatst als tussenstap.',
      'Dat de benen bij de enkels worden gekruist om de rotatie van het bekken te vergemakkelijken.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q6',
    text: 'In welke situatie kies je voor de stabiele zijligging?',
    options: [
      'Bij een slachtoffer dat niet ademt en waarbij je wacht op de AED.',
      'Bij een slachtoffer met een vermoeden van een actieve inwendige bloeding in de buik.',
      'Bij een slachtoffer dat bij bewustzijn is maar klaagt over hevige rugpijn.',
      'Bij een bewusteloos slachtoffer dat een normale ademhaling heeft.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q7',
    text: 'Hoe controleer je de ademhaling volgens de \'kijk, luister en voel\'-methode en hoe lang mag dit duren?',
    options: [
      'Hand op de borstkas leggen en minimaal 30 seconden luisteren.',
      '5 seconden kijken naar de borstkas terwijl je de polsslag in de hals controleert.',
      'Kijken naar de beweging, luisteren bij de mond en voelen met de wang (max. 10 seconden).',
      'De beweging van de buik observeren en 20 seconden luisteren naar gasping.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q8',
    text: 'Wat is de primaire functie van de AED tijdens een reanimatie?',
    options: [
      'Een elektrische schok geven om een chaotisch ritme te stoppen zodat het hart weer normaal kan kloppen.',
      'De functie van borstcompressies en beademing volledig overnemen.',
      'Dienen als een monitor die alleen de hartslag registreert voor de ambulance.',
      'Mechanisch bloed door het lichaam pompen via de opgeplakte elektroden.'
    ],
    correctIndex: 0,
  },

  // Deel 2: Interne Noodsituaties
  {
    id: 'q9',
    text: 'Wat is de definitie van een \'shock\' in medische termen?',
    options: [
      'Een kortstondige psychische reactie op een schokkende gebeurtenis.',
      'Een plotselinge daling van de hartslag door een emotionele blokkade.',
      'Een ander woord voor een flauwte door te lage bloedsuikerspiegel.',
      'Een levensbedreigende toestand met onvoldoende doorstroming naar vitale organen.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q10',
    text: 'Welke drie uiterlijke kenmerken horen bij een beginnende shock?',
    options: [
      'Rode huid, trage ademhaling en een sterke pols.',
      'Hoge koorts, praten in wartaal en een droge, warme huid.',
      'Bleke/grauwe huid, koude klamme huid (zweet) en een snelle, zwakke pols.',
      'Gezwollen pupillen, hevige hoofdpijn en blauwe plekken.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q11',
    text: 'Waarom mag je een slachtoffer in shock nooit iets te drinken geven?',
    options: [
      'Risico op braken/verslikken en mogelijke operatie noodzakelijk.',
      'Vloeistof laat de bloeddruk te snel stijgen (gevaarlijk voor hart).',
      'De nieren kunnen tijdens shock geen water verwerken (risico op blasscheur).',
      'Drinken vermindert de effectiviteit van pijnstillers van de ambulance.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q12',
    text: 'Wat is het belangrijkste verschil in de oorzaak tussen Angina Pectoris en een hartinfarct?',
    options: [
      'Angina Pectoris is een ontsteking, een infarct is een gesprongen vat.',
      'Angina Pectoris komt door stress, een infarct alleen door ouderdom.',
      'Er is geen verschil in oorzaak; het verschil zit enkel in de duur van de pijn.',
      'Bij Angina Pectoris is er tijdelijk zuurstoftekort; bij een infarct is een ader volledig afgesloten.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q13',
    text: 'Welke atypische symptomen van een hartinfarct zie je vaker bij vrouwen dan bij mannen?',
    options: [
      'Hevige, drukkende pijn op het borstbeen uitstralend naar de linkerarm.',
      'Onbedwingbare drang om te bewegen en een zeer rode gelaatskleur.',
      'Pijn in bovenbuik, misselijkheid, extreme moeidheid of pijn tussen schouderbladen.',
      'Plotselinge doofheid aan één oor en een branderig gevoel in de voetzolen.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q14',
    text: 'Welke eerste hulp verleen je bij een vermoedelijk hartinfarct?',
    options: [
      'Het slachtoffer rustig laten rondlopen om de bloedsomloop te stimuleren.',
      'Comfortabele (halfzittende) houding laten rusten, geruststellen en 112 bellen.',
      'Plat op de rug leggen met benen omhoog voor meer bloed naar het hoofd.',
      'Direct twee glazen water geven en diep laten in- en uitademen.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q15',
    text: 'Wat gebeurt er met de bloedsuikerspiegel bij een \'hypo\' en wat is een symptoom?',
    options: [
      'Spiegel is te laag; last van trillen, zweten en een wisselend humeur.',
      'Spiegel is te hoog; het slachtoffer heeft een adem die naar aceton ruikt.',
      'Spiegel is stabiel, maar het insulinegehalte is plotseling verdwenen.',
      'Spiegel stijgt zeer snel, waardoor het slachtoffer enorme dorst krijgt.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q16',
    text: 'Wat is een \'hyper\' en welke actie is hier meestal voor nodig?',
    options: [
      'Te lage suikerspiegel door beweging; suiker eten is de oplossing.',
      'Een toestand van extreme vrolijkheid door een teveel aan cafeïne.',
      'Een bloeddruk die te hoog is door het eten van te veel zout.',
      'Een te hoge suikerspiegel; vereist vaak medische hulp of insuline.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q17',
    text: 'Waarom is het protocol om bij twijfel tussen hypo en hyper áltijd suiker aan te bieden?',
    options: [
      'Omdat suiker ook helpt om een te hoge suikerspiegel (hyper) omlaag te brengen.',
      'Omdat het slachtoffer sneller weer aanspreekbaar wordt, ongeacht de oorzaak.',
      'Omdat een hypo op korte termijn veel gevaarlijker is; suiker kan levensreddend zijn.',
      'Omdat suiker de bloeddruk stabiliseert bij alle interne noodsituaties.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q18',
    text: 'Hoe handel je als een diabetespatiënt niet meer aanspreekbaar is of niet kan slikken?',
    options: [
      'Stabiele zijligging, niets via de mond en direct 112 bellen.',
      'Voorzichtig suikerwater of druivensuiker in de mondhoek gieten.',
      'Zelf een insuline-injectie toedienen in het bovenbeen.',
      'Rechtop zetten en proberen wakker te schudden terwijl je suiker aanbiedt.'
    ],
    correctIndex: 0,
  },

  // Deel 3: Botbenen, Gewrichten en Oogzorg
  {
    id: 'q19',
    text: 'Wat is het belangrijkste verschil tussen een open en een gesloten botbreuk qua risico?',
    options: [
      'Een gesloten breuk is gevaarlijker omdat de druk nergens heen kan.',
      'Bij een open breuk geneest het bot sneller door extra zuurstof.',
      'Er is geen verschil; alleen de manier van verbinden verschilt.',
      'Een open breuk heeft een veel groter risico op infecties en bloedverlies.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q20',
    text: 'Waarom is het immobiliseren van een ledemaat essentieel bij een vermoedelijke breuk?',
    options: [
      'Zodat de BHV\'er kan bewijzen dat hij goed heeft geholpen.',
      'Om de bloedtoevoer volledig af te sluiten tot de arts er is.',
      'Om verdere schade aan vaten, zenuwen en weefsel te voorkomen en pijn te verminderen.',
      'Omdat het bot anders binnen enkele minuten verkeerd aan elkaar groeit.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q21',
    text: 'Hoe kun je een verstuiking onderscheiden van een botbreuk op basis van de stand?',
    options: [
      'Bij een breuk is er vaak een abnormale stand of verkorting; bij verstuiving meestal niet.',
      'Bij een verstuiking staat het gewricht altijd in een abnormale hoek.',
      'Een verstuiving is altijd blauw, terwijl een botbreuk altijd wit ziet.',
      'Er is op basis van de stand nooit een onderscheid te maken.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q22',
    text: 'Wat moet je absoluut niet doen als er een vuiltje in het oog zit?',
    options: [
      'Knipperen met de ogen.',
      'Het oog spoelen met lauw stromend water.',
      'Naar de grond kijken op verzoek.',
      'In het oog wrijven (kan het hoornvlies beschadigen).'
    ],
    correctIndex: 3,
  },
  {
    id: 'q23',
    text: 'Wat is de juiste procedure voor het spoelen bij een bijtende vloeistof in het oog?',
    options: [
      '2 minuten lang heel krachtig spoelen met een brandslanghaspel.',
      'Spoelen met neutraliserende vloeistof zoals melk of vruchtensap.',
      'Minimaal 15-20 minuten spoelen met lauw water, van de neus af naar buiten.',
      'Alleen spoelen als het slachtoffer aangeeft dat de pijn onhoudbaar wordt.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q24',
    text: 'Hoe handel wanneer er een splinter of voorwerp in de oogbol zelf vastzit?',
    options: [
      'Beide ogen afdekken (voorkomt beweging) en direct naar een arts.',
      'Voorzichtig proberen te verwijderen met een steriel pincet.',
      'Hard in het oog laten wrijven om het voorwerp los te krijgen.',
      'Het oog minimaal een uur lang onder een harde kraan spoelen.'
    ],
    correctIndex: 0,
  },

  // Deel 4: Verdieping Wondzorg & Verbandleer
  {
    id: 'q25',
    text: 'Hoe pas je een pleisterkaart toe op een bewegend deel zoals een knokkel?',
    options: [
      'Altijd als een geheel over de knokkel plakken zonder te knippen.',
      'Alleen gebruiken bij gedeeltelijke of volledige brandwonden.',
      'Alleen gebruiken om de vinger volledig te immobiliseren.',
      'Inkepingen knippen zodat de pleister de vorm van de knokkel volgt.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q26',
    text: 'Waarom mag je een vreemd voorwerp dat diep in een wond zit nooit zelf verwijderen?',
    options: [
      'Omdat je dan verantwoordelijk bent voor de schade aan het voorwerp.',
      'Omdat de wond dan te snel aan de lucht wordt blootgesteld.',
      'Het voorwerp stelt de bloeding deels; verwijdering kan hevige bloeding veroorzaken.',
      'Omdat het voorwerp in het ziekenhuis als bewijsmateriaal dient.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q27',
    text: 'Hoe stabiliseer je een groot vreemd voorwerp in een wond tijdens het afdekken?',
    options: [
      'Een strak drukverband direct bovenop het voorwerp aanleggen.',
      'Ruimte rondom opvullen met gazen of rollen verband voor stabiliteit.',
      'Voorwerp met plakband vastzetten aan de kleding van het slachtoffer.',
      'Voorwerp met draaiende beweging dieper duwen voor stevigheid.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q28',
    text: 'Wat is de definitie van \'steriel werken\' bij het afdekken van een wond?',
    options: [
      'Het deel van het verband dat de wond raakt niet aanraken.',
      'Zorgen dat je de wond wast met zeep voor het verbinden.',
      'Alleen verbandmiddelen gebruiken die korter dan een uur open liggen.',
      'Het dragen van een mondkapje en haarnetje tijdens de verzorging.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q29',
    text: 'Hoe ga je te werk bij een zeer grote, actieve bloeding met meerdere gazen?',
    options: [
      'Eén gaasje leggen en wachten tot het stopt voor de tweede.',
      'Alleen een pleister gebruiken en met vol gewicht aandrukken.',
      'De wond eerst uitgebreid spoelen met koud water.',
      'Meerdere gazen stapelen en daaroverheen een wonddrukverband aanleggen.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q30',
    text: 'Op welke signalen let je om te controleren of een verband niet te strak zit?',
    options: [
      'Of het slachtoffer nog steeds pijn voelt bij de wond.',
      'Of het verband na 10 minuten nog op dezelfde plek zit.',
      'Of vingers/tenen blauw worden, koud aanvoelen of gaan tintelen.',
      'Of er bloed door het verband heen begint te lekken.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q31',
    text: 'Wat is de functie van een wonddrukverband en wanneer pas je dit toe?',
    options: [
      'Fixeren van een gewricht bij verstuiking om zwelling te minimaliseren.',
      'Steriel afdekken van een brandwond tegen infectie en warmteverlies.',
      'Stabiliseren van een groot vreemd voorwerp zonder directe druk.',
      'Mechanische druk uitoefenen op een ernstige bloeding om te stelpen.'
    ],
    correctIndex: 3,
  },

  // Deel 5: Brandpreventie & Gebouwgebonden Voorzieningen
  {
    id: 'q32',
    text: 'Wat is de functie van een nevenindicator in een gebouw?',
    options: [
      'Het aangeven van de actuele temperatuur in de gangen.',
      'Het aangeven hoeveel mensen er nog in een compartiment zijn.',
      'Dienen als noodverlichting als de stroom uitvalt.',
      'Zichtbaar maken dat een melder in een afgesloten ruimte is geactiveerd.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q33',
    text: 'Hoe activeer je een handbrandmelder en wat gebeurt er in de BMC?',
    options: [
      'Hard tegenaan blazen; de BMC schakelt de sprinkler aan.',
      'Melder van de muur trekken; de BMC belt direct de directie.',
      'Ruitje indrukken/breken; de BMC start vaak het ontruimingssignaal.',
      'Code invoeren; de BMC zet alle computers uit.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q34',
    text: 'Wat is de belangrijkste rol van de BHV\'er bij het nevenpaneel van de BMC?',
    options: [
      'Het paneel zelf repareren bij een storing.',
      'Snel aflezen in welke zone of ruimte de brandmelding is ontstaan.',
      'De code wijzigen zodat onbevoegden er niet bij kunnen.',
      'De centrale direct resetten om de rust te bewaren.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q35',
    text: 'Wat is het verschil tussen een optische rookmelder en een thermische melder?',
    options: [
      'Optisch reageert op rookdeeltjes, thermisch op temperatuurstijging.',
      'Optisch reageert op licht, thermisch op geluid.',
      'Optisch werkt overdag, thermisch alleen \'s nachts.',
      'Er is geen verschil; ze worden overal samen geplaatst.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q36',
    text: 'Hoe treedt een sprinklerinstallatie in werking?',
    options: [
      'Door detectie van rook door een centrale computer.',
      'Door het indrukken van een handbrandmelder.',
      'Door een timer die elke avond de installatie test.',
      'Door hitte die een glazen buisje laat knappen of smeltzekering smelt.'
    ],
    correctIndex: 3,
  },
  {
    id: 'q37',
    text: 'Waarom is het verboden brandwerende deuren open te zetten met een kegje?',
    options: [
      'De deur kan uit zijn scharnieren vallen.',
      'De schoonmaakploeg kan er dan niet goed langs.',
      'Rook en vuur kunnen zich dan ongehinderd verspreiden.',
      'Het verstoort de werking van de airconditioning.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q38',
    text: 'Wat is het doel van brandcompartimentering in een gebouw?',
    options: [
      'Brand en rook beperken tot één gebied voor veilig vluchten.',
      'Zorgen dat het gebouw er georganiseerd uitziet voor bezoekers.',
      'Het verlagen van de opstalverzekeringkosten.',
      'Zorgen dat er in elke kamer een aparte BHV\'er aanwezig is.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q39',
    text: 'Welke controlewerkzaamheden kan een BHV\'er dagelijks/wekelijks doen?',
    options: [
      'Keuren van de technische installatie van de BMC.',
      'Hervullen van lege brandblussers met eigen middelen.',
      'Testen van de waterdruk door de hoofdleiding door te zagen.',
      'Controleren of vluchtwegen vrij zijn en blusmiddelen bereikbaar.'
    ],
    correctIndex: 3,
  },

  // Nieuwe Vragen (Vanaf Vraag 40)
  {
    id: 'q40',
    text: 'Hoe controleer je het bewustzijn van een slachtoffer op de juiste wijze?',
    options: [
      'Je knijpt krachtig in de bovenarm en kijkt of de ogen open gaan.',
      'Je schudt voorzichtig aan de schouders en vraagt luid: "Gaat het, kunt u mij horen?"',
      'Je controleert of de pupillen reageren op licht.',
      'Je roept luid om hulp terwijl je de polsslag in de hals controleert.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q41',
    text: 'Wat is de eerste actie die je onderneemt nadat je de veiligheid hebt gecontroleerd en hebt vastgesteld dat een slachtoffer niet reageert?',
    options: [
      'Direct beginnen met 30 borstcompressies.',
      'De luchtweg vrijmaken door de kinlift.',
      'Om hulp roepen en direct 112 (laten) bellen.',
      'De ademhaling controleren gedurende 1 minuut.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q42',
    text: 'Welke handeling voert de BHV\'er uit direct vóórdat de ademhaling gecontroleerd wordt?',
    options: [
      'De borstkas ontbloten.',
      'De stabiele zijligging toepassen.',
      'De luchtweg vrijmaken (kinlift).',
      'De buik van het slachtoffer masseren.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q43',
    text: 'Je hebt 112 gebeld en een AED laten halen. Wat doe je terwijl je op de AED wacht?',
    options: [
      'Je brengt het slachtoffer in de stabiele zijligging.',
      'Je voert ononderbroken reanimatie uit (30 borstcompressies, 2 beademingen).',
      'Je controleert elke minuut of de ademhaling weer spontaan begint.',
      'Je probeert de luchtweg vrij te maken met water.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q44',
    text: 'Wat is de juiste methode om de AED-elektroden te plakken als de borstkas van het slachtoffer erg nat is?',
    options: [
      'Je plakt de elektroden direct over de natte huid.',
      'Je vraagt iemand anders om het slachtoffer droog te blazen.',
      'Je droogt de plekken waar de elektroden moeten komen eerst snel af.',
      'Je mag de AED in dit geval niet gebruiken.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q45',
    text: 'Wat doe je als de AED aangeeft: \'Geen schok geadviseerd\'?',
    options: [
      'Je stopt met alle hulpverlening en wacht op de ambulance.',
      'Je start direct weer met de borstcompressies en beademingen.',
      'Je zet de AED uit en controleert de ademhaling opnieuw.',
      'Je verwijdert de elektroden van de borstkas.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q46',
    text: 'Bij het draaien van buik naar rug moet je een arm van het slachtoffer omhoog leggen langs het hoofd. Welke arm is dit?',
    options: [
      'De arm die het dichtst bij de BHV\'er ligt.',
      'De arm die aan de zijde van het gezicht ligt.',
      'De arm die het verst van de BHV\'er verwijderd is.',
      'Dat maakt bij deze procedure niet uit.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q47',
    text: 'Wat is een belangrijk aandachtspunt bij de stabiele zijligging om de ademweg vrij te houden?',
    options: [
      'De benen moeten gestrekt blijven.',
      'De mond moet naar de grond gericht zijn en het hoofd naar achteren gekanteld.',
      'Het slachtoffer moet altijd op de linkerzijde liggen voor de maag.',
      'De armen moeten onder het lichaam gevouwen worden.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q48',
    text: 'Waarom moet je bij de stabiele zijligging de ademhaling blijven controleren?',
    options: [
      'Omdat een bewusteloos slachtoffer alsnog een circulatiestilstand kan krijgen.',
      'Om te zien of het slachtoffer alweer wakker wordt.',
      'Omdat de ambulancebroeders willen weten hoe vaak het slachtoffer ademt.',
      'Om te voorkomen dat het slachtoffer te diep in slaap valt.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q49',
    text: 'Welke houding is het meest geschikt voor een slachtoffer dat tekenen van shock vertoont, maar nog wel bij bewustzijn is?',
    options: [
      'De stabiele zijligging.',
      'Plat op de rug laten liggen en rust laten houden.',
      'Voorovergebogen laten zitten met het hoofd tussen de knieën.',
      'Rechtop laten staan om de bloeddruk te verhogen.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q50',
    text: 'Wat is een kenmerkend gedrag van een slachtoffer in shock?',
    options: [
      'Extreme vrolijkheid en veel praten.',
      'Rusteloosheid, angst en soms agressie door zuurstofgebrek in de hersenen.',
      'Diepe slaap waaruit het slachtoffer makkelijk wakker te schudden is.',
      'Een constante honger naar suikerhoudende producten.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q51',
    text: 'Je ziet iemand zweten, bleek zien en hoort hem klagen over een \'strakke band\' om de borst. Waar denk je aan?',
    options: [
      'Een hypo (lage bloedsuiker).',
      'Shock door inwendig letsel.',
      'Hartklachten (bijv. Angina Pectoris of hartinfarct).',
      'Een zonnesteek.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q52',
    text: 'Een slachtoffer met diabetes is verward en reageert traag. Je twijfelt tussen een hypo en een hyper. Wat doe je?',
    options: [
      'Je geeft niets en wacht tot het slachtoffer zelf aangeeft wat hij nodig heeft.',
      'Je geeft suiker (bijv. druivensuiker of limonade) zolang het slachtoffer kan slikken.',
      'Je dient direct een extra dosis insuline toe.',
      'Je laat het slachtoffer een uur slapen om bij te komen.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q53',
    text: 'Waarom is een \'hypo\' voor een BHV\'er spoedeisender dan een \'hyper\'?',
    options: [
      'Omdat een hyper binnen 5 minuten tot de dood leidt.',
      'Omdat bij een hypo de hersenen direct een tekort aan brandstof hebben, wat snel tot bewusteloosheid leidt.',
      'Omdat een hypo besmettelijk is voor omstanders.',
      'Omdat een hyper alleen in het ziekenhuis herkend kan worden.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q54',
    text: 'Wat is het belangrijkste kenmerk van een open botbreuk?',
    options: [
      'Er is altijd een botstuk zichtbaar dat naar buiten steekt.',
      'Er is een verbinding tussen de breukplaats en de buitenlucht (wond).',
      'Het slachtoffer kan het ledemaat nog volledig bewegen.',
      'De breuk zit altijd in een gewricht zoals de knie of elleboog.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q55',
    text: 'Wat is de juiste EHBO bij een vermoedelijke botbreuk van de onderarm?',
    options: [
      'De arm voorzichtig rechtbuigen als deze in een hoek staat.',
      'De arm immobiliseren in de stand waarin je deze aantreft.',
      'Het slachtoffer vragen om de arm hard rond te draaien om de spieren los te maken.',
      'Direct een nat verband aanleggen om de warmte af te voeren.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q56',
    text: 'Welke actie onderneem je bij een slachtoffer met een verstuikte enkel?',
    options: [
      'De schoen direct uittrekken, ook als je geen ijs hebt.',
      'De enkel koelen met water of ijs (niet direct op de huid) en rust geven.',
      'Het slachtoffer verplichten om direct weer te gaan lopen tegen de stijfheid.',
      'De enkel warm houden met een kruik om de doorbloeding te stimuleren.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q57',
    text: 'Je vermoedt een botbreuk in de bovenarm. Welk hulpmiddel gebruik je om de arm rust te geven?',
    options: [
      'Een mitella of een brede das.',
      'Een pleisterkaart voor extra stevigheid.',
      'Een drukverband over de gehele lengte van de arm.',
      'Je gebruikt geen hulpmiddelen en laat de arm gewoon hangen.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q58',
    text: 'Er zit een splinter in het witte gedeelte van het oog van een collega. Wat doe je?',
    options: [
      'Je verwijdert de splinter voorzichtig met een pincet.',
      'Je probeert de splinter weg te spoelen met veel water.',
      'Je blijft eraf, dekt het oog af en verwijst door naar een arts.',
      'Je vraagt de collega om hard in het oog te wrijven.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q59',
    text: 'Waarom moet je bij ernstig oogletsel vaak beide ogen afdekken?',
    options: [
      'Om te voorkomen dat het slachtoffer schrikt van de omgeving.',
      'Omdat de ogen samenwerken; als het gezonde oog beweegt, beweegt het gewonde oog mee.',
      'Om te zorgen dat het slachtoffer niet kan zien hoe erg het letsel is.',
      'Dat is een verouderde richtlijn en wordt niet meer gedaan.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q60',
    text: 'Een slachtoffer heeft last van een \'zandkorrelgevoel\' in het oog na werkzaamheden met een slijptol. Wat is de juiste aanpak?',
    options: [
      'Het oog direct 20 minuten spoelen met melk.',
      'Niet wrijven, het oog afdekken en medische hulp zoeken (kans op metaalsplinters).',
      'Het ooglid omklappen en met een droog wattenstaafje over de oogbol wrijven.',
      'Een pleister over het oog plakken en de collega weer aan het werk sturen.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q61',
    text: 'Wat is de minimale spoeltijd bij een chemische verbranding (bijtende stof) in het oog?',
    options: [
      '30 seconden.',
      '5 minuten.',
      '15 tot 20 minuten (of tot de ambulance er is).',
      'Een uur, maar alleen met gedestilleerd water.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q62',
    text: 'Wat is het voordeel van een pleisterkaart bij een verwonding aan een vingertop?',
    options: [
      'De pleister is sterieler dan een gewone pleister.',
      'Door de inkepingen kan de pleister goed rond de vingertop gevouwen worden zonder plooien.',
      'De pleisterkaart bevat een speciaal middel dat de wond sneller laat genezen.',
      'Een pleisterkaart hoef je nooit te vervangen.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q63',
    text: 'Je treft een slachtoffer aan met een schaar in de bovenarm. Wat is je eerste zorg?',
    options: [
      'De schaar eruit trekken om de wond schoon te maken.',
      'De schaar laten zitten en deze stabiliseren met verbandmateriaal.',
      'De wond om de schaar heen wassen met zeepwater.',
      'De schaar korter knippen zodat deze minder uitsteekt.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q64',
    text: 'Wanneer pas je een wonddrukverband toe?',
    options: [
      'Bij een lichte schaafwond.',
      'Bij een botbreuk waarbij geen bloed zichtbaar is.',
      'Bij een ernstige, spuitende bloeding die niet stopt door directe druk.',
      'Bij een verstuikte enkel om de zwelling tegen te gaan.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q65',
    text: 'Je moet een grote wond afdekken met meerdere gazen. Hoe ga je creatief te werk om dit vast te zetten?',
    options: [
      'Je gebruikt de hele rol snelverband als opvulling en zet het vast met een zwachtel.',
      'Je plakt alle gazen afzonderlijk vast met kleine pleisters.',
      'Je gebruikt een theedoek van de kantine als steriel gaas.',
      'Je legt de gazen op de wond en vraagt het slachtoffer om deze met de hand vast te houden.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q66',
    text: 'Wat betekent \'steriel\' in de context van wondverzorging?',
    options: [
      'Dat het materiaal gewassen is in een wasmachine op 60 graden.',
      'Dat het materiaal volledig vrij is van levende micro-organismen (bacteriën).',
      'Dat de BHV\'er zijn handen heeft gewassen met desinfecterende gel.',
      'Dat de pleister transparant is.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q67',
    text: 'Waarom mag je de witte binnenzijde van een wondgaasje niet aanraken met je vingers?',
    options: [
      'Omdat het gaasje dan aan je vingers blijft plakken.',
      'Om besmetting van de wond met bacteriën vanaf je handen te voorkomen.',
      'Omdat het vet op je vingers de absorberende werking van het gaasje stopt.',
      'Omdat je vingers anders gewond kunnen raken door het gaas.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q68',
    text: 'Een slachtoffer heeft een grote wond aan het bovenbeen die hard bloedt. Je hebt geen drukverband bij de hand. Wat doe je?',
    options: [
      'Je drukt met je (behandschoende) handen of een schoon doekje direct krachtig op de wond.',
      'Je rent weg om een verbanddoos te zoeken en laat het slachtoffer alleen.',
      'Je legt een knoop in het been om de bloedtoevoer te stoppen.',
      'Je giet alcohol over de wond om het bloeden te stelpen.'
    ],
    correctIndex: 0,
  },
  {
    id: 'q69',
    text: 'Wat zie je op een nevenpaneel van de brandmeldcentrale (BMC)?',
    options: [
      'De telefoonnummers van alle medewerkers.',
      'Dezelfde informatie als op de hoofdcentrale, zoals de locatie van de melding.',
      'Een overzicht van de weersomstandigheden buiten.',
      'De bediening van de liftinstallatie.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q70',
    text: 'Wat is het doel van een rookmelder (optisch)?',
    options: [
      'Het blussen van de brand in een vroeg stadium.',
      'Het detecteren van rookdeeltjes en het doorgeven van een alarm aan de BMC.',
      'Het automatisch openen van alle ramen in het gebouw.',
      'Het meten van de hoeveelheid zuurstof in de lucht.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q71',
    text: 'In welke ruimte tref je vaak een thermische melder aan in plaats van een optische rookmelder?',
    options: [
      'In een kantoortuin.',
      'In een archiefruimte.',
      'In een grootkeuken of werkplaats waar veel stof/damp vrijkomt.',
      'In de gangen van het trappenhuis.'
    ],
    correctIndex: 2,
  },
  {
    id: 'q72',
    text: 'Wat is de functie van een sprinklerkop?',
    options: [
      'De brand ontdekken en direct de brandweer bellen.',
      'De brand beheersen of blussen door water te sproeien bij een bepaalde temperatuur.',
      'Rook uit de ruimte zuigen.',
      'Het gebouw koelen tijdens een warme zomerdag.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q73',
    text: 'Waarvoor dient een handbrandmelder?',
    options: [
      'Om de verlichting in de gang aan te zetten.',
      'Om handmatig een brandmelding te doen bij de BMC.',
      'Om de deur naar de nooduitgang handmatig te vergrendelen.',
      'Om de lift naar de juiste verdieping te roepen.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q74',
    text: 'Wat is een \'brandcompartiment\'?',
    options: [
      'Een ruimte waar brandbare stoffen veilig worden opgeslagen.',
      'Een gedeelte van een gebouw dat door brandwerende wanden en deuren is afgescheiden om branduitbreiding te vertragen.',
      'De kofferbak van de auto van de BHV\'er.',
      'Een speciale afvalbak voor asresten.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q75',
    text: 'Wat is de taak van de BHV\'er bij een nevenindicator boven een gesloten deur?',
    options: [
      'De deur direct openen om te zien wat er aan de hand is.',
      'Vaststellen dat in die specifieke ruimte een melder in alarm is gegaan en de deurprocedure doen.',
      'Een pleister op de indicator plakken omdat het licht storend is.',
      'De stroomtoevoer naar die kamer afsluiten.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q76',
    text: 'Waarom zijn nooduitgangen altijd voorzien van een groen vluchtwegbordje met verlichting?',
    options: [
      'Zodat de elektriciteitsrekening van het bedrijf lager is.',
      'Zodat de vluchtweg ook bij rook of stroomuitval goed vindbaar blijft.',
      'Omdat groen de favoriete kleur is van de brandweer.',
      'Om aan te geven dat het gebouw duurzaam is.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q77',
    text: 'Wat is de juiste procedure als je een slachtoffer aantreft die op de buik ligt en niet reageert?',
    options: [
      'Je controleert de ademhaling terwijl het slachtoffer op de buik blijft liggen.',
      'Je draait het slachtoffer direct op de rug om de ademhaling goed te kunnen beoordelen.',
      'Je laat het slachtoffer op de buik liggen en wacht op de ambulance.',
      'Je tikt alleen op de rug om te kijken of het slachtoffer wakker wordt.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q78',
    text: 'Bij het plakken van de AED-elektroden zie je dat het slachtoffer een dikke laag borsthaar heeft waardoor de elektrode niet goed plakt. Wat is de juiste actie?',
    options: [
      'Je plakt de elektrode over het haar en drukt extra hard aan.',
      'Je gebruikt het scheermesje uit de AED-set om het haar op de plakplaatsen snel weg te scheren.',
      'Je stopt met de AED en gaat alleen door met borstcompressies.',
      'Je plakt de elektroden op de bovenarmen in plaats van op de borstkas.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q79',
    text: 'Wat is de functie van een \'nevenpaneel\' van de brandmeldinstallatie bij een achteringang van een groot gebouw?',
    options: [
      'Het dient enkel als reserveonderdeel voor als de hoofdcentrale kapot gaat.',
      'Het stelt BHV\'ers of de brandweer in staat om ook bij die ingang direct te zien waar de melding vandaan komt.',
      'Het wordt gebruikt om de temperatuur in de technische ruimte te regelen.',
      'Het is een bedieningspaneel om de sprinklerinstallatie handmatig uit te zetten.'
    ],
    correctIndex: 1,
  },
  {
    id: 'q80',
    text: 'Je moet een wond afdekken waarbij een vreemd voorwerp (zoals een glasscherf) uit de huid steekt. Hoe breng je het verband aan?',
    options: [
      'Je legt een dikke laag gazen direct bovenop de scherf en drukt deze stevig aan.',
      'Je bouwt met rollen verband of gazen een \'ring\' of \'wal\' om het voorwerp heen, zodat het gefixeerd wordt zonder er op te drukken.',
      'Je wikkelt een pleisterkaart strak om het voorwerp heen.',
      'Je smeert eerst ontsmettende zalf op de scherf voordat je het afdekt.'
    ],
    correctIndex: 1,
  },
];
