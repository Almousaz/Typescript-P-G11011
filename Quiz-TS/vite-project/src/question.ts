export interface Question {
    question: string;
    options: string[];
    answer: string;
}

export const questions: Question[] = [
    {
        question: "What is TypeScript?",
        options: ["A JavaScript library", "A CSS framework", "A superset of JavaScript", "A database system"],
        answer: "A superset of JavaScript"
    },
    {
        question: "Which of the following is NOT a JavaScript framework?",
        options: ["React", "Vue", "Angular", "Python"],
        answer: "Python"
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["let", "const", "var", "function"],
        answer: "const"
    }
];
