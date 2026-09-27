import {
  createQuestion,
  QUESTION_TYPES,
  SUBJECTS,
  DIFFICULTY_LEVELS
} from "../question-schema.js";

const TEST_3_QUESTIONS = [

  createQuestion({
    id: "bio-sist-nerv-test3-q001",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "În schema fibrei mielinizate de mai jos, literele marchează succesiv segmente ale axonului și întreruperi ale tecii. Care afirmație explică cel mai bine avantajul funcțional al mielinizării?",
    image: "../assets/biology/test3-q01-fibra-mielinizata.png",
    options: {
      A: "Potențialul de acțiune se regenerează continuu pe întreaga membrană internodală",
      B: "Impulsul este transmis exclusiv prin citoplasmă, fără curenți locali",
      C: "Depolarizarea eficientă se concentrează la nodurile Ranvier, iar conducerea devine saltatorie",
      D: "Mielina crește durata perioadei refractare absolute la fiecare nod",
      E: "Viteza scade deoarece nodurile întrerup continuitatea axonului"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q002",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "O sinapsă chimică este comparată cu una electrică. Care asociere este corectă?",
    options: {
      A: "Chimică – bidirecțională obligatoriu; electrică – unidirecțională",
      B: "Chimică – fantă sinaptică și mediator; electrică – trecere ionică prin joncțiuni",
      C: "Chimică – fără întârziere; electrică – cu întârziere mare",
      D: "Chimică – două celule fără membrane specializate; electrică – vezicule presinaptice",
      E: "Ambele necesită obligatoriu exocitoză de neurotransmițător"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q003",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Un stimul depolarizant aduce membrana neuronală la prag. Care eveniment este cel mai direct legat de faza ascendentă a potențialului de acțiune?",
    options: {
      A: "Eflux masiv de Na+",
      B: "Influx de Na+ prin canale voltaj-dependente",
      C: "Influx de K+",
      D: "Închiderea tuturor canalelor ionice",
      E: "Eliberarea mediatorului la dendrită"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q004",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Figura prezintă o rețea neuronală cu sinapse excitatorii și inhibitorii. Neuronul C este un interneuron multipolar excitator. Axonul său formează două colaterale: una sinapsează excitator cu motoneuronul F, iar cealaltă sinapsează excitator cu interneuronul inhibitor E. Neuronul E sinapsează inhibitor cu neuronul vegetativ H, iar H inervează glanda I. Un electrod aplică în punctul X un stimul depolarizant supraliminar pe axonul neuronului C. Care variantă descrie corect consecința imediată a stimulării?",
    image: "../assets/biology/test3-q04-retea-neuronala.png",
    options: {
      A: "Activarea lui C excită F și, simultan, excită E; F poate activa mușchiul G, iar E reduce activitatea lui H și, implicit, comanda către glanda I.",
      B: "Activarea lui C inhibă direct F și excită direct H, determinând relaxarea mușchiului G și stimularea glandei I.",
      C: "Potențialul de acțiune se transmite retrograd prin sinapsa B–C până la receptorul A, deoarece sinapsele chimice conduc bidirecțional.",
      D: "Activarea lui C determină obligatoriu activarea neuronului bipolar D și a receptorului vizual, indiferent de sensul conexiunilor.",
      E: "Stimulul din X produce potențial de acțiune numai local, fără propagare spre terminațiile axonale ale neuronului C."
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q005",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Un elev urmărește o informație dureroasă de la tegumentul membrului inferior până la cortex. Care succesiune păstrează corect principiul de organizare descris?",
    options: {
      A: "Receptor liber → ganglion spinal → corn posterior → cale ascendentă → talamus → cortex",
      B: "Corpuscul lamelar → corn anterior → cerebel → cortex",
      C: "Fus neuromuscular → ganglion vegetativ → talamus → cortex",
      D: "Receptor liber → corn lateral → ganglion spinal → cerebel",
      E: "Receptor liber → ganglion spinal → corn anterior → fascicul piramidal"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q006",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Două căi proprioceptive inconștiente ajung la cerebel. Care diferență de traseu este corectă?",
    options: {
      A: "Dorsalul folosește pedunculul superior, ventralul inferior",
      B: "Dorsalul străbate doar bulbul înainte de pedunculul inferior, ventralul urcă prin bulb, punte și mezencefal spre pedunculul superior",
      C: "Ambele se termină mai întâi în talamus",
      D: "Ventralul este descendent",
      E: "Dorsalul traversează cortexul motor"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q007",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Dacă sunt întrerupte selectiv fibrele corticospinale care au decusat în bulb, care fascicul medular este vizat în principal?",
    options: {
      A: "Corticospinal anterior ipsilateral",
      B: "Spinocerebelos dorsal",
      C: "Corticospinal lateral",
      D: "Spinotalamic anterior",
      E: "Fascicul de asociație"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q008",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Într-un reflex miotatic, care modificare ar transforma circuitul descris într-un reflex polisinaptic de apărare?",
    options: {
      A: "Păstrarea sinapsei directe senzitiv-motorii",
      B: "Introducerea neuronilor de asociație între aferență și motoneuron și utilizarea receptorilor nociceptivi",
      C: "Păstrarea fusului neuromuscular ca receptor",
      D: "Păstrarea exclusivă a extensorului ca efector",
      E: "Eliminarea căii aferente"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q009",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "În schema circuitului reflex, S reprezintă neuronul senzitiv, I un interneuron, M motoneuronul. Care afirmație este compatibilă cu un reflex nociceptiv?",
    image: "../assets/biology/test3-q09-circuit-reflex.png",
    options: {
      A: "Eliminarea lui I nu schimbă caracterul polisinaptic",
      B: "R poate fi o terminație nervoasă liberă, iar I participă la centrul reflex",
      C: "M este obligatoriu neuron vegetativ postganglionar",
      D: "E este glandă exocrină",
      E: "S are corpul celular obligatoriu în talamus"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q010",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "O stimulare progresiv mai intensă a unei broaște spinale produce răspuns de la flexia locală până la contracții generalizate. Deducția corectă este:",
    options: {
      A: "Intensificarea stimulului restrânge recrutarea neuronală",
      B: "Iradierea reflexă crește odată cu intensitatea stimulului",
      C: "Generalizarea precede localizarea",
      D: "Simetria apare numai la stimulul minim",
      E: "Fenomenul demonstrează exclusiv conducerea motorie"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q011",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Care structură NU aparține circuitului extrapiramidal prezentat?",
    options: {
      A: "Nucleul roșu",
      B: "Nucleii bazali",
      C: "Formația reticulată",
      D: "Fasciculul rubrospinal",
      E: "Fasciculul corticospinal lateral"
    },
    correctAnswers: ["E"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q012",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Un pacient ipotetic are afectată selectiv o structură care coordonează tonusul, postura și mișcarea fără a iniția direct comanda voluntară corticală. Cea mai compatibilă structură este:",
    options: {
      A: "Cerebelul",
      B: "Ganglionul spinal",
      C: "Cornul posterior",
      D: "Nervul olfactiv",
      E: "Medulosuprarenala"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q013",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Analizați figura, în care toate reperele numerotate 1–5 sunt utilizate în item. Care variantă asociază corect reperele cu rolurile funcționale indicate?",
    image: "../assets/biology/test3-q13-arii-corticale.png",
    options: {
      A: "1 – aria premotorie; 2 – M1; 3 – S1; 4 – aria motorie suplimentară; 5 – aria vizuală.",
      B: "1 – M1; 2 – aria premotorie; 3 – aria motorie suplimentară; 4 – S1; 5 – aria Broca.",
      C: "1 – S1; 2 – aria Broca; 3 – M1; 4 – aria premotorie; 5 – aria motorie suplimentară.",
      D: "1 – aria motorie suplimentară; 2 – S1; 3 – aria Broca; 4 – M1; 5 – aria premotorie.",
      E: "1 – aria Broca; 2 – aria motorie suplimentară; 3 – aria premotorie; 4 – S1; 5 – M1."
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q014",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Formația reticulată este prezentată ca rețea neuronală cu funcții multiple. Care asociere este incompatibilă?",
    options: {
      A: "SRAA – activare corticală",
      B: "SRDI – efect inhibitor asupra tonusului și reflexelor",
      C: "Formația reticulată – participare la ciclul somn-veghe",
      D: "Formația reticulată – releu unic și obligatoriu pentru toate sensibilitățile specifice",
      E: "Formația reticulată – influențe vegetative"
    },
    correctAnswers: ["D"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q015",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Hipotalamusul este ales ca nod integrator într-o problemă de homeostazie. Care combinație justifică cel mai bine alegerea?",
    options: {
      A: "Integrează exclusiv informația vizuală",
      B: "Coordonează numai motricitatea voluntară fină",
      C: "Participă la reglarea vegetativă, endocrină și a unor comportamente homeostatice",
      D: "Este sediul protoneuronilor spinali",
      E: "Este singurul nucleu al cerebelului"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q016",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "În schema SNV cu doi neuroni eferenți, dacă segmentul 1 este lung iar 2 scurt, cea mai probabilă organizare este:",
    image: "../assets/biology/test3-q16-snv.png",
    options: {
      A: "Simpatică, ganglion paravertebral",
      B: "Parasimpatică, ganglion juxtavisceral/intramural",
      C: "Somatică, fără ganglion",
      D: "Simpatică, fără acetilcolină ganglionară",
      E: "Piramidală"
    },
    correctAnswers: ["B"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q017",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Care situație exemplifică cel mai bine faptul că simpaticul și parasimpaticul nu sunt obligatoriu antagoniste?",
    options: {
      A: "Cooperarea în micțiune sau în funcții reproductive",
      B: "Decusația piramidală",
      C: "Reflexul miotatic",
      D: "Conducerea saltatorie",
      E: "Proiecția spinotalamică"
    },
    correctAnswers: ["A"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),

  createQuestion({
    id: "bio-sist-nerv-test3-q018",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Un item cere corelarea SNV cu homeostazia. Care afirmație este cea mai solidă din punct de vedere fiziologic?",
    options: {
      A: "Toate vasele au inervație parasimpatică obligatorie",
      B: "Medulosuprarenala este controlată parasimpatic direct",
      C: "Structurile fără parasimpatic pot fi reglate prin variația tonusului simpatic",
      D: "Glandele sudoripare nu au control vegetativ",
      E: "Sistemul simpatoadrenal nu participă la termoreglare"
    },
    correctAnswers: ["C"],
    difficulty: DIFFICULTY_LEVELS.MEDIUM,
    explanation: ""
  }),
  // COMPLEMENT GRUPAT – 19–60
  // A = 1, 2, 3 adevărate
  // B = 1 și 3 adevărate
  // C = 2 și 4 adevărate
  // D = numai 4 adevărată
  // E = toate adevărate SAU toate false

  createQuestion({
    id: "bio-sist-nerv-test3-q019",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Despre excitabilitatea și conducerea neuronului:\n1. potențialul de acțiune respectă legea tot sau nimic\n2. în fibra mielinizată conducerea poate fi saltatorie\n3. nodurile Ranvier sunt importante pentru regenerarea potențialului\n4. mielina obligă impulsul să traverseze sinapse între noduri",
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
    id: "bio-sist-nerv-test3-q020",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Comparând sinapsa chimică și electrică:\n1. sinapsa chimică folosește mediator chimic\n2. sinapsa electrică poate permite conducere bidirecțională\n3. sinapsa chimică prezintă element presinaptic și postsinaptic\n4. sinapsa electrică necesită obligatoriu vezicule cu mediator",
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
    id: "bio-sist-nerv-test3-q021",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Receptorii, în cadrul arcului reflex:\n1. transformă energia stimulului în semnal nervos\n2. pot fi clasificați după localizare și tipul stimulului\n3. receptorul este întotdeauna un neuron complet\n4. pot exista receptori interoceptivi în viscere și vase",
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
    id: "bio-sist-nerv-test3-q022",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Substanța cenușie medulară:\n1. coarnele anterioare conțin neuroni somatomotori\n2. coarnele posterioare participă la prelucrarea aferențelor senzitive\n3. coarnele laterale toraco-lombare superioare includ neuroni simpatici preganglionari\n4. ganglionii spinali sunt incluși anatomic în substanța cenușie medulară",
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
    id: "bio-sist-nerv-test3-q023",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Substanța albă medulară:\n1. căile ascendente sunt în general mai periferice\n2. căile descendente tind să fie mai interne\n3. fasciculele de asociație sunt aproape de substanța cenușie\n4. toate fibrele albe sunt nemielinizate",
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
    id: "bio-sist-nerv-test3-q024",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Calea sensibilității termice și dureroase:\n1. receptorii pot fi terminații nervoase libere\n2. protoneuronul se află în ganglionul spinal\n3. deutoneuronul poate fi în cornul posterior\n4. este o cale motorie descendentă",
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
    id: "bio-sist-nerv-test3-q025",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Calea interoceptivă descrisă în manual:\n1. poate porni din receptori viscerali sau vasculari\n2. este multisinaptică\n3. are releu talamic\n4. proiecția corticală poate fi difuză",
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
    id: "bio-sist-nerv-test3-q026",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Propriocepția inconștientă către cerebel:\n1. poate utiliza fascicule spinocerebeloase\n2. fasciculul dorsal intră prin pedunculul inferior\n3. fasciculul ventral poate ajunge prin pedunculul superior\n4. ambele fascicule sunt descendente",
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
    id: "bio-sist-nerv-test3-q027",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Sistemul piramidal:\n1. are origine corticală\n2. este legat de motilitatea voluntară\n3. majoritatea fibrelor corticospinale decusează bulbar\n4. toate fibrele decusează obligatoriu în bulb",
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
    id: "bio-sist-nerv-test3-q028",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Fasciculul corticospinal anterior:\n1. provine din fibre care nu au decusat bulbar\n2. se află în cordonul anterior\n3. unele fibre se pot încrucișa segmentar\n4. reprezintă aproximativ 75% din totalul fibrelor piramidale",
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
    id: "bio-sist-nerv-test3-q029",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Sistemul extrapiramidal:\n1. include căi descendente diferite de fasciculele piramidale\n2. poate implica nucleul roșu și formația reticulată\n3. participă la reglarea tonusului și mișcărilor automate\n4. este identic cu fasciculul corticospinal lateral",
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
    id: "bio-sist-nerv-test3-q030",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Nervii spinali:\n1. sunt nervi micști după unirea rădăcinilor\n2. rădăcina posterioară este aferentă\n3. ganglionul spinal se asociază rădăcinii posterioare\n4. rădăcina anterioară conține numai fibre senzitive",
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
    id: "bio-sist-nerv-test3-q031",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Reflexul miotatic:\n1. este monosinaptic în componenta sa fundamentală\n2. receptorul este proprioceptiv\n3. contribuie la tonus și postură\n4. centrul său obligatoriu include mai mulți interneuroni",
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
    id: "bio-sist-nerv-test3-q032",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Reflexul nociceptiv:\n1. este reflex de apărare\n2. este polisinaptic\n3. poate recruta neuroni de asociație\n4. efectorul descris este musculatura flexoare",
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
    id: "bio-sist-nerv-test3-q033",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "În experimentul Pflüger, odată cu creșterea intensității stimulului:\n1. răspunsul poate trece de la localizare la unilateralitate\n2. poate apărea simetria\n3. poate apărea iradierea către toate extremitățile\n4. generalizarea poate implica musculatura membrelor și trunchiului",
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
    id: "bio-sist-nerv-test3-q034",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Trunchiul cerebral:\n1. include bulbul, puntea și mezencefalul\n2. conține nuclei ai mai multor nervi cranieni\n3. participă la reflexe somatice și vegetative\n4. este exclus din căile corticospinale",
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
    id: "bio-sist-nerv-test3-q035",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Funcțiile bulbului rahidian pot include reflexe legate de:\n1. activitatea cardiovasculară\n2. respirație\n3. deglutiție și vărsătură\n4. elaborarea reflexelor condiționate corticale",
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
    id: "bio-sist-nerv-test3-q036",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Formația reticulată:\n1. este o rețea neuronală în trunchiul cerebral\n2. poate influența starea de veghe\n3. poate influența tonusul și reflexele\n4. este formată exclusiv din nuclei senzitivi specifici",
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
    id: "bio-sist-nerv-test3-q037",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Sistemul reticulat activator ascendent:\n1. poate influența activarea corticală\n2. participă la starea de veghe\n3. primește informații colaterale din multiple sisteme\n4. este fasciculul corticospinal anterior",
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
    id: "bio-sist-nerv-test3-q038",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Cerebelul:\n1. are cortex de substanță cenușie\n2. are substanță albă centrală\n3. conține nuclei în substanța albă\n4. este originea motoneuronilor spinali",
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
    id: "bio-sist-nerv-test3-q039",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Consecințele afectării cerebeloase descrise pot include:\n1. astenie\n2. astazie\n3. atonie\n4. abolirea obligatorie și definitivă a sensibilității cutanate",
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
    id: "bio-sist-nerv-test3-q040",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Integrarea motorie cerebeloasă:\n1. folosește aferențe proprioceptive\n2. poate compara informații despre mișcare\n3. influențează coordonarea și tonusul\n4. inițiază singură motivația corticală pentru orice mișcare",
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
    id: "bio-sist-nerv-test3-q041",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Talamusul:\n1. participă la relee senzitive\n2. are conexiuni cu scoarța cerebrală\n3. poate participa la circuite motorii cu cerebelul/nucleii bazali\n4. este un ganglion vegetativ periferic",
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
    id: "bio-sist-nerv-test3-q042",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Hipotalamusul:\n1. participă la homeostazie\n2. integrează funcții vegetative\n3. are relații cu controlul endocrin\n4. este localizat în măduva spinării",
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
    id: "bio-sist-nerv-test3-q043",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Sistemul limbic, în organizarea funcțională:\n1. se corelează cu afectivitatea și comportamentul\n2. are legături cu hipotalamusul\n3. poate influența răspunsuri vegetative\n4. este sinonim cu fasciculul piramidal",
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
    id: "bio-sist-nerv-test3-q044",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Scoarța cerebrală și controlul motor:\n1. aria motorie primară participă la comanda voluntară\n2. aria premotorie participă la organizarea mișcării\n3. ariile asociative pot contribui la planificare\n4. motoneuronul spinal este localizat în cortex",
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
    id: "bio-sist-nerv-test3-q045",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "În circuitul motor integrativ cortex–nuclei bazali–talamus–cerebel:\n1. nucleii bazali pot influența programul motor\n2. talamusul poate retransmite informație spre cortex\n3. cerebelul poate modula execuția motorie\n4. toate aceste structuri sunt neuroni periferici",
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
    id: "bio-sist-nerv-test3-q046",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Activitatea nervoasă superioară:\n1. reflexele condiționate sunt dobândite\n2. se bazează pe activitate corticală\n3. inhibiția poate fi proces activ\n4. reflexul condiționat este invariabil ereditar",
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
    id: "bio-sist-nerv-test3-q047",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Inhibiția corticală:\n1. poate fi externă/necondiționată\n2. poate fi internă/condiționată\n3. stingerea și diferențierea sunt forme interne\n4. nu poate iradia niciodată",
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
    id: "bio-sist-nerv-test3-q048",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Arcul reflex vegetativ:\n1. are componentă aferentă viscerală\n2. calea eferentă include tipic doi neuroni\n3. între cei doi neuroni există un ganglion vegetativ\n4. este identic structural cu arcul somatic mononeuronal eferent",
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
    id: "bio-sist-nerv-test3-q049",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Simpaticul:\n1. are centri toraco-lombari\n2. folosește ganglioni paravertebrali/prevertebrali\n3. are de regulă fibre preganglionare mai scurte decât postganglionarele\n4. are centri exclusiv în S2–S4",
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
    id: "bio-sist-nerv-test3-q050",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Parasimpaticul:\n1. are componentă craniană\n2. are componentă sacrală\n3. are ganglioni juxtaviscerali sau intramurali\n4. are întotdeauna fibre preganglionare scurte",
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
    id: "bio-sist-nerv-test3-q051",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "La sinapsele ganglionare vegetative:\n1. acetilcolina poate fi mediator în simpatic\n2. acetilcolina poate fi mediator în parasimpatic\n3. fibra preganglionară face sinapsă cu neuronul postganglionar\n4. noradrenalina este obligatoriu mediatorul ganglionar în simpatic",
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
    id: "bio-sist-nerv-test3-q052",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Efectorii vegetativi pot include:\n1. mușchi neted\n2. miocard\n3. glande\n4. mușchi scheletic voluntar ca efector vegetativ tipic",
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
    id: "bio-sist-nerv-test3-q053",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Relațiile simpatico-parasimpatice:\n1. pot fi antagoniste\n2. pot fi complementare\n3. pot fi cooperante\n4. sunt obligatoriu identice în toate organele",
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
    id: "bio-sist-nerv-test3-q054",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Structuri menționate ca lipsite de inervație parasimpatică:\n1. medulosuprarenala\n2. glandele sudoripare\n3. mușchii erectori ai firelor de păr\n4. majoritatea vaselor sangvine",
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
    id: "bio-sist-nerv-test3-q055",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Într-o reacție de tip 'fight or flight':\n1. poate crește frecvența cardiacă\n2. poate apărea midriază\n3. poate fi inhibată motilitatea digestivă\n4. răspunsul este exclusiv somatic, fără componentă vegetativă",
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
    id: "bio-sist-nerv-test3-q056",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Corelând SNV cu aparatul digestiv:\n1. motilitatea și secreția pot fi modulate vegetativ\n2. simpaticul și parasimpaticul pot avea efecte diferite\n3. plexurile/ganglionii periferici participă la control\n4. digestia este complet independentă de sistemul nervos",
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
    id: "bio-sist-nerv-test3-q057",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Corelând SNV cu aparatul cardiovascular:\n1. există control vegetativ al cordului\n2. există control simpatic al tonusului vascular\n3. reflexele cardiovasculare pot implica trunchiul cerebral\n4. toate vasele primesc obligatoriu parasimpatic",
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
    id: "bio-sist-nerv-test3-q058",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Corelând hipotalamusul cu homeostazia:\n1. poate integra semnale viscerale\n2. poate influența răspunsuri vegetative\n3. poate participa la control endocrin\n4. funcția sa este limitată la sensibilitatea tactilă fină",
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
    id: "bio-sist-nerv-test3-q059",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "O leziune ipotetică a rădăcinii posterioare a unui nerv spinal, înainte de unirea cu rădăcina anterioară:\n1. poate întrerupe aferențe somatice\n2. poate afecta brațul aferent al unor reflexe\n3. nu întrerupe direct axonii motoneuronilor din rădăcina anterioară\n4. produce obligatoriu paralizie prin secționarea directă a tuturor fibrelor motorii",
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
    id: "bio-sist-nerv-test3-q060",
    subject: SUBJECTS.BIOLOGY,
    chapter: "sistemul-nervos",
    topic: "test-3",
    type: QUESTION_TYPES.SINGLE,
    text: "Dacă un circuit păstrează receptorul, aferența și motoneuronul, dar se elimină interneuronul obligatoriu al unui reflex polisinaptic:\n1. organizarea reflexului nociceptiv este alterată\n2. calea miotatică monosinaptică fundamentală poate rămâne posibilă\n3. diferența evidențiază rolul interneuronilor în circuite polisinaptice\n4. orice reflex medular devine imposibil",
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

];

export {
  TEST_3_QUESTIONS
};