import './style.css'
import { variable } from './variable';
import { nextQuestion } from './next-question';
import confetti from 'canvas-confetti';

export function showQuestion(quiz){
    document.querySelector('#app').innerHTML = `
        <h2 id="question">${quiz.questions[variable.indexQuestion].question}</h2>
        <div id="meter-bar">
            <label for="progress">Question ${variable.indexQuestion + 1}/${quiz.questions.length} : </label>
            <meter id="progress" min="0" max="${quiz.questions.length}" value="${variable.indexQuestion + 1}"></meter>
        </div>
        <div id ="responseChoice">
            <button class="choice">${quiz.questions[variable.indexQuestion].options[0]}</button>
            <button class="choice">${quiz.questions[variable.indexQuestion].options[1]}</button>
            <button class="choice">${quiz.questions[variable.indexQuestion].options[2]}</button>
            <button class="choice">${quiz.questions[variable.indexQuestion].options[3]}</button>
        </div>
    `
    const choices = document.querySelectorAll('.choice')
    choices.forEach((element, index) => {
        element.addEventListener('click', () => {
            if(index === quiz.questions[variable.indexQuestion].correctIndex){
                variable.score ++
                confetti()
                document.querySelector('#app').innerHTML += `
                    <p id="goodAnswer">C'est une bonne réponse !</p>
                `
            } else {
                document.querySelector('#app').innerHTML += `
                    <p id="badAnswer">Raté, la réponse était : ${quiz.questions[variable.indexQuestion].options[quiz.questions[variable.indexQuestion].correctIndex]}</p>
                `
            }
            nextQuestion(quiz)
        })
    })
}
