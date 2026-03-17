import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";

export function changeJson(){
    const title = document.querySelector('#title').value
    const questionElements = document.querySelectorAll('.question')
    const responseElements = document.querySelectorAll('.newQuestion')
    const questions = []

    questionElements.forEach((question, index) => {
        const questionText = question.value
        const choicesInputs = responseElements[index].querySelectorAll('.choice')
        const choices = []

        choicesInputs.forEach(choice => {
            choices.push(choice.value);
        });

        questions.push({question: questionText, choices: choices});
    })
    const newQuiz = {
        title: title,
        questions: questions
    };
    const json = JSON.stringify(newQuiz)
    localStorage.setItem(`${newQuiz.title}`, json)
    console.log(localStorage.getItem(`${newQuiz.title}`))
}