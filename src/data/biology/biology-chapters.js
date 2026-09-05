/**
 * Atlas BioChem / BioBank
 * Structura capitolelor de Biologie
 */

/**
 * Capitolele principale utilizate în Atlas BioBank.
 *
 * Fiecare capitol are:
 * - id: identificator intern stabil
 * - name: denumirea afișată utilizatorului
 * - order: ordinea capitolului în interfață
 */
const BIOLOGY_CHAPTERS = [
  {
    id: "celula",
    name: "Celula",
    order: 1
  },
  {
    id: "tesuturi",
    name: "Țesuturi",
    order: 2
  },
  {
    id: "sistem-nervos",
    name: "Sistemul nervos",
    order: 3
  },
  {
    id: "analizatori",
    name: "Analizatorii",
    order: 4
  },
  {
    id: "sistem-endocrin",
    name: "Sistemul endocrin",
    order: 5
  },
  {
    id: "sistem-locomotor",
    name: "Sistemul locomotor",
    order: 6
  },
  {
    id: "digestie",
    name: "Digestia și absorbția",
    order: 7
  },
  {
    id: "circulatie",
    name: "Circulația",
    order: 8
  },
  {
    id: "respiratie",
    name: "Respirația",
    order: 9
  },
  {
    id: "excretie",
    name: "Excreția",
    order: 10
  },
  {
    id: "reproducere",
    name: "Reproducerea",
    order: 11
  },
  {
    id: "genetica",
    name: "Genetică",
    order: 12
  }
];

/**
 * Returnează toate capitolele de Biologie.
 */
function getBiologyChapters() {
  return [...BIOLOGY_CHAPTERS];
}

/**
 * Caută un capitol după ID.
 *
 * @param {string} chapterId
 * @returns {Object|null}
 */
function getBiologyChapterById(chapterId) {
  return (
    BIOLOGY_CHAPTERS.find(
      (chapter) => chapter.id === chapterId
    ) || null
  );
}

/**
 * Verifică dacă un ID reprezintă un capitol valid.
 *
 * @param {string} chapterId
 * @returns {boolean}
 */
function isValidBiologyChapter(chapterId) {
  return BIOLOGY_CHAPTERS.some(
    (chapter) => chapter.id === chapterId
  );
}

export {
  BIOLOGY_CHAPTERS,
  getBiologyChapters,
  getBiologyChapterById,
  isValidBiologyChapter
};