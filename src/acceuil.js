import './style.css'
import { showCreateQuizz } from './create-quizz';
import { startQuizz } from './start-quiz';

export function acceuil(){
    document.querySelector('#app').innerHTML = `
    <h1>Adaquizz</h1>
    <h2>choisi ton quizz :</h2>
    <div id="choose-quizz"></div>
    <button id="start">Démarrer</button>
    <button id="create-quizz">New quizz</button>
    `
    for (let i = 1; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        document.querySelector('#choose-quizz').innerHTML +=`
        <input type="radio" name="quizz" value="${key}" id="radio-${key}">
        <label for="radio-${key}">${key}</label><br>
        `
    }
    
    document.querySelector('#start').addEventListener('click', startQuizz)
    
    document.querySelector('#create-quizz').addEventListener('click', showCreateQuizz)
}