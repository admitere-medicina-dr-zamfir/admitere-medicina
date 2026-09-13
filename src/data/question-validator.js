/**
 * Atlas BioChem / BioBank
 * Validator pentru structura întrebărilor
 */

import {
    QUESTION_TYPES,
    SUBJECTS,
    DIFFICULTY_LEVELS
} from "./question-schema.js";

/**
 * Verifică dacă o întrebare respectă structura standard Atlas.
 *
 * @param {Object} question
 * @returns {{ valid: boolean, errors: string[] }}
 */
function validateQuestion(question) {
    const errors = [];

    if (!question || typeof question !== "object") {
        return {
            valid: false,
            errors: ["Întrebarea trebuie să fie un obiect valid."]
        };
    }

    // ID
    if (
        question.id === undefined ||
        question.id === null ||
        String(question.id).trim() === ""
    ) {
        errors.push("Lipsește ID-ul întrebării.");
    }

    // Disciplina
    if (!Object.values(SUBJECTS).includes(question.subject)) {
        errors.push(`Disciplina "${question.subject}" nu este validă.`);
    }

    // Capitol
    if (
        typeof question.chapter !== "string" ||
        question.chapter.trim() === ""
    ) {
        errors.push("Lipsește capitolul întrebării.");
    }

    // Enunț
    if (
        typeof question.text !== "string" ||
        question.text.trim() === ""
    ) {
        errors.push("Lipsește enunțul întrebării.");
    }

    // Tipul întrebării
    if (!Object.values(QUESTION_TYPES).includes(question.type)) {
        errors.push(`Tipul "${question.type}" nu este valid.`);
    }

    // Variante de răspuns
if (
  !question.options ||
  typeof question.options !== "object" ||
  Array.isArray(question.options) ||
  Object.keys(question.options).length < 2
) {
  errors.push(
    "Întrebarea trebuie să conțină cel puțin două variante de răspuns."
  );
}

    // Răspunsuri corecte
    if (
        !Array.isArray(question.correctAnswers) ||
        question.correctAnswers.length === 0
    ) {
        errors.push("Trebuie definit cel puțin un răspuns corect.");
    }

    // Verifică dacă răspunsurile corecte există în options
if (
  question.options &&
  typeof question.options === "object" &&
  !Array.isArray(question.options) &&
  Array.isArray(question.correctAnswers)
) {
  question.correctAnswers.forEach((answer) => {
    if (!Object.prototype.hasOwnProperty.call(question.options, answer)) {
      errors.push(
        `Răspunsul corect "${answer}" nu există în variantele de răspuns.`
      );
    }
  });
}

    // SINGLE trebuie să aibă exact un răspuns corect
    if (
        question.type === QUESTION_TYPES.SINGLE &&
        Array.isArray(question.correctAnswers) &&
        question.correctAnswers.length !== 1
    ) {
        errors.push(
            "O întrebare de tip SINGLE trebuie să aibă exact un răspuns corect."
        );
    }

    // MULTIPLE trebuie să aibă minimum două răspunsuri corecte
    if (
        question.type === QUESTION_TYPES.MULTIPLE &&
        Array.isArray(question.correctAnswers) &&
        question.correctAnswers.length < 2
    ) {
        errors.push(
            "O întrebare de tip MULTIPLE trebuie să aibă cel puțin două răspunsuri corecte."
        );
    }

    // Dificultate
    if (!Object.values(DIFFICULTY_LEVELS).includes(question.difficulty)) {
        errors.push(
            `Nivelul de dificultate "${question.difficulty}" nu este valid.`
        );
    }

    return {
        valid: errors.length === 0,
        errors
    };
}

/**
 * Validează o colecție întreagă de întrebări.
 */
function validateQuestionBank(questions) {
    if (!Array.isArray(questions)) {
        return {
            valid: false,
            errors: ["Banca de întrebări trebuie să fie un array."]
        };
    }

    const errors = [];
    const ids = new Set();

    questions.forEach((question, index) => {
        const result = validateQuestion(question);

        result.errors.forEach((error) => {
            errors.push(`Întrebarea ${index + 1}: ${error}`);
        });

        if (question && question.id !== undefined) {
            if (ids.has(question.id)) {
                errors.push(
                    `Întrebarea ${index + 1}: ID duplicat "${question.id}".`
                );
            }

            ids.add(question.id);
        }
    });

    return {
        valid: errors.length === 0,
        errors
    };
}

export {
    validateQuestion,
    validateQuestionBank
};