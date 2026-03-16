import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";
import { showQuestion } from './show-question';
import { showCreateQuizz } from './createQuizz';

document.querySelector('#app').innerHTML = `
    <h1>${quiz.title}</h1>
    <button id="start">Démarrer</button>
    <button id="create-quizz">New quizz</button>
    `

let json = JSON.stringify(quiz)
localStorage.setItem(`${quiz.title}`,json)
document.querySelector('#start').addEventListener('click',showQuestion)
document.querySelector('#create-quizz').addEventListener('click', showCreateQuizz)