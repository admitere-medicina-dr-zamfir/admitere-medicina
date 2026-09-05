/**
 * Atlas BioChem / BioBank
 * Schema standard pentru întrebări
 */

const QUESTION_TYPES = {
  SINGLE: "single",
  MULTIPLE: "multiple"
};

const SUBJECTS = {
  BIOLOGY: "biology",
  CHEMISTRY: "chemistry"
};

const DIFFICULTY_LEVELS = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard"
};

/**
 * Creează o întrebare în formatul standard Atlas.
 */
function createQuestion({
  id,
  subject,
  chapter,
  topic = "",
  type = QUESTION_TYPES.SINGLE,
  text,
  options,
  correctAnswers,
  difficulty = DIFFICULTY_LEVELS.MEDIUM,
  explanation = "",
  image = null
}) {
  return {
    id,
    subject,
    chapter,
    topic,
    type,
    text,
    options,
    correctAnswers,
    difficulty,
    explanation,
    image
  };
}

export {
  QUESTION_TYPES,
  SUBJECTS,
  DIFFICULTY_LEVELS,
  createQuestion
};