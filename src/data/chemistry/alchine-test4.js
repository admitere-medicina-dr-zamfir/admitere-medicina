import {
  createQuestion,
  QUESTION_TYPES,
  SUBJECTS,
  DIFFICULTY_LEVELS
} from "../question-schema.js";

// Test 4 – Alchine
// 40 de întrebări: 12 complement simplu + 28 complement grupat

export const CHEMISTRY_TEST_4_QUESTIONS = [

  createQuestion({
    id: "chem-alchine-test4-q001",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Câte alchine izomere de constituție (aciclice) are formula moleculară C₇H₁₂?",
    options: {
      A: "9",
      B: "11",
      C: "12",
      D: "14",
      E: "15"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Conform baremului: există 14 alchine izomere de constituție."
  }),

  createQuestion({
    id: "chem-alchine-test4-q002",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "O alchină A are raportul masic C : H = 8 : 1. Câți dintre izomerii aciclici ai lui A (alchine și alcadiene) formează precipitat cu reactivul Tollens?",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3",
      E: "4"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Formula este C₄H₆. Doar 1-butina formează precipitat cu reactivul Tollens."
  }),

  createQuestion({
    id: "chem-alchine-test4-q003",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Se supun pirolizei 2240 m³ (c.n.) de CH₄ cu puritatea de 90%, la 1500 °C, cu randament de 40% (2CH₄ → C₂H₂ + 3H₂). Acetilena obținută este barbotată integral într-un exces de reactiv Tollens. Masa de acetilură de diargint formată este:",
    options: {
      A: "1080 kg",
      B: "2160 kg",
      C: "4320 kg",
      D: "8640 kg",
      E: "5760 kg"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Se obțin 18 kmol de C₂H₂, care formează 18 kmol de Ag₂C₂, adică 4320 kg."
  }),

  createQuestion({
    id: "chem-alchine-test4-q004",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Se hidratează (HgSO₄/H₂SO₄) 11,2 m³ (c.n.) de acetilenă cu puritatea de 80%, cu randament de 75%. Etanalul rezultat se dizolvă în apă până la o soluție de concentrație 20%. Masa soluției este:",
    options: {
      A: "13,2 kg",
      B: "33 kg",
      C: "44 kg",
      D: "52,8 kg",
      E: "66 kg"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Se obțin 0,3 kmol etanal, adică 13,2 kg. Masa soluției 20% este 66 kg."
  }),

  createQuestion({
    id: "chem-alchine-test4-q005",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Acetilena obținută din 80 g de carbid tehnic decolorează total 8 kg de soluție de brom în CCl₄ de concentrație 2%, în absența luminii. Puritatea carbidului (considerat cu impurități inerte) este:",
    options: {
      A: "40%",
      B: "20%",
      C: "60%",
      D: "80%",
      E: "50%"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "160 g Br₂ reprezintă 1 mol. Sunt necesari 0,5 mol CaC₂, adică 32 g; puritatea este 40%."
  }),

  createQuestion({
    id: "chem-alchine-test4-q006",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "O alchenă A și o alchină B au același număr de atomi de carbon și raportul maselor molare M(A) : M(B) = 14 : 13. Un amestec echimolar al celor două hidrocarburi, cu volumul de 4 L, este ars în aer. Volumul de aer necesar este:",
    options: {
      A: "22 L",
      B: "27,5 L",
      C: "44 L",
      D: "55 L",
      E: "110 L"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Alchena este C₂H₄, iar alchina C₂H₂. Se consumă 11 L O₂, corespunzător la 55 L aer."
  }),

  createQuestion({
    id: "chem-alchine-test4-q007",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Prin adiția unui mol de HCl la o alchină A masa acesteia crește cu 53,67%. Câte dintre alchinele izomere cu A formează acetiluri monosodice la încălzire cu sodiu metalic (150 °C)?",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3",
      E: "4"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Alchina are formula C₅H₈. Două alchine marginale formează acetiluri monosodice."
  }),

  createQuestion({
    id: "chem-alchine-test4-q008",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "21,6 g de amestec echimasic de 1-butină și 2-butină reacționează cantitativ cu 26,7 g de clorură de diaminocupru (I), [Cu(NH₃)₂]Cl. Masa de precipitat roșu-brun format este:",
    options: {
      A: "10,8 g",
      B: "23,4 g",
      C: "26,7 g",
      D: "46,8 g",
      E: "48 g"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "0,2 mol de 1-butină formează 0,2 mol de acetilură de cupru, cu masa de 23,4 g."
  }),

  createQuestion({
    id: "chem-alchine-test4-q009",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Acetilena se transportă în tuburi de oțel umplute cu masă poroasă îmbibată cu acetonă, în care 1 volum de acetonă dizolvă 300 volume de acetilenă la 12 atm. Masa de acetilenă dizolvată în 5,6 L de acetonă la 12 atm și 0 °C este:",
    options: {
      A: "1,95 kg",
      B: "2,34 kg",
      C: "11,7 kg",
      D: "20,16 kg",
      E: "23,4 kg"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Conform baremului, masa de acetilenă este 23,4 kg."
  }),

  createQuestion({
    id: "chem-alchine-test4-q010",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Acetilena se obține industrial din piatră de var (CaCO₃ → CaO + CO₂; CaO + 3C → CaC₂ + CO; CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂). Masa de piatră de var cu 80% CaCO₃ necesară obținerii a 224 m³ (c.n.) de acetilenă, cu randament global de 50%, este:",
    options: {
      A: "2500 kg",
      B: "1250 kg",
      C: "2000 kg",
      D: "5000 kg",
      E: "3125 kg"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Sunt necesari 20 kmol CaCO₃, adică 2000 kg pur; la puritatea de 80% rezultă 2500 kg."
  }),
   createQuestion({
    id: "chem-alchine-test4-q011",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "2600 g de acetilenă reacționează cu sodiu metalic și se obține un amestec într-un număr egal de moli de acetilură monosodică și acetilură disodică (acetilena se consumă total). Masa amestecului de acetiluri este:",
    options: {
      A: "3,45 kg",
      B: "4,8 kg",
      C: "5,0 kg",
      D: "5,9 kg",
      E: "7,0 kg"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "100 mol acetilenă formează 50 mol acetilură monosodică și 50 mol acetilură disodică; masa totală este 5900 g."
  }),

  createQuestion({
    id: "chem-alchine-test4-q012",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Denumirea corectă conform IUPAC a alchinei CH₃–C≡C–CH(C₂H₅)–CH(CH₃)₂ este:",
    options: {
      A: "3-etil-2-metil-4-hexină",
      B: "4-izopropil-2-hexină",
      C: "4-etil-5-metil-2-hexină",
      D: "2-metil-3-etil-4-hexină",
      E: "5-metil-4-etil-2-hexină"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Catena principală are șase atomi de carbon, tripla legătură la poziția 2 și substituenți la pozițiile 4 și 5."
  }),

  // COMPLEMENT GRUPAT – ÎNTREBĂRILE 13–40
  // A = 1,2,3; B = 1,3; C = 2,4; D = doar 4; E = 1,2,3,4

  createQuestion({
    id: "chem-alchine-test4-q013",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre molecula de acetilenă sunt corecte afirmațiile:\n1. Atomii de carbon sunt hibridizați sp, iar unghiul H–C≡C este de 180°.\n2. Conține trei legături σ și două legături π.\n3. Rotația liberă în jurul legăturii triple este imposibilă.\n4. Planurile celor două legături π sunt paralele între ele.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 1, 2 și 3 sunt corecte. Planurile celor două legături π sunt perpendiculare."
  }),

  createQuestion({
    id: "chem-alchine-test4-q014",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre propină, CH≡C–CH₃, sunt corecte afirmațiile:\n1. Are 6 legături σ și 2 legături π.\n2. Toți atomii de hidrogen se află în același plan cu atomii de carbon.\n3. Cei trei atomi de carbon sunt coliniari.\n4. Radicalul HC≡C–CH₂– se numește etinil.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Sunt corecte afirmațiile 1 și 3. Radicalul HC≡C–CH₂– se numește propargil."
  }),

  createQuestion({
    id: "chem-alchine-test4-q015",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Sunt corecte afirmațiile:\n1. 2-butina este o alchină marginală.\n2. Radicalul HC≡C– se numește etinil.\n3. Radicalul CH₃–C≡C– se numește 2-propinil.\n4. 1-butina și 2-butina sunt izomeri de poziție.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 2 și 4 sunt corecte. 2-butina este alchină internă."
  }),

  createQuestion({
    id: "chem-alchine-test4-q016",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Este corectă denumirea IUPAC:\n1. HC≡C–CH(CH₃)₂ – 2-metil-3-butină.\n2. HC≡C–CH(CH₃)–CH(C₂H₅)–CH₃ – 4-etil-3-metil-1-pentină.\n3. HC≡C–CH₂–CH(CH₃)₂ – 3-metil-1-pentină.\n4. (CH₃)₃C–C≡C–CH₂–CH₃ – 2,2-dimetil-3-hexină.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Numai afirmația 4 este corectă, conform baremului."
  }),

  createQuestion({
    id: "chem-alchine-test4-q017",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre alchinele cu formula moleculară C₅H₈ sunt corecte afirmațiile:\n1. Există trei alchine izomere.\n2. 1-pentina și 2-pentina sunt izomeri de poziție.\n3. 1-pentina și 3-metil-1-butina sunt izomeri de catenă.\n4. 2-pentina și 1,3-pentadiena sunt izomeri de funcțiune.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Toate cele patru afirmații sunt corecte."
  }),

  createQuestion({
    id: "chem-alchine-test4-q018",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Se dau: p.f. – etină −84 °C, propină −23 °C, 1-butină +8 °C, 2-butină +27 °C, 1-pentină +40 °C; p.t. – −82, −103, −122, −32, −106 °C. Sunt corecte afirmațiile:\n1. Etina, propina și 1-butina sunt gaze la 20 °C.\n2. 2-butina este lichidă la −40 °C.\n3. Punctele de fierbere cresc odată cu creșterea masei molare.\n4. Punctele de topire cresc monoton odată cu creșterea masei molare.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 1 și 3 sunt corecte. 2-butina este solidă la −40 °C."
  }),

  createQuestion({
    id: "chem-alchine-test4-q019",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre solubilitatea acetilenei sunt corecte afirmațiile:\n1. Este insolubilă în solvenți organici.\n2. La 0 °C, 1 L de apă dizolvă 1,7 L de acetilenă.\n3. Se transportă în stare lichefiată, în tuburi sub presiune.\n4. 20 L de acetonă pot dizolva 6000 L de acetilenă la 12 atm (volume măsurate în aceleași condiții).",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 2 și 4 sunt corecte. Acetilena este solubilă în acetonă."
  }),

  createQuestion({
    id: "chem-alchine-test4-q020",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre obținerea acetilenei sunt corecte afirmațiile:\n1. Reacția carbidului cu apa este puternic exotermă.\n2. Din 640 g de CaC₂ pur se obțin 224 L (c.n.) de acetilenă.\n3. Carbidul, CaC₂, este acetilura de calciu.\n4. În etapa CaO + 3C → CaC₂ + CO, pentru fiecare kmol de CaC₂ se consumă 36 kg de carbon.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Toate cele patru afirmații sunt corecte."
  }),
  createQuestion({
    id: "chem-alchine-test4-q021",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "80 g de carbid tehnic cu 80% CaC₂ reacționează cu apa și se degajă 17,92 L (c.n.) de acetilenă. Sunt corecte afirmațiile:\n1. Cei 80 g de carbid tehnic conțin 1 mol de CaC₂ pur.\n2. Acetilena obținută poate decolora total 12,8 kg de soluție de brom în CCl₄ de concentrație 2%.\n3. Se consumă 28,8 g de apă.\n4. Randamentul reacției este de 90%.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 1, 2 și 3 sunt corecte. Randamentul este 80%, nu 90%."
  }),

  createQuestion({
    id: "chem-alchine-test4-q022",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre hidrogenarea acetilenei sunt corecte afirmațiile:\n1. Cu Pd/Pb²⁺ se obține etena.\n2. La hidrogenarea parțială, 1 mol de acetilenă adiționează 2 moli de H₂.\n3. Pentru hidrogenarea totală a 11,2 L (c.n.) de acetilenă sunt necesari 22,4 L (c.n.) de H₂.\n4. Pentru hidrogenarea parțială a 11,2 L de acetilenă sunt necesari 22,4 L de H₂.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Sunt corecte 1 și 3. Hidrogenarea parțială consumă un mol de H₂ pentru fiecare mol de acetilenă."
  }),

  createQuestion({
    id: "chem-alchine-test4-q023",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre halogenarea acetilenei sunt corecte afirmațiile:\n1. 0,5 moli de acetilenă reacționează total cu 80 g de Br₂.\n2. La adiția unui mol de Br₂ se poate izola 1,2-dibromoetena.\n3. Bromul nu se adiționează la acetilenă dacă se lucrează în solvent inert.\n4. Reacția în fază gazoasă a clorului cu acetilena este violentă și duce la 2C + 2HCl.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 2 și 4 sunt corecte. Adiția totală la 0,5 mol acetilenă consumă 160 g Br₂."
  }),

  createQuestion({
    id: "chem-alchine-test4-q024",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre adiția hidracizilor la acetilenă sunt corecte afirmațiile:\n1. Adiția totală a HBr conduce la 1,2-dibromoetan.\n2. Adiția decurge într-o singură etapă, care nu poate fi oprită.\n3. Clorura de vinil este monomerul folosit la fabricarea cauciucului sintetic.\n4. Din 260 kg de acetilenă se pot obține cel mult 625 kg de clorură de vinil.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Numai afirmația 4 este corectă. Clorura de vinil este monomer pentru PVC."
  }),

  createQuestion({
    id: "chem-alchine-test4-q025",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre adiția apei la acetilenă sunt corecte afirmațiile:\n1. Are loc în prezența HgSO₄ și H₂SO₄.\n2. Alcoolul vinilic format trece prin tautomerie în etanal.\n3. Din 1120 L (c.n.) de acetilenă, cu randament de 50%, se obțin 1100 g de etanal.\n4. Adiția apei la propină conduce la propanal.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 1, 2 și 3 sunt corecte. Propina formează propanonă."
  }),

  createQuestion({
    id: "chem-alchine-test4-q026",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre arderea acetilenei sunt corecte afirmațiile:\n1. Ecuația reacției este HC≡CH + 3O₂ → 2CO₂ + H₂O.\n2. Pentru arderea a 4 m³ de acetilenă sunt necesari 50 m³ de aer (20% O₂).\n3. Flacăra oxiacetilenică atinge aproximativ 2000 °C.\n4. Fumul se datorează particulelor de carbon formate prin descompunerea termică C₂H₂ → 2C + H₂.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 2 și 4 sunt corecte. Arderea necesită 5/2 moli O₂/mol acetilenă."
  }),

  createQuestion({
    id: "chem-alchine-test4-q027",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre reacția acetilenei cu sodiul sunt corecte afirmațiile:\n1. La 150 °C se formează acetilura monosodică și se degajă ½ mol de H₂ pentru fiecare mol de acetilenă.\n2. Acetilurile metalelor alcaline sunt compuși covalenți.\n3. Pentru transformarea totală a 52 g de acetilenă în acetilură disodică sunt necesare 92 g de sodiu.\n4. Acetilurile metalelor alcaline nu reacționează cu apa.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 1 și 3 sunt corecte. Acetilurile alcaline sunt ionice și reacționează cu apa."
  }),

  createQuestion({
    id: "chem-alchine-test4-q028",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre reacția acetilenei cu reactivul Tollens sunt corecte afirmațiile:\n1. Reactivul Tollens este hidroxidul de diaminoargint (I), [Ag(NH₃)₂]OH.\n2. HC≡CH + 2[Ag(NH₃)₂]OH → AgC≡CAg + 4NH₃ + 2H₂O.\n3. Precipitatul format este alb-gălbui.\n4. 5,6 L (c.n.) de acetilenă formează 60 g de acetilură de diargint.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Toate cele patru afirmații sunt corecte."
  }),

  createQuestion({
    id: "chem-alchine-test4-q029",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre acetilura de dicupru (I) sunt corecte afirmațiile:\n1. HC≡CH + 2[Cu(NH₃)₂]Cl → CuC≡CCu + 2NH₃ + 2NH₄Cl.\n2. Din 11,2 L (c.n.) de acetilenă se formează 76 g de acetilură.\n3. În stare uscată este explozivă prin lovire și încălzire.\n4. Precipitatul format este alb-gălbui.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Afirmațiile 1, 2 și 3 sunt corecte. Precipitatul este roșu-brun."
  }),

  createQuestion({
    id: "chem-alchine-test4-q030",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Formează precipitat cu reactivul Tollens:\n1. 3-metil-1-butina.\n2. 2-pentina.\n3. 1-hexina.\n4. 3-hexina.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Alchinele marginale 3-metil-1-butina și 1-hexina formează precipitat."
  }),
  createQuestion({
    id: "chem-alchine-test4-q031",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "4000 m³ (c.n.) de CH₄ sunt supuși pirolizei (2CH₄ → C₂H₂ + 3H₂ și CH₄ → C + 2H₂). Gazele ieșite din cuptor conțin 15% C₂H₂, 60% H₂ și restul CH₄ (procente de volum). Sunt corecte afirmațiile:\n1. Se obțin 960 m³ de acetilenă.\n2. 48% din metanul introdus s-a transformat în acetilenă.\n3. Volumul total al gazelor ieșite este 6400 m³.\n4. În gaze se află 2880 m³ de hidrogen.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Volumul acetilenei este 960 m³, metanul transformat în acetilenă reprezintă 48%, iar volumul total este 6400 m³. Hidrogenul este 3840 m³."
  }),

  createQuestion({
    id: "chem-alchine-test4-q032",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "O alchenă A și o alchină B au același număr de atomi de carbon, iar M(A) : M(B) = 14 : 13. Sunt corecte afirmațiile:\n1. A se obține din B prin hidrogenare cu nichel.\n2. A și B sunt omologi.\n3. A formează precipitat cu reactivul Tollens, iar B nu.\n4. 1 mol de A și 1 mol de B consumă la ardere 5,5 moli de O₂.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Etena consumă 3 moli O₂, iar etina 2,5 moli O₂. Totalul este 5,5 moli."
  }),

  createQuestion({
    id: "chem-alchine-test4-q033",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Prin adiția unui mol de HCl la o alchină A masa acesteia crește cu 53,67%. Sunt corecte afirmațiile:\n1. A are 12 atomi de hidrogen în moleculă.\n2. Există trei alchine izomere cu A.\n3. 6,8 g de A adiționează total 3,65 g de HCl.\n4. Doar două dintre alchinele izomere cu A formează acetiluri cu sodiul.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Alchina are formula C₅H₈, cu trei izomeri. Două alchine marginale formează acetiluri cu sodiu."
  }),

  createQuestion({
    id: "chem-alchine-test4-q034",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "21,6 g de amestec echimasic de 1-butină și 2-butină reacționează cantitativ cu 26,7 g de [Cu(NH₃)₂]Cl. Sunt corecte afirmațiile:\n1. Amestecul conține 0,4 moli de hidrocarburi.\n2. Se formează 10,7 g de NH₄Cl.\n3. Precipitatul are masa molară 117 g/mol.\n4. 2-butina formează precipitat cu reactivul.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Amestecul conține 0,4 moli; se formează 10,7 g NH₄Cl și precipitat cu masa molară 117 g/mol. 2-butina nu reacționează."
  }),

  createQuestion({
    id: "chem-alchine-test4-q035",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Un amestec de etan, etenă și etină cu volumul de 112 L (c.n.) are raportul molar etan : etenă : etină = 2 : 2 : 1. Sunt corecte afirmațiile:\n1. Masa amestecului este 142 g.\n2. Hidrogenarea totală a amestecului consumă 89,6 L (c.n.) de H₂.\n3. Tratat cu exces de reactiv Tollens, amestecul formează 240 g de precipitat.\n4. Amestecul decolorează total 640 g de Br₂.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Toate afirmațiile sunt corecte: 142 g amestec, 89,6 L H₂, 240 g acetilură de argint și 640 g Br₂."
  }),

  createQuestion({
    id: "chem-alchine-test4-q036",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Se hidratează (HgSO₄/H₂SO₄) 560 m³ (c.n.) de acetilenă cu puritatea de 80%, cu randament de 75%. Sunt corecte afirmațiile:\n1. Se obțin 20 kmoli de etanal.\n2. Se obțin 880 kg de etanal.\n3. Enolul intermediar poate fi separat din amestecul de reacție.\n4. Se consumă 270 kg de apă.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Se obțin 15 kmoli de etanal (660 kg) și se consumă 270 kg de apă. Enolul este instabil."
  }),

  createQuestion({
    id: "chem-alchine-test4-q037",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Sunt corect clasificate reacțiile:\n1. HC≡CH + Na → HC≡CNa + ½ H₂ – substituție.\n2. CH₂=CH–OH → CH₃–CH=O – eliminare.\n3. HC≡CH + 5/2 O₂ → 2CO₂ + H₂O – oxidare.\n4. C₂H₂ → 2C + H₂ – substituție.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Reacțiile 1 și 3 sunt corect clasificate. Reacția 2 este tautomerie, iar reacția 4 este descompunere termică."
  }),

  createQuestion({
    id: "chem-alchine-test4-q038",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "6,8 g de alchină A adiționează total 32 g de Br₂. Sunt corecte afirmațiile:\n1. Există patru alchine izomere cu A.\n2. Produsul de adiție totală are masa molară 388 g/mol.\n3. Se formează 36,8 g de produs de adiție.\n4. A are formula moleculară C₅H₈.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Alchina este C₅H₈; produsul C₅H₈Br₄ are masa molară 388 g/mol. Masa obținută este 38,8 g."
  }),

  createQuestion({
    id: "chem-alchine-test4-q039",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "0,5 moli de amestec echimolar de etină și propină reacționează cantitativ cu sodiu metalic la 150 °C, formând acetiluri monosodice. Sunt corecte afirmațiile:\n1. Se consumă 11,5 g de sodiu.\n2. Se degajă 5,6 L (c.n.) de H₂.\n3. Masa acetilurilor formate este 27,5 g.\n4. La 220 °C, cu exces de sodiu, amestecul consumă în total 0,75 moli de sodiu.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Toate afirmațiile sunt corecte: 11,5 g Na, 5,6 L H₂, 27,5 g acetiluri și 0,75 moli Na la 220 °C."
  }),

  createQuestion({
    id: "chem-alchine-test4-q040",
    subject: SUBJECTS.CHEMISTRY,
    chapter: "alchine",
    topic: "test-4",
    type: QUESTION_TYPES.SINGLE,
    text: "Se supun pirolizei 4480 m³ (c.n.) de CH₄ cu randament de 50% (2CH₄ → C₂H₂ + 3H₂). 40% din acetilena obținută se transformă în clorură de vinil (HgCl₂, 170 °C), iar restul în etanal (reacția Kucerov); reacțiile de adiție sunt totale. Sunt corecte afirmațiile:\n1. Se obțin 1100 kg de etanal.\n2. Se consumă 224 m³ (c.n.) de HCl.\n3. În piroliză se degajă 2240 m³ (c.n.) de hidrogen.\n4. Se obțin 1250 kg de clorură de vinil.",
    options: {
      A: "1, 2 și 3",
      B: "1 și 3",
      C: "2 și 4",
      D: "Numai 4",
      E: "1, 2, 3 și 4"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.HARD,
    explanation: "Se obțin 50 kmoli acetilenă: 20 kmoli clorură de vinil (1250 kg) și 30 kmoli etanal (1320 kg). HCl consumat: 448 m³; H₂ format: 3360 m³."
  })

];