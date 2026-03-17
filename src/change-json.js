import './style.css'
import { acceuil } from './acceuil'

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

        const correctInput = responseElements[index].querySelector('.correct-choice');
        let correctIndex = parseInt(correctInput.value) - 1; // ⚠️ index (0-3)



        questions.push({
            question: questionText,
            options: choices,
            correctIndex: correctIndex
            });
    })
    const newQuiz = {
        title: title,
        questions: questions
    };
    const json = JSON.stringify(newQuiz)
    localStorage.setItem(`${newQuiz.title}`, json)
    acceuil()
    // for (let index = 0; index < localStorage.length; index++) {
    //     console.log(localStorage.key(index))
    //     console.log(localStorage.getItem(`${localStorage.key(index)}`))
    // }
}