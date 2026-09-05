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
    id: "topografie-celula-genetica-tesuturi",
    name: "Topografie - nomenclatura anatomica - functiile organismului uman / Celula - Genetica / Tesuturi",
    order: 1
  },
  {
    id: "sistem-nervos",
    name: "Sistemul nervos",
    order: 2
  },
  {
    id: "analizatori",
    name: "Analizatorii",
    order: 3
  },
  {
    id: "sistem-endocrin",
    name: "Sistemul endocrin",
    order: 4
  },
  {
    id: "sistem-locomotor",
    name: "Sistemul locomotor",
    order: 5
  },
  {
    id: "digestie",
    name: "Digestia si absorbtia",
    order: 6
  },
  {
    id: "circulatie",
    name: "Circulatia",
    order: 7
  },
  {
    id: "respiratie",
    name: "Respiratia",
    order: 8
  },
  {
    id: "excretie",
    name: "Excretia",
    order: 9
  },
  {
    id: "metabolism",
    name: "Metabolismul",
    order: 10
  },
  {
    id: "reproducere",
    name: "Reproducerea",
    order: 11
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