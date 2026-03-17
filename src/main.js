import './style.css'
import quiz from "./quiz-femmes-scientifiques.json";
import { showQuestion } from './show-question';
import { showCreateQuizz } from './create-quizz';

document.querySelector('#app').innerHTML = `
    <h1>${quiz.title}</h1>
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
document.querySelector('#start').addEventListener('click',showQuestion)
document.querySelector('#create-quizz').addEventListener('click', showCreateQuizz)