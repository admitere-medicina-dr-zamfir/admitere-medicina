/**
 * Atlas BioChem / BioBank
 * Manager central pentru banca de întrebări
 */

import { validateQuestion, validateQuestionBank } from "./question-validator.js";

/**
 * Colecția centrală de întrebări Atlas.
 */
const questionBank = [];

/**
 * Adaugă o singură întrebare în bancă.
 *
 * @param {Object} question
 * @returns {Object}
 */
function addQuestion(question) {
    const validation = validateQuestion(question);

    if (!validation.valid) {
        throw new Error(
            `Întrebarea nu este validă:\n${validation.errors.join("\n")}`
        );
    }

    const duplicate = questionBank.some(
        (existingQuestion) => existingQuestion.id === question.id
    );

    if (duplicate) {
        throw new Error(
            `Există deja o întrebare cu ID-ul "${question.id}".`
        );
    }

    questionBank.push(question);

    return question;
}

/**
 * Adaugă mai multe întrebări simultan.
 *
 * @param {Object[]} questions
 * @returns {Object[]}
 */
function addQuestions(questions) {
    const validation = validateQuestionBank(questions);

    if (!validation.valid) {
        throw new Error(
            `Colecția de întrebări nu este validă:\n${validation.errors.join("\n")}`
        );
    }

    const existingIds = new Set(
        questionBank.map((question) => question.id)
    );

    questions.forEach((question) => {
        if (existingIds.has(question.id)) {
            throw new Error(
                `Există deja o întrebare cu ID-ul "${question.id}".`
            );
        }

        existingIds.add(question.id);
    });

    questionBank.push(...questions);

    return questions;
}

/**
 * Returnează toate întrebările.
 */
function getAllQuestions() {
    return [...questionBank];
}

/**
 * Găsește o întrebare după ID.
 */
function getQuestionById(id) {
    return questionBank.find(
        (question) => question.id === id
    ) ?? null;
}

/**
 * Filtrează întrebările după disciplină.
 */
function getQuestionsBySubject(subject) {
    return questionBank.filter(
        (question) => question.subject === subject
    );
}

/**
 * Filtrează întrebările după capitol.
 */
function getQuestionsByChapter(chapter) {
    return questionBank.filter(
        (question) => question.chapter === chapter
    );
}

/**
 * Filtrează întrebările după nivelul de dificultate.
 */
function getQuestionsByDifficulty(difficulty) {
    return questionBank.filter(
        (question) => question.difficulty === difficulty
    );
}

/**
 * Numărul total de întrebări existente în bancă.
 */
function getQuestionCount() {
    return questionBank.length;
}

export {
    addQuestion,
    addQuestions,
    getAllQuestions,
    getQuestionById,
    getQuestionsBySubject,
    getQuestionsByChapter,
    getQuestionsByDifficulty,
    getQuestionCount
};