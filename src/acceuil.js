import './style.css'
import { showCreateQuizz } from './create-quizz';
import { startQuizz } from './start-quiz';
import { quizSelector } from './quiz-selector';

export function acceuil(){
    document.querySelector('#app').innerHTML = `
    <h1>Adaquizz</h1>
    <h2>choisi ton quizz :</h2>
    <div id="choose-quizz"></div>
    <button id="start">Démarrer</button>
    <button id="create-quizz">New quizz</button>
    `
    quizSelector()
    document.querySelector('#start').addEventListener('click', startQuizz)
    document.querySelector('#create-quizz').addEventListener('click', showCreateQuizz)
}