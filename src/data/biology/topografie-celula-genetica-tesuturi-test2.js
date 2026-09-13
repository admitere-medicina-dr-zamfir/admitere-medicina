import {
  createQuestion,
  QUESTION_TYPES,
  SUBJECTS,
  DIFFICULTY_LEVELS
} from "../question-schema.js";

const TEST_2_QUESTIONS = [

  createQuestion({
    id: "bio-tcgt-t2-q001",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Urmatoarele afirmatii sunt adevarate, CU EXCEPTIA:",
    options: {
      A: "Dupa aplicarea unui stimul depolarizant asupra unei membrane celulare se deschid ambele canale voltaj dependente, atat cele pentru Na+ cat si cele pentru K+",
      B: "Depolarizarea membranara creste dupa ce ionii de Na+ difuzeaza in celula",
      C: "Depolarizarea membranara scade dupa ce ionii de K+ difuzeaza in afara celulei",
      D: "Dupa ce ionii de Na+ difuzeaza in celula, potentialul de membrana variaza de la -65 mV la +40 mV",
      E: "Ionii de K+ ies din celula prin mecanisme care se desfasoara cu consum de ATP"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q002",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la celula putem afirma urmatoarele, CU EXCEPTIA:",
    options: {
      A: "Toate celulele au forma legata de functia lor",
      B: "Celulele cartilaginoase au forma globuloasa",
      C: "Media dimensiunii unei celule este considerata 20-30 µ",
      D: "Reprezinta doar o unitate morfofunctionala de baza a materiei vii",
      E: "Poate exista singura sau in grup constituind diferite tesuturi"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q003",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Este adevarata urmatoarea afirmatie:",
    options: {
      A: "Centrozomul lipseste in neuronii vegetativi parasimpatici",
      B: "Centrozomul este format dintr-un singur centriol cilindric",
      C: "Hematia adulta are o dimensiune de 7,5 µ si este mononucleata",
      D: "Toate celulele din corpul uman prezinta aceleasi organite comune",
      E: "Celulele nervoase prezinta corpi Nissl care sunt echivalentul reticulului endoplasmatic rugos cu rol in excretia unor substante celulare"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q004",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Centrosfera este prezenta la nivelul:",
    options: {
      A: "Mitocondriilor",
      B: "Lizozomilor",
      C: "Corpilor Nissl",
      D: "Dictiozomilor",
      E: "Nici una dintre cele de mai sus"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q005",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la plasmalema, urmatoarele afirmatii sunt adevarate, CU EXCEPTIA:",
    options: {
      A: "Glucidele din plasmalema, atasate pe fata ei externa sunt puternic incarcate negativ",
      B: "Este inclusa in faza dispersata a celulei",
      C: "Contine si glicoproteine si glicolipide",
      D: "Prezinta proteine ce se pot afla pe fata externa, interna sau transmembranar",
      E: "Pseudopodele leucocitelor sunt acoperite de plasmalema"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
createQuestion({
    id: "bio-tcgt-t2-q006",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Urmatoarele afirmatii sunt false, CU EXCEPTIA:",
    options: {
      A: "Modelul mozaic fluid al membranei celulare este reprezentat de distributia uniforma a proteinelor in cadrul structurii lipidice",
      B: "Hialoplasma este o componenta nestructurata a plasmalemei",
      C: "Corpusculii lui Palade au rol important in celulele fagocitare pentru ca au continut enzimatic hidrolitic",
      D: "Microvilii, structuri acoperite de membrana celulara, sunt prelungiri permanente ale epiteliului tubilor renali",
      E: "Dictiozomii sunt bogati in ribonucleoproteine"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q007",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Ergastoplasma:",
    options: {
      A: "Are rol important in fosforilarea oxidativa",
      B: "Este inconjurata de centrosfera",
      C: "Este organita specifica celulei nervoase",
      D: "Prezinta pe suprafata sa externa corpusculii lui Palade",
      E: "Poate prezenta dictiozomi"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q008",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre dictiozomi putem afirma:",
    options: {
      A: "Sunt corpusculi de legatura ce solidarizeaza celulele epiteliale",
      B: "Sunt organite bogate in ribonucleoproteine",
      C: "Sunt situati in apropierea nucleului si au rol in sinteza de proteine",
      D: "Reprezinta un tip de incluziuni citoplasmatice",
      E: "Sunt formati din micro-, macrovezicule si cisterne alungite"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q009",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "La nivelul citoplasmei celulare gasim:",
    options: {
      A: "Faza dispersata ce prezinta micelii coloidale aflate intr-o miscare organizata",
      B: "Corpusculii lui Palade, care sunt organite specifice",
      C: "Incluziuni citoplasmatice, cu caracter permanent, reprezentate de granule de substante de rezerva, produsi de secretie si pigmenti",
      D: "Carioplasma",
      E: "Nici una dintre cele de mai sus"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q010",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la nucleul celular, este FALSA urmatoarea afirmatie:",
    options: {
      A: "Contine unul sau mai multi nucleoli",
      B: "Membrana nucleara este dubla, poroasa",
      C: "Cromozomii se formeaza din cromatina",
      D: "Membrana nucleara prezinta ribozomi pe suprafata externa",
      E: "Pozitia nucleului in cadrul unei celule este intotdeauna centrala"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
  createQuestion({
    id: "bio-tcgt-t2-q011",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Proteinele histonice se afla la nivelul:",
    options: {
      A: "Dictiozomilor",
      B: "Ribozomilor",
      C: "Centriolilor",
      D: "Centrozomului",
      E: "Nici una de mai sus"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q012",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre cromozomi sunt adevarate urmatoarele:",
    options: {
      A: "Se formeaza din cromatina si nu cuprind ioni de Mg2+",
      B: "Se formeaza la sfarsitul diviziunii celulare",
      C: "Exista la nivelul nucleului si al ribozomilor",
      D: "Contin ARN",
      E: "Nici una de mai sus"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q013",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Proprietatile celulei sunt:",
    options: {
      A: "Sinteza proteica",
      B: "Metabolismul celular",
      C: "Reproducerea celulara",
      D: "Transportul transmembranar",
      E: "Toate cele de mai sus"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q014",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Urmatoarea afirmatie este FALSA:",
    options: {
      A: "Membrana celulara nu prezinta permeabilitate selectiva pentru ioni",
      B: "Difuziunea, spre deosebire de osmoza, se refera si la moleculele unui gaz",
      C: "Membrana celulara nu reprezinta o bariera in difuziunea moleculelor nepolarizate",
      D: "Difuziunea facilitata este o modalitate de transport pasiv",
      E: "Difuziunea facilitata necesita prezenta unor proteine transportoare"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q015",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Urmatoarele afirmatii sunt adevarate, CU EXCEPTIA:",
    options: {
      A: "Ureea, spre deosebire de hormonii steroizi, nu poate difuza prin membrana celulara",
      B: "Hormonii steroizi nu reprezinta molecule organice polarizate, dar sunt neancarcate electric",
      C: "Glucoza necesita proteine transportoare intrucat este polarizata",
      D: "Toate de mai sus sunt false",
      E: "Nici una de mai sus nu este falsa"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
  createQuestion({
    id: "bio-tcgt-t2-q016",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Difuziunea facilitata:",
    options: {
      A: "Este o forma pasiva de transport transmembranar",
      B: "Nu utilizeaza proteine transportoare",
      C: "Permite trecerea in mod specific a moleculelor organice nepolarizate",
      D: "Nu este saturabila",
      E: "Moleculele se mobilizeaza impotriva gradientului de concentratie"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q017",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre membrana celulara sunt false urmatoarele afirmatii, CU EXCEPTIA:",
    options: {
      A: "Contine glucide la suprafata externa iar glucoza poate traversa membrana celulara prin difuziune",
      B: "Permite transportul prin osmoza al moleculelor mari incarcate electric",
      C: "Miezul hidrofob impiedica pasajul transmembranar al moleculelor dar nu si al ionilor",
      D: "Este legata de membrana nucleara prin reticulul endoplasmatic neted",
      E: "Este poroasa, dubla si trilaminata"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q018",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Miscarea dezordonata permanenta a moleculelor unui gaz ca si a moleculelor si ionilor aflati intr-o solutie, rezultata din energia lor, se numeste:",
    options: {
      A: "Osmoza",
      B: "Difuziune facilitata",
      C: "Difuziune",
      D: "Endocitoza",
      E: "Exocitoza"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q019",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Pompa Na/K este:",
    options: {
      A: "O forma de transport activ primar",
      B: "Un tip de transport vezicular",
      C: "O forma de transport activ secundar ce introduce in celula 3 ioni de K+",
      D: "Pompa care mentine valoarea potentialului membranar de repaus",
      E: "Raspunsurile corecte sunt A si D"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q020",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Pinocitoza este:",
    options: {
      A: "Un tip de exocitoza",
      B: "O modalitate de transport prin care materialul intracelular este eliminat in exteriorul celulei",
      C: "O modalitate de a mentine potentialul de membrana",
      D: "Guvernata de presiunea osmotica",
      E: "O forma particulara de transport vezicular"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
   createQuestion({
    id: "bio-tcgt-t2-q021",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Modalitati de mentinere a potentialului de membrana sunt:",
    options: {
      A: "Activitatea pompei Na/K in raport de 2/3",
      B: "Prezenta intracelulara a moleculelor nedifuzibile incarcate pozitiv",
      C: "Permeabilitatea neselectiva a membranei celulare",
      D: "Toate de mai sus",
      E: "Nici una de mai sus"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q022",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Urmatoarele afirmatii sunt adevarate, CU EXCEPTIA:",
    options: {
      A: "Potentialul membranar de repaus are o valoare medie de -65 mV pana la -85 mV (valoare apropiata de cea a potentialului de echilibru pentru Na+)",
      B: "Pompa Na/K introduce K+ si expulzeaza Na+ in raport de 2K+ la 3Na+",
      C: "Raspunsul de tip „tot sau nimic” este in functie de prag",
      D: "Repolarizarea nu se produce prin cresterea permeabilitatii membranei pentru Na+",
      E: "Potentialul de actiune o data generat se propaga in ambele sensuri"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q023",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Indicati care poate fi diferenta intre valoarea maxima a potentialului de actiune si cel de repaus in momentul depolarizarii:",
    options: {
      A: "125 mV",
      B: "120 mV",
      C: "105 mV",
      D: "Toate de mai sus",
      E: "Nici una de mai sus"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q024",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre celulele musculare striate putem afirma:",
    options: {
      A: "Prezinta proprietatea numita contractilitate",
      B: "Exista la nivelul irisului sub forma de muschi multiunitar",
      C: "Sunt binucleate",
      D: "Au dimensiuni intre 150 – 200 µ",
      E: "Prezinta corpi tigroizi"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q025",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Ce puteti afirma referitor la perioada refractara?",
    options: {
      A: "Este exclusa obtinerea unui potential de actiune in perioada refractara",
      B: "Perioada refractara a neuronului este mai lunga decat cea a fibrei musculare de la nivelul miocardului ventricular",
      C: "Cuprinde o perioada in care canalele de Na+ sunt inactivate",
      D: "Cuprinde perioada in care potentialul de actiune poate fi initiat si are o amplitudine normala",
      E: "Cuprinde perioada refractara absoluta ce se suprapune peste toata panta ascendenta si toata panta descendenta"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
  createQuestion({
    id: "bio-tcgt-t2-q026",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Care dintre urmatoarele momente depind de activitatea canalelor de Na+?",
    options: {
      A: "Panta ascendenta",
      B: "Panta descendenta",
      C: "Perioada refractara absoluta",
      D: "Toate de mai sus",
      E: "Doar raspunsurile A si C"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q027",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: "Ce tip de tesut exista la nivelul mucoasei bronhiolelor?",
    options: {
      A: "Tesut epitelial de acoperire pseudostratificat neciliat",
      B: "Tesut epitelial de acoperire simplu cilindric neciliat",
      C: "Tesut epitelial de acoperire pluristratificat cubic",
      D: "Tesut epitelial de acoperire pseudostratificat ciliat",
      E: "Nici unul de mai sus"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
  createQuestion({
    id: "bio-tcgt-t2-q028",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Proprietati generale ale celulelor sunt urmatoarele:

1. Sinteza proteica
2. Metabolismul celular
3. Transportul transmembranar
4. Potentialul de membrana`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
  createQuestion({
    id: "bio-tcgt-t2-q029",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Difuziunea reprezinta miscarea dezordonata a moleculelor sau ionilor care se afla in:

1. Gaze
2. Solide
3. Lichide
4. Toate cele trei stari de agregare`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q030",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Moleculele ce prezinta legaturi covalente polare, dar nu sunt incarcate electric, si pot difuza prin membranele celulare sunt:

1. Ureea
2. Dioxidul de carbon
3. Etanolul
4. Oxigenul`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q031",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Pompa de Ca2+:

1. Poate expulza Ca2+ din celula
2. Functioneza conform transformarii ATP ADP + P1
3. Functioneaza contrar gradientului de concentratie
4. Prezinta un loc de conexiune la nivelul proteinei transportoare`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q032",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Celule cilindrice putem intalni la nivelul:

1. Mucoasei duodenale
2. Mucoasei traheale
3. Mucoasei colonice
4. Canalelor glandelor exocrine`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q033",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Tesutul adipos:

1. Poate fi situat in hipoderm
2. Prezinta celule cu forma globuloasa
3. Poate fi situat in jurul globilor oculari
4. Prezinta celule cu nucleu excentric`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
   createQuestion({
    id: "bio-tcgt-t2-q034",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Ce puteti afirma despre celulele haploide de la nivelul gonadelor masculine?

1. Pot prezenta formula cromozomiala 22 + X
2. Pot prezenta formula cromozomiala 22 + Y
3. Se pot naste dintr-o celula diploida
4. Se pot naste dintr-o celula haploida`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q035",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Un plan care este perpendicular pe planul metameriei corpului poate sa aibe urmatoarele caracteristici, CU EXCEPTIA:

1. Sa contina axul longitudinal
2. Sa contina axul transversal
3. Sa contina axul sagital
4. Sa fie paralel cu fruntea`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q036",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Organite celulare marginite de o membrana proprie pot fi:

1. Ribozomii
2. Corpii Nissl
3. Centrozomul
4. Dictiozomii`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q037",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Veziculele de la nivelul unei celule pot fi in relatie cu urmatoarele structuri:

1. Butonii terminali
2. Membrana celulara
3. Dictiozomii
4. Lizozomii`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q038",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `In structura hialoplasmei putem intalni urmatoarele elemente, CU EXCEPTIA:

1. Produsi de secretie
2. Pigmenti
3. Granule de substanta de rezerva
4. Mediul de dispersie`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
  createQuestion({
    id: "bio-tcgt-t2-q039",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Urmatoarele organite celulare au membrana proprie:

1. Reticulul endoplasmatic neted
2. Lizozomii
3. Ergastoplasma
4. Miofibrilele`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q040",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Tesut conjunctiv dur de tip trabecular putem intalni in:

1. Interiorul oaselor late
2. Epifizele oaselor late
3. Interiorul oaselor scurte
4. Diafizele oaselor lungi`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q041",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Ce puteti afirma despre un epiteliu secretor de tip exocrin?

1. Poate fi simplu (tubuloacinos)
2. Poate fi unicelular
3. Poate fi compus (acinos)
4. Poate fi pluricelular`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q042",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Desmozomii:

1. Sunt intalniti la nivelul mucoasei gastrice
2. Sunt intalniti la nivelul mucoasei traheale
3. Sunt intalniti la nivelul uroteliului
4. Sunt acoperiti de plasmalema`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q043",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Incluziunile citoplasmatice:

1. Pot fi granule de substante de rezerva
2. Pot fi produsi de secretie
3. Pot fi pigmenti
4. Au caracter temporar`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
 createQuestion({
    id: "bio-tcgt-t2-q044",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Tesut osos trabecular se gaseste la nivelul:

1. Diafizelor oaselor lungi
2. Discurilor intervertebrale
3. Exteriorul oaselor late
4. Oaselor scurte`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q045",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Sunt adevarate urmatoarele asocieri, CU EXCEPTIA:

1. Tesut epitelial secretor mixt – ovar
2. Tesut conjunctiv moale reticulat – tunica medie a venelor
3. Canalele glandelor exocrine – tesut epitelial de acoperire pluristratificat
4. Menisc articular – tesut conjunctiv moale fibros`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q046",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Despre tesuturi putem afirma:

1. Epiteliul traheal poate fi unicelular ciliat si neciliat
2. Mucoasa tubului digestiv poate fi ciliata si neciliata
3. Glandele parotide cuprind tesut epitelial secretor endocrin in cordoane celulare
4. Ganglionii limfatici sunt alcatuiti din tesut conjunctiv moale reticulat`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q047",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Despre potentialul de membrana putem afirma:

1. Variaza de la -65 mV la +40 mV
2. Are o valoare medie de -65 mV pana la -85 mV
3. Este influentat de activitatea pompei Na/K
4. Atunci cand este modificat temporar se numeste potential de repaus`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-tcgt-t2-q048",
    subject: SUBJECTS.BIOLOGY,
    chapter: "topografie-celula-genetica-tesuturi",
    topic: "test-2",
    type: QUESTION_TYPES.SINGLE,
    text: `Proprietatea celulara speciala numita activitate secretorie se realizeaza intr-un tesut dispus in cordoane celulare daca:

1. Exista la nivelul glandelor parotide
2. Exista la nivelul neurohipofizei
3. Exista in pancreas
4. Exista la nivelul tiroidei`,
    options: {
      A: "Daca 1, 2 si 3 sunt corecte",
      B: "Daca 1 si 3 sunt corecte",
      C: "Daca 2 si 4 sunt corecte",
      D: "Daca 4 este corecta",
      E: "Daca toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
  createQuestion({
  id: "bio-tcgt-t2-q049",
  subject: SUBJECTS.BIOLOGY,
  chapter: "topografie-celula-genetica-tesuturi",
  topic: "test-2",
  type: QUESTION_TYPES.SINGLE,
  text: `Urmatoarele afirmatii sunt adevarate, CU EXCEPTIA:

1. Contractilitatea este o proprietate speciala a tuturor celulelor
2. Perioada refractara absoluta se datoreaza inactivarii canalelor pentru Na+
3. Tesutul conjunctiv moale lax este specific aponevrozelor
4. Substanta de ciment este substanta fundamentala`,
  options: {
    A: "Daca 1, 2 si 3 sunt corecte",
    B: "Daca 1 si 3 sunt corecte",
    C: "Daca 2 si 4 sunt corecte",
    D: "Daca 4 este corecta",
    E: "Daca toate sunt corecte sau toate sunt false"
  },
  correctAnswers: ["B"],
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  explanation: ""
}),

createQuestion({
  id: "bio-tcgt-t2-q050",
  subject: SUBJECTS.BIOLOGY,
  chapter: "topografie-celula-genetica-tesuturi",
  topic: "test-2",
  type: QUESTION_TYPES.SINGLE,
  text: `Urmatoarele afirmatii referitoare la nucleul celular sunt adevarate:

1. Dimensiunile sale sunt constante
2. Dimensiunile sale sunt in raport de 1/3 – 1/4 cu carioplasma
3. Contine unul sau mai multi centrioli
4. Membrana nucleara este legata de plasmalema prin reticul endoplasmatic neted`,
  options: {
    A: "Daca 1, 2 si 3 sunt corecte",
    B: "Daca 1 si 3 sunt corecte",
    C: "Daca 2 si 4 sunt corecte",
    D: "Daca 4 este corecta",
    E: "Daca toate sunt corecte sau toate sunt false"
  },
  correctAnswers: ["D"],
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  explanation: ""
}),

createQuestion({
  id: "bio-tcgt-t2-q051",
  subject: SUBJECTS.BIOLOGY,
  chapter: "topografie-celula-genetica-tesuturi",
  topic: "test-2",
  type: QUESTION_TYPES.SINGLE,
  text: `Referitor la celula urmatoarele afirmatii sunt adevarate, CU EXCEPTIA:

1. Eritrocitele sunt celule uninucleate
2. Prezinta la nivelul membranei celulare proteine cotransportoare care hidrolizeaza direct ATP
3. Prezinta mecanisme active guvernate de presiunea osmotica
4. Membrana celulara este sub forma de mozaic fluid`,
  options: {
    A: "Daca 1, 2 si 3 sunt corecte",
    B: "Daca 1 si 3 sunt corecte",
    C: "Daca 2 si 4 sunt corecte",
    D: "Daca 4 este corecta",
    E: "Daca toate sunt corecte sau toate sunt false"
  },
  correctAnswers: ["B"],
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  explanation: ""
}),

createQuestion({
  id: "bio-tcgt-t2-q052",
  subject: SUBJECTS.BIOLOGY,
  chapter: "topografie-celula-genetica-tesuturi",
  topic: "test-2",
  type: QUESTION_TYPES.SINGLE,
  text: `Unde este dispus spatiul perinuclear?

1. Langa centrosfera
2. In exteriorul nucleului neuronal
3. In carioplasma
4. Langa nucleul celular`,
  options: {
    A: "Daca 1, 2 si 3 sunt corecte",
    B: "Daca 1 si 3 sunt corecte",
    C: "Daca 2 si 4 sunt corecte",
    D: "Daca 4 este corecta",
    E: "Daca toate sunt corecte sau toate sunt false"
  },
  correctAnswers: ["E"],
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  explanation: ""
}),

createQuestion({
  id: "bio-tcgt-t2-q053",
  subject: SUBJECTS.BIOLOGY,
  chapter: "topografie-celula-genetica-tesuturi",
  topic: "test-2",
  type: QUESTION_TYPES.SINGLE,
  text: `Dictiozomii:

1. Prezinta ribonucleoproteine
2. Sunt situati in zona cea mai activa a citoplasmei
3. Sunt perpendiculari unul pe celalalt
4. Au rol in excretia unor substante celulare`,
  options: {
    A: "Daca 1, 2 si 3 sunt corecte",
    B: "Daca 1 si 3 sunt corecte",
    C: "Daca 2 si 4 sunt corecte",
    D: "Daca 4 este corecta",
    E: "Daca toate sunt corecte sau toate sunt false"
  },
  correctAnswers: ["C"],
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  explanation: ""
}),
createQuestion({
  id: "bio-tcgt-t2-q054",
  subject: SUBJECTS.BIOLOGY,
  chapter: "topografie-celula-genetica-tesuturi",
  topic: "test-2",
  type: QUESTION_TYPES.SINGLE,
  text: `Nevroglia este:

1. Un tesut conjunctiv lax
2. O celula anucleata
3. Un tesut epitelial senzorial
4. O celula nervoasa`,
  options: {
    A: "Daca 1, 2 si 3 sunt corecte",
    B: "Daca 1 si 3 sunt corecte",
    C: "Daca 2 si 4 sunt corecte",
    D: "Daca 4 este corecta",
    E: "Daca toate sunt corecte sau toate sunt false"
  },
  correctAnswers: ["E"],
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  explanation: ""
}),

createQuestion({
  id: "bio-tcgt-t2-q055",
  subject: SUBJECTS.BIOLOGY,
  chapter: "topografie-celula-genetica-tesuturi",
  topic: "test-2",
  type: QUESTION_TYPES.SINGLE,
  text: `Referitor la transportul transmembranar putem afirma urmatoarele:

1. Difuziunea facilitata necesita carausi
2. Osmoza presupune miscarea apei in solutia mai concentrata
3. Din punct de vedere al polarizarii O2 si CO2 sunt diferite
4. Atunci cand sunt folosite proteine transportoare mecanismul este saturabil`,
  options: {
    A: "Daca 1, 2 si 3 sunt corecte",
    B: "Daca 1 si 3 sunt corecte",
    C: "Daca 2 si 4 sunt corecte",
    D: "Daca 4 este corecta",
    E: "Daca toate sunt corecte sau toate sunt false"
  },
  correctAnswers: ["E"],
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  explanation: ""
}),

createQuestion({
  id: "bio-tcgt-t2-q056",
  subject: SUBJECTS.BIOLOGY,
  chapter: "topografie-celula-genetica-tesuturi",
  topic: "test-2",
  type: QUESTION_TYPES.SINGLE,
  text: `Rol in sinteza proteica au urmatoarele organite:

1. Corpii Nissl
2. Ergastoplasma
3. Corpii tigroizi
4. Corpusculii lui Palade`,
  options: {
    A: "Daca 1, 2 si 3 sunt corecte",
    B: "Daca 1 si 3 sunt corecte",
    C: "Daca 2 si 4 sunt corecte",
    D: "Daca 4 este corecta",
    E: "Daca toate sunt corecte sau toate sunt false"
  },
  correctAnswers: ["E"],
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  explanation: ""
}),

createQuestion({
  id: "bio-tcgt-t2-q057",
  subject: SUBJECTS.BIOLOGY,
  chapter: "topografie-celula-genetica-tesuturi",
  topic: "test-2",
  type: QUESTION_TYPES.SINGLE,
  text: `Ce puteti afirma referitor la pasajul ionic la nivelul membranei celulare?

1. Ionii pot traversa membrana neselectiv
2. Membrana permite pasajul ionic liber
3. Un canal ionic poate fi observat numai cu microscopul electronic
4. Osmoza se refera la miscarea ionilor si a apei`,
  options: {
    A: "Daca 1, 2 si 3 sunt corecte",
    B: "Daca 1 si 3 sunt corecte",
    C: "Daca 2 si 4 sunt corecte",
    D: "Daca 4 este corecta",
    E: "Daca toate sunt corecte sau toate sunt false"
  },
  correctAnswers: ["E"],
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  explanation: ""
}),

createQuestion({
  id: "bio-tcgt-t2-q058",
  subject: SUBJECTS.BIOLOGY,
  chapter: "topografie-celula-genetica-tesuturi",
  topic: "test-2",
  type: QUESTION_TYPES.SINGLE,
  text: `Cromatina este:

1. La nivel perinuclear
2. In carioplasma
3. In centrosfera
4. O structura granulara din care se formeaza cromozomii`,
  options: {
    A: "Daca 1, 2 si 3 sunt corecte",
    B: "Daca 1 si 3 sunt corecte",
    C: "Daca 2 si 4 sunt corecte",
    D: "Daca 4 este corecta",
    E: "Daca toate sunt corecte sau toate sunt false"
  },
  correctAnswers: ["C"],
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  explanation: ""
}),

createQuestion({
  id: "bio-tcgt-t2-q059",
  subject: SUBJECTS.BIOLOGY,
  chapter: "topografie-celula-genetica-tesuturi",
  topic: "test-2",
  type: QUESTION_TYPES.SINGLE,
  text: `Ce puteti afirma referitor la transportul transmembranar?

1. Difuziunea este o modalitate de transport ce tinde la eliminarea gradientului de concentratie
2. Prin difuziune facilitata pot traversa hormonii steroizi
3. Moleculele polarizate cu greutate moleculara mare pot intra in competitie la nivelul unei proteine transportoare
4. Transportul activ se face atat in directia gradientului de concentratie cat si impotriva acestuia`,
  options: {
    A: "Daca 1, 2 si 3 sunt corecte",
    B: "Daca 1 si 3 sunt corecte",
    C: "Daca 2 si 4 sunt corecte",
    D: "Daca 4 este corecta",
    E: "Daca toate sunt corecte sau toate sunt false"
  },
  correctAnswers: ["B"],
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  explanation: ""
}),

createQuestion({
  id: "bio-tcgt-t2-q060",
  subject: SUBJECTS.BIOLOGY,
  chapter: "topografie-celula-genetica-tesuturi",
  topic: "test-2",
  type: QUESTION_TYPES.SINGLE,
  text: `Urmatoarele afirmatii sunt false, CU EXCEPTIA:

1. La nivelul tunicii medii a venelor si arterelor se gaseste tesut epitelial unistratificat pavimentos
2. Tesut epitelial secretor pluristratificat poate fi intr-o glanda tubulo-acinoasa
3. Celulele neuronale alcatuiesc nevroglia
4. Celulele tesutului muscular multiunitar exista la nivelul irisului`,
  options: {
    A: "Daca 1, 2 si 3 sunt corecte",
    B: "Daca 1 si 3 sunt corecte",
    C: "Daca 2 si 4 sunt corecte",
    D: "Daca 4 este corecta",
    E: "Daca toate sunt corecte sau toate sunt false"
  },
  correctAnswers: ["C"],
  difficulty: DIFFICULTY_LEVELS.MEDIUM,
  explanation: ""
}),
];

export {
  TEST_2_QUESTIONS
};