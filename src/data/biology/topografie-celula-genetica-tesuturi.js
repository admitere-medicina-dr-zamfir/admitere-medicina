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
    text: "Urmatoarele afirmatii sunt adevarate, CU EXCEPTIA:",
    options: {
      A: "Tesut cartilaginos semidur elastic intalnim in pavilionul urechii",
      B: "Tesut conjunctiv semidur fibros intalnim in ligamente si aponevroze",
      C: "Epiteliul traheal este cilindric ciliat si neciliat, pseudostratificat",
      D: "Mucoasa tubului digestiv este un epiteliu simplu cilindric ciliat si neciliat, unistratificat",
      E: "Uroteliul este un epiteliu de tranzitie, de acoperire, pluristratificat"
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
    text: "Urmatoarele afirmatii sunt adevarate, CU EXCEPTIA:",
    options: {
      A: "Contractilitatea reprezinta proprietatea celulelor musculare de a transforma energia chimica in energie mecanica",
      B: "Presiunea osmotica este proportionala cu numarul de particule dizolvate in solutie",
      C: "Membrana semipermeabila presupune ca aceasta sa permita mai mult transferul moleculelor de solvit decat cele de solvent",
      D: "Canalele ionice nu pot fi vizualizate cu microscopul electronic",
      E: "O forma particulara de exocitoza o intalnim la nivelul butonilor terminali axonali"
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
    text: "O celula are valoarea potentialului prag de -30 mV; daca asupra acesteia se aplica intr-un anumit punct al membranei celulare un stimul chimic care va provoca o depolarizare locala de -20 mV, se produc urmatoarele fenomene, CU EXCEPTIA:",
    options: {
      A: "Va rezulta un potential de actiune",
      B: "Stimulul aplicat este subliminar",
      C: "Potentialul rezultat se va propaga in ambele sensuri",
      D: "Canalele voltaj dependente pentru Na+ se vor deschide cand potentialul de membrana atinge valoarea de -30 mV",
      E: "Potentialul rezultat va depolariza toata membrana celulara"
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
      E: "Sunt formate din celule sub forma de foliculi"
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
      E: "Cilindric stratificat"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  })

];

export {
  TEST_1_QUESTIONS
};