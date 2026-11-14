import { createQuestion, QUESTION_TYPES, SUBJECTS, DIFFICULTY_LEVELS } from "../question-schema.js";

// Test 3 – Alchene
// 40 de întrebări: 20 complement simplu + 20 complement grupat

export const CHEMISTRY_TEST_3_QUESTIONS = [

  createQuestion({
    id: "chem-alchene-test3-q001",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "O alchenă aciclică are 85,714% C (procente masice). Care afirmație este corectă?",
    options: {
      A: "Formula generală este CₙH₂ₙ₊₂",
      B: "Raportul atomic C:H este 1:1",
      C: "Raportul masic C:H este 6:1",
      D: "Indicele de nesaturare este 2",
      E: "Masa molară este obligatoriu 42 g/mol"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Pentru CₙH₂ₙ, raportul masic C:H este 12n:2n = 6:1."
  }),

  createQuestion({
    id: "chem-alchene-test3-q002",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Câte alchene aciclice distincte cu formula C₅H₁₀ există, dacă se numără separat izomerii geometrici?",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
      E: "8"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Există 6 izomeri, incluzând separat cis- și trans-pent-2-enă."
  }),

  createQuestion({
    id: "chem-alchene-test3-q003",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Care este numărul maxim al atomilor care nu sunt coplanari cu atomii hibridizați sp² din molecula propenei?",
    options: {
      A: "nici unul",
      B: "1",
      C: "2",
      D: "3",
      E: "4"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: ""
  }),

  createQuestion({
    id: "chem-alchene-test3-q004",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "O probă de 11,2 L (c.n.) de etenă este hidrogenată complet. Ce masă de H₂ se consumă?",
    options: {
      A: "0,5 g",
      B: "1 g",
      C: "2 g",
      D: "4 g",
      E: "8 g"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "11,2 L etenă reprezintă 0,5 mol, care consumă 0,5 mol H₂ = 1 g."
  }),

  createQuestion({
    id: "chem-alchene-test3-q005",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Prin adiția completă a bromului la 14 g de etenă se consumă o masă de Br₂ egală cu:",
    options: {
      A: "40 g",
      B: "56 g",
      C: "80 g",
      D: "112 g",
      E: "160 g"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "14/28 = 0,5 mol etenă; se consumă 0,5 mol Br₂, adică 80 g."
  }),

  createQuestion({
    id: "chem-alchene-test3-q006",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Prin hidratarea acid-catalizată a 2-metilpropenei se obține preponderent:",
    options: {
      A: "2-metilpropan-1-ol",
      B: "2-metilpropan-2-ol",
      C: "butan-1-ol",
      D: "butan-2-ol",
      E: "2-metilpropanal"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Conform regulii Markovnikov se formează 2-metilpropan-2-ol."
  }),

  createQuestion({
    id: "chem-alchene-test3-q007",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "La oxidarea blândă a propenei cu KMnO₄ apos, diluat, rece, produsul organic principal este:",
    options: {
      A: "propan-1-ol",
      B: "propan-2-ol",
      C: "propan-1,2-diol",
      D: "acid propanoic",
      E: "propanonă"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Oxidarea blândă produce un diol vicinal."
  }),

  createQuestion({
    id: "chem-alchene-test3-q008",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "La oxidarea energică, cu ruperea dublei legături, a 2-metil-2-butenei se obțin, ca produși organici:",
    options: {
      A: "acid acetic și acid propanoic",
      B: "propanonă și acid acetic",
      C: "propanal și metanal",
      D: "propanonă și metanal",
      E: "acid 2-metilpropanoic și CO₂"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Ruperea oxidativă formează propanonă și acid acetic."
  }),

  createQuestion({
    id: "chem-alchene-test3-q009",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Ce volum de O₂ (c.n.) este necesar arderii complete a 5,6 L etenă (c.n.)?",
    options: {
      A: "11,2 L",
      B: "16,8 L",
      C: "22,4 L",
      D: "28 L",
      E: "33,6 L"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "C₂H₄ + 3O₂ → 2CO₂ + 2H₂O. Volumul necesar este 5,6 × 3 = 16,8 L."
  }),

  createQuestion({
    id: "chem-alchene-test3-q010",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "La polimerizarea completă a 280 g etenă, masa teoretică a polietilenei obținute este:",
    options: {
      A: "140 g",
      B: "252 g",
      C: "280 g",
      D: "308 g",
      E: "560 g"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Polimerizarea prin adiție conservă masa monomerului."
  }),

createQuestion({
    id: "chem-alchene-test3-q011",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Un amestec echimolar de etenă și propenă are masa 35 g. Volumul total al amestecului la c.n. este:",
    options: {
      A: "11,2 L",
      B: "16,8 L",
      C: "22,4 L",
      D: "33,6 L",
      E: "44,8 L"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "x(28 + 42) = 35, deci x = 0,5 mol din fiecare gaz. Volumul total este 22,4 L."
  }),

  createQuestion({
    id: "chem-alchene-test3-q012",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Ce masă de soluție de brom 20% (m/m) poate fi decolorată de 5,6 g etenă pură?",
    options: {
      A: "80 g",
      B: "120 g",
      C: "160 g",
      D: "200 g",
      E: "240 g"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "0,2 mol etenă consumă 32 g Br₂. Masa soluției este 32/0,20 = 160 g."
  }),

  createQuestion({
    id: "chem-alchene-test3-q013",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "La oxidarea energică a 1-butenei, cu transformarea completă a carbonului terminal =CH₂ în CO₂, produsul organic este:",
    options: {
      A: "acid etanoic",
      B: "acid propanoic",
      C: "propanonă",
      D: "butan-1-ol",
      E: "acid butanoic"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Ruperea oxidativă a 1-butenei formează acid propanoic și CO₂."
  }),

  createQuestion({
    id: "chem-alchene-test3-q014",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "O alchenă aciclică are masa molară 70 g/mol. Numărul de atomi de carbon din moleculă este:",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
      E: "8"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "M(CₙH₂ₙ) = 14n. Prin urmare, n = 70/14 = 5."
  }),

  createQuestion({
    id: "chem-alchene-test3-q015",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "La adiția unui mol de HCl la 2-metil-2-butenă, produsul principal conform regulii lui Markovnikov este:",
    options: {
      A: "2-cloro-2-metilbutan",
      B: "3-cloro-2-metilbutan",
      C: "1-cloro-2-metilbutan",
      D: "2-cloro-3-metilbutan",
      E: "1-cloro-3-metilbutan"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Cl se fixează la carbonul mai substituit al dublei legături."
  }),

  createQuestion({
    id: "chem-alchene-test3-q016",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Care alchenă dă, prin oxidare energică, exclusiv propanonă ca produs organic?",
    options: {
      A: "2-metil-2-butenă",
      B: "2,3-dimetil-2-butenă",
      C: "3-metil-2-pentenă",
      D: "2-metil-1-propenă",
      E: "but-2-enă"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "2,3-dimetil-2-butena produce două molecule de propanonă."
  }),

  createQuestion({
    id: "chem-alchene-test3-q017",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Se hidrogenează 8,4 g dintr-o alchenă aciclică pură cu 0,3 g H₂, consumat integral. Formula alchenei este:",
    options: {
      A: "C₂H₄",
      B: "C₃H₆",
      C: "C₄H₈",
      D: "C₅H₁₀",
      E: "C₆H₁₂"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "0,3 g H₂ reprezintă 0,15 mol. Masa molară a alchenei este 8,4/0,15 = 56 g/mol."
  }),

  createQuestion({
    id: "chem-alchene-test3-q018",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Din 11,2 L propenă (c.n.), prin hidratare cu randament 80%, se obține o masă de propan-2-ol de:",
    options: {
      A: "12 g",
      B: "18 g",
      C: "24 g",
      D: "30 g",
      E: "36 g"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "0,5 mol × 60 g/mol × 0,80 = 24 g."
  }),

  createQuestion({
    id: "chem-alchene-test3-q019",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "O alchenă aciclică pură consumă 16 g Br₂ la adiție. Masa alchenei este 5,6 g. Formula moleculară este:",
    options: {
      A: "C₂H₄",
      B: "C₃H₆",
      C: "C₄H₈",
      D: "C₅H₁₀",
      E: "C₆H₁₂"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "16 g Br₂ reprezintă 0,1 mol. Masa molară a alchenei este 5,6/0,1 = 56 g/mol."
  }),

  createQuestion({
    id: "chem-alchene-test3-q020",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "O alchenă aciclică, la arderea completă a 0,2 mol, produce 0,8 mol CO₂. Formula sa este:",
    options: {
      A: "C₂H₄",
      B: "C₃H₆",
      C: "C₄H₈",
      D: "C₅H₁₀",
      E: "C₆H₁₂"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "0,8/0,2 = 4 atomi de carbon, deci formula este C₄H₈."
  }),

// II. Complement grupat – întrebările 21–30
  // A = 1,2,3; B = 1,3; C = 2,4;
  // D = numai 4; E = toate adevărate sau toate false.

  createQuestion({
    id: "chem-alchene-test3-q021",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la dubla legătură din alchene:\n1. Conține o legătură σ și una π.\n2. Atomii de carbon ai dublei legături au hibridizare sp².\n3. Rotația liberă în jurul dublei legături este împiedicată.\n4. Legătura π este mai slabă decât legătura σ.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Toate cele patru afirmații sunt adevărate."
  }),

  createQuestion({
    id: "chem-alchene-test3-q022",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la izomeria alchenelor aciclice:\n1. But-1-ena și but-2-ena sunt izomeri de poziție.\n2. 2-metilpropena este izomer de catenă cu but-1-ena.\n3. But-2-ena prezintă izomerie geometrică.\n4. 2-metilpropena prezintă izomerie geometrică.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 1, 2 și 3 sunt adevărate. 2-metilpropena nu prezintă izomerie geometrică."
  }),

  createQuestion({
    id: "chem-alchene-test3-q023",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre adiția hidrogenului la alchene:\n1. Consumă un mol de H₂ pentru fiecare mol de alchenă mono-nesaturată.\n2. Transformă atomii de carbon sp² ai dublei legături în atomi sp³.\n3. Produce un alcan cu același număr de atomi de carbon.\n4. Determină scindarea scheletului carbonic în mod obișnuit.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Hidrogenarea saturează legătura dublă fără ruperea obișnuită a scheletului carbonic."
  }),

  createQuestion({
    id: "chem-alchene-test3-q024",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Pentru adiția HBr la propenă, în condițiile regulii Markovnikov:\n1. Produsul major este 2-bromopropanul.\n2. Atomul de brom se fixează preferențial la carbonul terminal.\n3. Se consumă un mol HBr la un mol propenă.\n4. Produsul major este 1-bromopropanul.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Sunt adevărate afirmațiile 1 și 3."
  }),

  createQuestion({
    id: "chem-alchene-test3-q025",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la hidratarea alchenelor:\n1. Etena poate forma etanol.\n2. Propena formează preponderent propan-2-ol.\n3. 2-metilpropena formează preponderent 2-metilpropan-2-ol.\n4. Hidratarea este o reacție de substituție.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Hidratarea este o reacție de adiție. Afirmațiile 1, 2 și 3 sunt corecte."
  }),

  createQuestion({
    id: "chem-alchene-test3-q026",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "La oxidarea blândă a alchenelor cu KMnO₄ apos, diluat, rece:\n1. Se formează dioli vicinali.\n2. Se rupe obligatoriu legătura σ dintre atomii dublei legături.\n3. Soluția violetă de permanganat se decolorează.\n4. Etena formează acid oxalic ca produs principal.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 1 și 3 sunt adevărate."
  }),

  createQuestion({
    id: "chem-alchene-test3-q027",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "La oxidarea energică a alchenelor aciclice:\n1. Un carbon terminal =CH₂ poate produce CO₂.\n2. Un carbon =CH– poate genera acid carboxilic.\n3. Un carbon =C< fără hidrogen poate genera cetonă.\n4. Ruperea legăturii C=C este posibilă.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Toate cele patru afirmații sunt adevărate."
  }),

  createQuestion({
    id: "chem-alchene-test3-q028",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Pentru but-2-enă și oxidarea sa energică:\n1. Izomerii cis și trans au aceeași formulă moleculară.\n2. Ambele forme pot conduce la acid acetic.\n3. Fiecare moleculă are doi atomi de carbon sp².\n4. Fiecare moleculă conține o singură legătură π.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Toate cele patru afirmații sunt adevărate."
  }),

  createQuestion({
    id: "chem-alchene-test3-q029",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre polimerizarea etenei:\n1. Este o reacție de adiție repetată.\n2. Unitatea de repetare este –CH₂–CH₂–.\n3. Masa polimerului teoretic este egală cu masa monomerului consumat.\n4. Se degajă obligatoriu apă la formarea polietilenei.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Polimerizarea etenei este o poliadiție, fără eliminarea apei."
  }),

  createQuestion({
    id: "chem-alchene-test3-q030",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Pentru un mol de 2-metilpropenă:\n1. Se consumă un mol de Br₂ la adiție completă.\n2. Se consumă doi moli de H₂ la hidrogenare completă.\n3. Prin hidratare se poate obține tert-butanol.\n4. La ardere se formează 3 moli de CO₂.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Sunt adevărate afirmațiile 1 și 3. La ardere se formează 4 moli de CO₂."
  }),

 // Complement grupat – întrebările 31–40

  createQuestion({
    id: "chem-alchene-test3-q031",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "La arderea completă a unei alchene aciclice CₙH₂ₙ:\n1. Se formează n moli CO₂ per mol alchenă.\n2. Se formează n moli H₂O per mol alchenă.\n3. Se consumă 3n/2 moli O₂ per mol alchenă.\n4. Raportul molar CO₂:H₂O este 1:1.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Toate afirmațiile sunt adevărate. CₙH₂ₙ + (3n/2)O₂ → nCO₂ + nH₂O."
  }),

  createQuestion({
    id: "chem-alchene-test3-q032",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Pentru 5,6 L etenă la c.n.:\n1. Cantitatea de etenă este 0,25 mol.\n2. La adiția bromului se consumă 40 g Br₂.\n3. La ardere se obțin 11,2 L CO₂ la c.n.\n4. La hidrogenare se consumă 1 mol H₂.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "5,6 L etenă reprezintă 0,25 mol. Se consumă 40 g Br₂ și se formează 0,5 mol CO₂."
  }),

  createQuestion({
    id: "chem-alchene-test3-q033",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "În cazul alchenelor C₅H₁₀ aciclice:\n1. Există izomeri de catenă.\n2. Toate prezintă izomerie geometrică.\n3. Există izomeri de poziție ai dublei legături.\n4. Toate au exact doi atomi de carbon primari.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Există izomeri de catenă și de poziție. Nu toate alchenele C₅H₁₀ prezintă izomerie geometrică."
  }),

  createQuestion({
    id: "chem-alchene-test3-q034",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre clorurarea prin adiție a etenei:\n1. Produsul este 1,2-dicloroetan.\n2. Produsul este 1,1-dicloroetan.\n3. Raportul molar etenă:Cl₂ este 1:1.\n4. Este necesară ruperea legăturii C–C σ.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Sunt adevărate afirmațiile 1 și 3. Se obține 1,2-dicloroetan."
  }),

  createQuestion({
    id: "chem-alchene-test3-q035",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre proprietățile fizice ale alchenelor:\n1. Sunt în general puțin solubile în apă.\n2. Au caracter predominant nepolar.\n3. Termenii inferiori sunt gaze la temperatura obișnuită.\n4. Au densități mai mari decât apa în mod obișnuit.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Alchenele sunt în general nepolare, slab solubile în apă și mai puțin dense decât aceasta."
  }),

  createQuestion({
    id: "chem-alchene-test3-q036",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Pentru reacția de polimerizare a propenei:\n1. Monomerul este CH₂=CH–CH₃.\n2. Unitatea de repetare este –CH₂–CH(CH₃)–.\n3. Se obține polipropilenă.\n4. Polimerul are unități de repetare cu câte 4 atomi de carbon.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Polipropilena are unitatea de repetare cu trei atomi de carbon."
  }),

  createQuestion({
    id: "chem-alchene-test3-q037",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Pentru propenă, CH₂=CH–CH₃:\n1. Are un atom de carbon primar la gruparea CH₃.\n2. Are doi atomi de carbon cu hibridizare sp².\n3. Are un atom de carbon cu hibridizare sp³.\n4. Are un singur atom de carbon cu hibridizare sp.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Propena conține doi atomi de carbon sp² și un atom de carbon sp³."
  }),

  createQuestion({
    id: "chem-alchene-test3-q038",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Referitor la produșii oxidării energice:\n1. Etena poate conduce la CO₂ și H₂O.\n2. Propena poate conduce la acid acetic și CO₂.\n3. 2-metilpropena poate conduce la propanonă și CO₂.\n4. But-2-ena poate conduce la acid propanoic exclusiv.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 1, 2 și 3 sunt corecte. But-2-ena produce acid acetic."
  }),

  createQuestion({
    id: "chem-alchene-test3-q039",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Un amestec conține 0,2 mol etenă și 0,3 mol propenă:\n1. Consumă 0,5 mol Br₂ la adiție completă.\n2. Consumă 0,5 mol H₂ la hidrogenare completă.\n3. La ardere formează 1,3 mol CO₂.\n4. La ardere formează 1,3 mol H₂O.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Toate afirmațiile sunt adevărate. La ardere se obțin 1,3 mol CO₂ și 1,3 mol H₂O."
  }),

  createQuestion({
    id: "chem-alchene-test3-q040",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchene",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre reacțiile etenei:\n1. Prin adiție de apă se obține etanol.\n2. Prin adiție de HCl se obține cloroetan.\n3. Prin adiție de Br₂ se obține 1,2-dibromoetan.\n4. Prin adiție de H₂ se obține etan.",
    options: {
      A: "Dacă 1, 2 și 3 sunt corecte",
      B: "Dacă 1 și 3 sunt corecte",
      C: "Dacă 2 și 4 sunt corecte",
      D: "Dacă numai 4 este corectă",
      E: "Dacă toate sunt corecte sau toate sunt false"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Toate cele patru afirmații sunt adevărate."
  }),

];