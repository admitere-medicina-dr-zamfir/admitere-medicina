/**
 * Atlas BioChem / BioBank
 * Structura capitolelor de Biologie
 */

/**
 * Capitolele principale utilizate in Atlas BioBank.
 *
 * Fiecare capitol are:
 * - id: identificator intern stabil
 * - name: denumirea afisata utilizatorului
 * - order: ordinea capitolului in interfata
 */
const BIOLOGY_CHAPTERS = [
  {
    id: "topografie-nomenclatura-functii",
    name: "Topografie - nomenclatura anatomica - functiile organismului uman",
    order: 1
  },
  {
    id: "celula-genetica",
    name: "Celula - Genetica",
    order: 2
  },
  {
    id: "tesuturi",
    name: "Tesuturi",
    order: 3
  },
  {
    id: "sistem-nervos",
    name: "Sistemul nervos",
    order: 4
  },
  {
    id: "analizatori",
    name: "Analizatorii",
    order: 5
  },
  {
    id: "sistem-endocrin",
    name: "Sistemul endocrin",
    order: 6
  },
  {
    id: "sistem-locomotor",
    name: "Sistemul locomotor",
    order: 7
  },
  {
    id: "digestie",
    name: "Digestia si absorbtia",
    order: 8
  },
  {
    id: "circulatie",
    name: "Circulatia",
    order: 9
  },
  {
    id: "respiratie",
    name: "Respiratia",
    order: 10
  },
  {
    id: "excretie",
    name: "Excretia",
    order: 11
  },
  {
    id: "metabolism",
    name: "Metabolismul",
    order: 12
  },
  {
    id: "reproducere",
    name: "Reproducerea",
    order: 13
  }
];

/**
 * Returneaza toate capitolele de Biologie.
 */
function getBiologyChapters() {
  return [...BIOLOGY_CHAPTERS];
}

/**
 * Cauta un capitol dupa ID.
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
 * Verifica daca un ID reprezinta un capitol valid.
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