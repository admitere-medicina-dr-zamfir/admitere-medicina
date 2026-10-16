import {
  createQuestion,
  QUESTION_TYPES,
  SUBJECTS,
  DIFFICULTY_LEVELS
} from "../question-schema.js";

// Transcris din Atlas_BioChem_Chimie_Test_1-40_VERIFICAT_FINAL(1).docx
// Complement simplu: 1–12; complement grupat: 13–40.
const CHEMISTRY_TEST_1_QUESTIONS = [

  createQuestion({
    id: "chem-introducere-test1-q001",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O substanță organică A conține numai C, H și O. Prin arderea completă a 2,10 g A se obțin 4,40 g CO₂ și 0,90 g H₂O. Dacă masa molară a lui A este 84 g/mol, formula moleculară a substanței este:",
    options: {
      A: "C₄H₄O₂",
      B: "C₄H₈O₂",
      C: "C₅H₈O",
      D: "C₃H₄O₃",
      E: "C₅H₈O₂"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q002",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Un compus organic conține 85,71% C și 14,29% H. Știind că masa sa molară este 56 g/mol, formula moleculară este:",
    options: {
      A: "CH₂",
      B: "C₂H₄",
      C: "C₃H₆",
      D: "C₄H₈",
      E: "C₄H₁₀"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q003",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O hidrocarbură aciclică saturată conține 9 atomi de carbon. În catenă există 5 atomi de carbon primari și un atom de carbon terțiar. Numărul atomilor de carbon secundari și cuaternari este, respectiv:",
    options: {
      A: "3 și 0",
      B: "2 și 1",
      C: "1 și 2",
      D: "4 și 0",
      E: "datele sunt incompatibile"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q004",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Într-o catenă aciclică saturată există 6 atomi de carbon primari, 1 atom secundar și 2 atomi terțiari. Numărul atomilor de carbon cuaternari este:",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3",
      E: "4"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q005",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O substanță organică formată numai din C, H și N are raportul masic C:H:N = 18:3:7 și masa molară 112 g/mol. Formula moleculară este:",
    options: {
      A: "C₃H₆N",
      B: "C₆H₁₂N₂",
      C: "C₆H₁₀N₂",
      D: "C₉H₁₈N₃",
      E: "C₄H₈N₂"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q006",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "La arderea completă a 0,58 g dintr-o hidrocarbură se obțin 1,76 g CO₂ și 0,90 g H₂O. Formula brută (empirică) este:",
    options: {
      A: "CH",
      B: "CH₂",
      C: "C₂H₅",
      D: "C₄H₁₀",
      E: "C₃H₈"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q007",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O catenă aciclică saturată conține 10 atomi de carbon, dintre care 6 sunt primari și 2 sunt terțiari. Câți atomi de carbon cuaternari conține?",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3",
      E: "nu poate exista o asemenea catenă"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q008",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Pentru un compus cu formula moleculară C₄H₈O₂, care dintre următoarele informații NU poate fi stabilită numai din formula moleculară?",
    options: {
      A: "numărul atomilor de carbon",
      B: "numărul atomilor de oxigen",
      C: "raportul atomic C:H",
      D: "modul de legare a atomilor în moleculă",
      E: "masa molară"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q009",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O hidrocarbură are raportul masic C:H = 6:1 și masa molară 70 g/mol. Formula moleculară este:",
    options: {
      A: "C₄H₈",
      B: "C₅H₁₀",
      C: "C₅H₁₂",
      D: "C₆H₁₀",
      E: "C₆H₁₂"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q010",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O catenă aciclică saturată conține 12 atomi de carbon. Suma numerelor de vecini carbonici ai tuturor atomilor de carbon din catenă este:",
    options: {
      A: "11",
      B: "12",
      C: "20",
      D: "22",
      E: "24"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q011",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O substanță organică A conține 40,00% C, 6,67% H și 53,33% O. Dacă masa molară este 60 g/mol, formula moleculară este:",
    options: {
      A: "CH₂O",
      B: "C₂H₄O₂",
      C: "C₂H₄O",
      D: "C₃H₈O",
      E: "CH₄O₂"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q012",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Într-o catenă aciclică saturată există 3 atomi de carbon primari, 4 secundari și 1 terțiar. Numărul total al atomilor de carbon este 8. Care afirmație este corectă?",
    options: {
      A: "Catena este imposibilă.",
      B: "Catena trebuie să conțină un carbon cuaternar.",
      C: "Datele satisfac relația structurală a unei catene aciclice.",
      D: "Catena trebuie să fie ciclică.",
      E: "Catena conține 8 legături C–C."
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q013",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la legăturile chimice și catenele de carbon:\n1. Atomul de carbon este tetravalent în compușii organici prezentați în capitol.\n2. O legătură dublă între doi atomi de carbon conține o legătură σ și o legătură π.\n3. O legătură triplă între doi atomi de carbon conține o legătură σ și două legături π.\n4. Într-o catenă saturată există cel puțin o legătură π între atomii de carbon.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q014",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre formulele utilizate pentru reprezentarea compușilor organici:\n1. Formula moleculară precizează întotdeauna ordinea în care sunt legați atomii.\n2. Formula Lewis evidențiază electronii de valență participanți sau neparticipanți.\n3. Din formula moleculară se poate stabili întotdeauna unică formula structurală.\n4. Formula de proiecție restrânsă poate reda succesiunea grupelor de atomi din moleculă.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q015",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "În legătură cu tipurile de catene:\n1. O catenă aciclică poate fi liniară sau ramificată.\n2. O catenă nesaturată conține cel puțin o legătură multiplă între atomi de carbon.\n3. O catenă ciclică poate fi saturată sau nesaturată.\n4. O catenă aromatică este inclusă între tipurile de catene prezentate în clasificarea manualului.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q016",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la atomii de carbon dintr-o catenă:\n1. Un carbon primar este legat direct de doi atomi de carbon.\n2. Un carbon secundar este legat direct de doi atomi de carbon.\n3. Un carbon terțiar este legat direct de patru atomi de carbon.\n4. Un carbon cuaternar este legat direct de patru atomi de carbon.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q017",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O catenă aciclică saturată are 9 atomi de carbon, dintre care 4 primari, 3 secundari și 2 terțiari. Rezultă că:\n1. numărul total de atomi de carbon este 9.\n2. catena are 8 legături C–C.\n3. suma numerelor de vecini carbonici este 16.\n4. datele sunt incompatibile cu o catenă aciclică saturată.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q018",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre analiza elementală cantitativă prin ardere:\n1. Carbonul din substanță poate fi transformat în CO₂.\n2. Hidrogenul din substanță poate fi transformat în H₂O.\n3. Din masele produșilor se pot calcula masele elementelor corespunzătoare din probă.\n4. Oxigenul dintr-un compus C,H,O trebuie determinat obligatoriu direct, neputând fi calculat prin diferență.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q019",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O substanță conține 80% C și 20% H:\n1. formula brută este CH₃.\n2. raportul molar C:H este 1:3.\n3. masa formulei brute este 15.\n4. formula moleculară este obligatoriu C₂H₆.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q020",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Pentru un compus cu formula moleculară C₃H₆O:\n1. formula brută este CH₂O.\n2. raportul atomic C:H:O este 3:6:1.\n3. formula moleculară este un multiplu întreg al formulei brute CH₂O.\n4. formula moleculară, singură, nu stabilește obligatoriu conectivitatea atomilor.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q021",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la izomeri:\n1. Izomerii au aceeași formulă moleculară.\n2. Izomerii au întotdeauna aceeași formulă structurală.\n3. Izomerii pot avea proprietăți diferite.\n4. Două formule structurale diferite reprezintă întotdeauna izomeri, chiar dacă formulele moleculare diferă.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q022",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O catenă aciclică saturată conține 7 atomi de carbon:\n1. conține 7 legături C–C.\n2. conține 6 legături C–C.\n3. suma gradelor carbonilor este 14.\n4. suma numerelor de vecini carbonici este 12.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q023",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre legăturile multiple C–C:\n1. legătura dublă conține două legături σ.\n2. legătura triplă conține două legături π.\n3. legătura dublă conține două legături π.\n4. legătura triplă conține o legătură σ și două legături π.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q024",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Într-o catenă aciclică saturată sunt 5 atomi primari, 2 secundari, 1 terțiar și 1 cuaternar:\n1. catena conține 9 atomi de carbon.\n2. suma gradelor atomilor de carbon este 16.\n3. catena conține 8 legături C–C.\n4. datele sunt compatibile cu o asemenea catenă.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q025",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Pentru formula brută și formula moleculară:\n1. formula brută indică raportul întreg cel mai simplu dintre numerele atomilor elementelor.\n2. formula moleculară indică numărul real al atomilor fiecărui element din moleculă.\n3. formula moleculară este un multiplu întreg al formulei brute.\n4. formula brută precizează obligatoriu modul de legare a atomilor.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q026",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "La arderea completă a unui compus format numai din C și H se obțin 0,20 mol CO₂ și 0,20 mol H₂O:\n1. proba conține 0,20 mol atomi de C.\n2. proba conține 0,40 mol atomi de H.\n3. raportul atomic C:H este 1:2.\n4. formula moleculară este obligatoriu C₂H₄.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q027",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O substanță are formula brută CH₂ și masa molară 84 g/mol:\n1. masa formulei brute este 14 g/mol.\n2. factorul de multiplicare este 6.\n3. formula moleculară este C₆H₁₂.\n4. formula moleculară este C₃H₆.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q028",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la clasificarea compușilor organici prezentată în capitol:\n1. Hidrocarburile conțin numai carbon și hidrogen.\n2. Compușii halogenați sunt derivați ai hidrocarburilor.\n3. Grupele funcționale determină clasificarea derivaților funcționali.\n4. Orice compus organic conține obligatoriu oxigen.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q029",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Pentru o catenă aciclică saturată cu n atomi de carbon:\n1. are n legături C–C.\n2. suma numerelor de vecini carbonici este 2(n−1).\n3. fiecare carbon are exact doi vecini carbonici.\n4. are n−1 legături C–C.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q030",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O substanță organică de 3,00 g conține 1,20 g C, 0,20 g H, restul fiind O:\n1. masa oxigenului este 1,60 g.\n2. cantitățile de atomi C:H:O sunt în raport 1:2:1.\n3. formula brută este CH₂O.\n4. masa molară este obligatoriu 30 g/mol.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q031",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Într-o catenă aciclică saturată cu 10 atomi de carbon sunt 6 atomi primari, 1 secundar și 2 terțiari:\n1. există un atom cuaternar.\n2. suma gradelor carbonilor este 18.\n3. există 9 legături C–C.\n4. numărul atomilor cuaternari este zero.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q032",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre legătura covalentă:\n1. se realizează prin punerea în comun a electronilor.\n2. o pereche de electroni pusă în comun corespunde unei legături covalente simple.\n3. între doi atomi de carbon pot exista legături simple, duble sau triple.\n4. legătura covalentă este incompatibilă cu atomul de carbon.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q033",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Un compus are 40% C, 6,67% H și 53,33% O:\n1. în 100 g compus sunt 40 g C.\n2. raportul molar C:H:O este 1:2:1.\n3. formula brută este CH₂O.\n4. masa molară este obligatoriu 30 g/mol.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q034",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "În legătură cu o catenă aciclică saturată ce conține numai atomi de carbon primari și secundari:\n1. poate fi ramificată.\n2. dacă are cel puțin doi atomi de carbon, are exact doi atomi primari.\n3. poate conține un carbon cuaternar.\n4. restul atomilor de carbon, dacă există, sunt secundari.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q035",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Pentru o substanță cu formula moleculară C₂H₄O₂:\n1. raportul atomic C:H:O este 1:2:1.\n2. formula brută este CH₂O.\n3. masa molară, folosind C=12, H=1, O=16, este 60 g/mol.\n4. formula structurală este unică.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q036",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O catenă aciclică saturată are 11 atomi de carbon, dintre care 5 sunt primari, 4 secundari și 1 terțiar:\n1. numărul carbonilor cuaternari este 1.\n2. catena are 10 legături C–C.\n3. suma gradelor carbonilor este 20.\n4. relația dintre numerele carbonilor primari, terțiari și cuaternari este satisfăcută.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q037",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la stabilirea structurii unui compus organic:\n1. analiza elementală cantitativă poate furniza compoziția procentuală.\n2. din compoziția procentuală se poate deduce formula brută.\n3. masa molară permite trecerea de la formula brută la formula moleculară.\n4. formula moleculară este suficientă în orice caz pentru stabilirea unică a formulei structurale.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q038",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Pentru o hidrocarbură cu raportul masic C:H = 12:1:\n1. raportul atomic C:H este 1:1.\n2. formula brută este CH.\n3. dacă M = 78 g/mol, formula moleculară este C₆H₆.\n4. dacă M = 26 g/mol, formula moleculară este C₂H₂.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q039",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "O probă de 1,50 g a unui compus C,H,O conține 0,60 g C și 0,10 g H:\n1. masa oxigenului este 0,80 g.\n2. raportul molar C:H:O este 1:2:1.\n3. formula brută este CH₂O.\n4. dacă M = 60 g/mol, formula moleculară este CH₂O.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "chem-introducere-test1-q040",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "introducere-structura",
    topic: "test-1",
    type: QUESTION_TYPES.SINGLE,
    text: "Într-o catenă aciclică saturată cu 12 atomi de carbon există 4 atomi primari, 6 secundari și 2 terțiari:\n1. catena conține 11 legături C–C.\n2. suma gradelor atomilor de carbon este 22.\n3. numărul atomilor cuaternari este zero.\n4. numărul atomilor cuaternari este 2.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  })

];

export { CHEMISTRY_TEST_1_QUESTIONS };
