import {
  createQuestion,
  QUESTION_TYPES,
  SUBJECTS,
  DIFFICULTY_LEVELS
} from "../question-schema.js";

const TEST_1_QUESTIONS = [
  createQuestion({
    id: "bio-tcgt-t1-q001",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Urmatoarele afirmatii sunt adevarate , CU EXCEPTIA:",
    options: {
      A: "Tesut cartilaginos semidur elastic intalnim in pavilionul urechii",
      B: "Tesut conjunctiv semidur fibros intalnim in ligamente si aponevroze",
      C: "Epiteliul traheal este cilindric ciliat si neciliat , pseudostratificat",
      D: "Mucoasa tubului digestiv este un epiteliu simplu cilindric ciliat si neciliat , unistratificat",
      E: "Uroteliul este un epiteliu de tranzitie , de acoperire , pluristratificat",
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q002",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Urmatoarele afirmatii sunt adevarate , CU EXCEPTIA:",
    options: {
      A: "Contractilitatea reprezinta proprietatea celulelor musculare de a transforma energia chimica in energie mecanica",
      B: "Presiunea osmotica este proportionala cu numarul de particule dizolvate in solutie",
      C: "Membrana semipermeabila presupune ca aceasta sa permita mai mult transferul moleculelor de solvit dacat cele de solvent",
      D: "Canalele ionice nu pot fi vizualizate cu microscopul electronic",
      E: "O forma particulara de exocitoza o intalnim la nivelul butonilor terminali axonali",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q003",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O celula are valoarea potentialului prag de -30 mV ; daca asupra acesteia se aplica intr-un anumit punct al membranei celulare un stimul chimic care va provoca o depolarizare locala de -20mV , se produc urmatoarele fenomene , CU EXCEPTIA:",
    options: {
      A: "Va rezulta un potential de actiune",
      B: "Stimulul aplicat este subliminar",
      C: "Potentialul rezultat se va propaga in ambele sensuri",
      D: "Canalele voltaj dependente pentru Na+ se vor deschide cand potentialul de membrane atinge valoarea de -30mV",
      E: "Potentialul rezultat va depolariza toata membrana celulara",
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q004",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Care dintre afirmatiile privind epiteliile senzoriale este corecta?",
    options: {
      A: "Sunt formate din celule specializate care intra in structura organelor de simt",
      B: "Transforma stimulii in produsi de secretie",
      C: "Sunt formate din celule sub forma de coloane",
      D: "Intra in structura segmentului intermediar al organelor de simt",
      E: "Sunt formate din celule sub forma de foliculi",
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q005",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Tunica interna a vaselor sangvine si limfatice este de tip:",
    options: {
      A: "Cubic simplu",
      B: "Cilindric simplu",
      C: "Pavimentos simplu",
      D: "Pavimentos pseudostratificat",
      E: "Cilindric stratificat",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q006",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Pe parcursul perioadei refractare relative:",
    options: {
      A: "Se inactiveaza canalele pentru Na+",
      B: "Se poate obtine un nou potential de actiune la aplicarea oricarui tip de stimul",
      C: "Potentialul de actiune nou obtinut are o amplitudine mai mare decat in mod normal",
      D: "Potentialul de actiune nou obtinut are o viteza de aparatie a pantei ascendente mai mica",
      E: "Nu se poate obtine un nou potential de actiune , indifferent de intensitatea stimulului",
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q007",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Urmatoarele afirmatii despre ribozomi sunt adevarate , CU EXCEPTIA:",
    options: {
      A: "Intra in structura corpilor tigroizi",
      B: "Intra in structura ergastoplasmei",
      C: "Sunt granule cilindrice cu dimensiunea de 150 – 250 Å",
      D: "Reprezinta sediul sintezei proteice",
      E: "Intra in structura corpilor Nissl",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q008",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Planul transversal:",
    options: {
      A: "Reprezinta planul simetriei corpului",
      B: "Contine axul antero-posterior si axul longitudinal",
      C: "Contine axul sagital si axul transversal",
      D: "Imparte corpul in doua jumatati: ventrala si dorsala",
      E: "Imparte corpul in doua jumatati simetrice",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q009",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Care dintre urmatoarele structuri NU CONTINE tesut conjunctiv moale?",
    options: {
      A: "Splina",
      B: "Tunica medie a venelor",
      C: "Epiglota",
      D: "Ganglionii limfatici",
      E: "Hipodermul",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q010",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la potentialul membranar de repaus putem afirma urmatoarele , CU EXCEPTIA:",
    options: {
      A: "Este mentinut prin activitatea pompelor de Na+/K+",
      B: "Este un potential membranar constant , in absenta unui stimul",
      C: "Are o valoare apropiata de cea a potentialului de echilibru pentru K+",
      D: "Presupune mentinerea relativ constanta a concentratiei intracelulare a ionilor de Na+ si K+",
      E: "Presupune reintroducerea a mai multor ioni de K+ fata de expulzia ionilor de Na+",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q011",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la structura tesuturilor , urmatoarele afirmatii sunt adevarate , CU EXCEPTIA:",
    options: {
      A: "Epiteliul traheal este cilindric ciliat si neciliat , unistratificat",
      B: "Epiteliul mucoasei bucale este pavimentos stratificat nekeratinizat",
      C: "Canalele glandelor exocrine au un epiteliu cubic si cilindric , pluristratificat",
      D: "Tesutul conjunctiv semidur de tip fibros alcatuieste meniscurile articulare si discurile intervertebrale",
      E: "Epiteliul mucoasei nazale este de tip senzorial",
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q012",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Pompele de Na+/K+ mentin potentialul membranar de repaus prin respectarea urmatorului raport:",
    options: {
      A: "Reintroducere/expulzie: 3 K+/2 Na+",
      B: "Reintroducere/expulzie: 3 Na+/2 K+",
      C: "Reintroducere/expulzie: 2 K+/3 Na+",
      D: "Expulzie/reintroducere: 3 K+/2 Na+",
      E: "Expulzie/reintroducere:2 K+/3 Na+",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q013",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la evenimentele din timpul potentialului de actiune al unui neuron , putem afirma urmatoarele , CU EXCEPTIA:",
    options: {
      A: "Potentialul de membrana atinge o valoare maxima de +40mV",
      B: "Atunci cand depolarizarea scade , Na+ difuzeaza in celula",
      C: "Canalele voltaj dependente pentru Na+ se deschid in prezenta stimulului depolarizant",
      D: "Canalele voltaj dependente pentru K+ se deschid in prezenta stimulului depolarizant",
      E: "In timpul pantei ascendente canalele pentru Na+ sunt inactivate",
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q014",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Celula polinucleata este:",
    options: {
      A: "Hematia adulta",
      B: "Hepatocitul",
      C: "Fibra musculara neteda",
      D: "Fibra musculara striata",
      E: "Neuronul somatomotor radicular de tip α",
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q015",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Urmatoarele organite celulare sunt commune , CU EXCEPTIA:",
    options: {
      A: "Lizozomii",
      B: "Dictiozomii",
      C: "Corpusculii lui Palade",
      D: "Reticulul endoplasmic rugos",
      E: "Corpii tigroizi",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q016",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre proteinele plasmalemei putem afirma urmatoarele , CU EXCEPTIA:",
    options: {
      A: "Se pot afla pe suprafata interna",
      B: "Se pot afla pe suprafata externa",
      C: "Se pot afla transmembranar",
      D: "Realizeaza functiile specializate",
      E: "Dispunerea lor uniforma in cadrul structurii lipidice realizeaza un model structural denumit “modelul mozaic fluid”",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q017",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "In cadrul functiilor de relatie ale organismului sunt incluse urmatoarele procese si structuri , CU EXCEPTIA:",
    options: {
      A: "Miscarea",
      B: "Metabolismul",
      C: "Glandele endocrine",
      D: "Sistemul nervos",
      E: "Analizatorii",
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q018",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Ce puteti afirma despre planul metameriei corpului?",
    options: {
      A: "Imparte corpul in doua jumatati simetrice",
      B: "Imparte corpul intr-o jumatate ventral si alta dorsala",
      C: "Imparte corpul intr-o jumatate craniala si alta caudala",
      D: "Contine axul sagital si axul longitudinal",
      E: "Contine axul longitudinal si axul transversal",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q019",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Dimensiunile nucleului celular variaza intre:",
    options: {
      A: "10 – 20 µ",
      B: "5 – 10 µ",
      C: "3 – 20 µ",
      D: "20 – 30 µ",
      E: "7,5 – 20 µ",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q020",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "In laborator se studiaza potentialul de actiune al urmatoarelor celule: neuronul , celula miocardica ventriculara si fibra musculara neteda de la nivelul antrului gastric. Referitor la aceste studii se pot afirma urmatoarele , CU EXCEPTIA:",
    options: {
      A: "Toate aceste celule prezinta mecanisme de producere diferite pentru potentialul de actiune",
      B: "Toate aceste celule prezinta potentiale de actiune cu aspecte diferite",
      C: "Toate aceste celule prezinta potentiale de actiune cu durate diferite",
      D: "Valoarea maxima a potentialului de actiune este cu putin peste 0 mV pentru fibra musculara neteda de la nivelul antrului gastric",
      E: "Cea mai mare durata a potentialului de actiune este inregistrata la celula miocardica ventriculara",
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q021",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "In care din urmatoarele organe intalnim tesut secretor de tip folicular?",
    options: {
      A: "Pancreas",
      B: "Adenohipofiza",
      C: "Testicul",
      D: "Glande paratiroide",
      E: "Tiroida",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q022",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Care organite celulare se mai numesc dictiozomi?",
    options: {
      A: "Reticulul endoplasmic rugos",
      B: "Lizozomii",
      C: "Ribozomii",
      D: "Mitocondriile",
      E: "Aparatul Golgi",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q023",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Perioada refractara absoluta:",
    options: {
      A: "Presupune obtinerea unui nou potential de actiune la intensitati foarte mari ale stimulului depolarizant",
      B: "Nu permite obtinerea unui nou potential de actiune , indiferent de intensitatea stimulului",
      C: "Cuprinde numai panta ascendenta a potentialului de actiune",
      D: "Cuprinde numai panta descendenta a potentialului de actiune",
      E: "Se datoreaza inactivarii canalelor pentru K+",
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q024",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Carioplasma:",
    options: {
      A: "Se afla sub plasmalema",
      B: "Este o solutie coloidala cu aspect neomogen",
      C: "Prezinta o retea de filamente subtiri formate din granulatii fine de cromatina",
      D: "Cuprinde intotdeauna un singur nucleol",
      E: "Contribuie la formarea cromozomilor la sfarsitul diviziunii celulare",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q025",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Urmatoarea afirmatie este falsa:",
    options: {
      A: "plasmalema prezinta permeabilitate selectiva",
      B: "plasmalema asigura schimb bidirectional de substante",
      C: "celula musculara striata de tip scheletic a unei femei prezinta structura cromozomiala 44 + xx",
      D: "canalele ionice transmembranare au structura proteica",
      E: "osmoza reprezinta un mecanism care necesita carausi",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q026",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Referitor la organitele comune urmatoarele afirmatii sunt adevarate:

1. Reticulul endoplasmic neted leaga plasmalema de nucleu
2. Reticulul endoplasmic neted este o retrea de citomembrane cu aspect diferit
3. Reticulul endoplasmic rugos intervine in sinteza proteica
4. Dictiozomii au rol in excretia unor substante celulare`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q027",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Fibre musculare striate se pot intalni la urmatoarele structuri , CU EXCEPTIA:

1. Muschiul diafragm
2. Urechea medie
3. Faringe
4. Miocard`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q028",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Tesuturile sunt formate din urmatoarele componente , CU EXCEPTIA:

1. Celule cu aceeasi functie
2. Celule cu acelasi grup de functii
3. Substanta fundamentala
4. Substanta de ciment`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q029",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Cartilaje de tip hialin sunt urmatoarele , CU EXCEPTIA:

1. Traheale
2. Laringeale
3. Costale
4. Articulare`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q030",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Citoplasma celulara:

1. Se mai numeste hialoplasma
2. Are o parte structurata (organitele celulare) si o parte nestructurata (hialoplasma)
3. Are o parte nestructurata (organitele celulare) si o parte structurata (hialoplasma)
4. Cuprinde apa ca si mediu de dispersie`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q031",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Urmatoarele structuri sunt formate din muschi netezi de tip visceral , CU EXCEPTIA:

1. Faringe
2. Tunica musculara a arterelor
3. Laringe
4. Vagin`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q032",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Tesut epitelial secretor pluricelular intalnim in:

1. Glandele endocrine tubulare
2. Glandele endocrine tubuloacinoase
3. Glandele endocrine acinoase
4. Foliculii tiroidieni`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q033",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Epitelii de acoperire pluristratificate cubice si cilindrice intalnim in canalele glandelor:

1. Parotide
2. Sublinguale
3. Submandibulare
4. Sudoripare`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q034",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Structura plasmalemei:

1. Cuprinde in special fosfolipide si proteine
2. Are atasat pe fata externa si glucide puternic incarcate negativ
3. Constituie modelul mozaic fluid
4. Are atasat pe fata externa si glucide puternic incarcate pozitiv`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q035",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `In structura plasmalemei:

1. Se gasesc in principal fosfolipide si proteine
2. Fosfolipidele sunt astfel dispuse , incat portiunea lor hidrofoba formeaza un bistrat
3. Componenta proteica realizeaza mecanismele de transport transmembranar
4. Miezul hidrofil al stratului fosfolipidic restrictioneaza pasajul transmembranar al moleculelor hidrosolubile si al ionilor`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q036",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Caracteristicile tesutului conjunctiv lax sunt:

1. Leaga unele organe
2. Se afla in jurul unor organe
3. Este un tesut conjunctiv moale
4. Se afla in ganglionii limfatici`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q037",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Glucoza se poate absorbi in sange prin urmatoarele mecanisme , la nivelul enterocitului:

1. Difuziune simpla
2. Difuziune facilitata
3. Osmoza
4. Transport activ Na+ dependent`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q038",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Partile componente principale din structura celulei sunt:

1. Lizozomii
2. Plasmalema
3. Carioplasma
4. Nucleul`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q039",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Uroteliul este un tesut epitelial:

1. Glandular
2. De acoperire
3. Pseudostratificat
4. Pluristratificat`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q040",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Afirmatiile corecte privind celula sunt:

1. Este unitatea de baza morfofunctionala a organizarii materiei vii
2. Forma sa este legata de functie
3. Poate exista singura sau in grup
4. Are initial forma globuloasa`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q041",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Dimensiunile celulelor:

1. Variaza indiferent de specializarea lor
2. Variaza in functie de varsta
3. Sunt cuprinse intre 150 – 200 µ la fibra musculara striata
4. Au o medie de 20 – 30 µ`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q042",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Epiteliu de acoperire pavimentos unistratificat poate fi intalnit in:

1. Tunica interna a arterelor
2. Tunica interna a vaselor limfatice
3. Tunica interna a venelor
4. Peretele capilarelor`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q043",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Tesut conjunctiv moale elastic intalnim in:

1. Tunica medie a arterelor
2. Tunica medie a vaselor limfatice
3. Tunica medie a venelor
4. Epiglota`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q044",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Proprietati speciale ale celulelor sunt:

1. Transportul transmembranar
2. Contractilitatea
3. Reproducerea celulara
4. Activitatea secretorie`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q045",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Care dintre urmatoarele functii ale organismului sunt de nutritie?

1. Excretia
2. Respiratia
3. Metabolismul
4. Circulatia`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q046",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Tesut cartilaginos hialin intalnim in:

1. Trahee
2. Coaste
3. Laringe
4. Discurile intervertebrale`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q047",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Urmatoarele celule pot fi mononucleate , CU EXCEPTIA:

1. Neuronii somatomotori
2. Neuronii somatosenzitivi
3. Neuronii de asociatie
4. Neuronii viscerosenzitivi`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q048",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Despre trunchiul corpului putem afirma urmatoarele:

1. Contine pelvisul
2. Contine diafragma toracica
3. Contine toracele
4. Contine diafragma perineala`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q049",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Despre planul simetriei corpului putem afirma urmatoarele , CU EXCEPTIA:

1. Este planul transversal
2. Este planul frontal
3. Contine axul longitudinal si axul transversal
4. Contine axul sagital si axul transversal`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q050",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Cromozomii pot contine:

1. Ioni de Ca si Mg
2. Cantitati mici de lipide
3. Proteine nonhistonice
4. ARN`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q051",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Incluziunile citoplasmatice sunt reprezentate de:

1. Produsi de secretie
2. Pigmenti
3. Granule de substante de rezerva
4. Organite comune si specifice`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q052",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `La nivelul membranei celulare prin difuziune simpla se transporta urmatoarele substante:

1. CO2
2. Uree
3. Etanol
4. Glucoza`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q053",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Care dintre urmatoarele substante NU au nevoie de proteine transportoare pentru a traversa membrana celulara?

1. O2
2. Hormonii steroizi
3. Etanol
4. Glucoza`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q054",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Forme particulare de endocitoza sunt:

1. Difuziunea facilitata
2. Pinocitoza
3. Transportul pasiv
4. Fagocitoza`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q055",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Unde intalnim epiteliu de acoperire pluristratificat cubic si cilindric?

1. Epiteliul traheal
2. Uroteliu
3. Mucoasa tubului digestiv
4. Canalele glandelor exocrine`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q056",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `NU sunt organite comune:

1. Ribozomii
2. Centrosfera
3. Mitocondriile
4. Miofibrilele`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q057",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Prelungiri citoplasmatice permanente sunt urmatoarele , CU EXCEPTIA:

1. Cili
2. Desmozomi
3. Microvilli
4. Pseudopode`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q058",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Membranele celulare:

1. Faciliteaza osmoza
2. Faciliteaza difuziunea hormonilor sterolici
3. Sunt mai permeabile pentru moleculele de solvent
4. Sunt mai permeabile pentru moleculele de solvit`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q059",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Desmozomii sunt intalniti la nivelul urmatoarelor tesuturi , CU EXCEPTIA:

1. Conjunctiv
2. Nervos
3. Muscular
4. Epitelial`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t1-q060",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: `Mecanismele membranare care necesita prezenta unor proteine transportoare sunt:

1. Osmoza
2. Transportul activ
3. Difuziunea simpla
4. Difuziunea facilitata`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false",
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
];

export {
  TEST_1_QUESTIONS
};