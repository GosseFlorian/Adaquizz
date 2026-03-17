import './style.css'
import { showQuestion } from './show-question';
import { showCreateQuizz } from './create-quizz';

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
    
    document.querySelector('#start').addEventListener('click',() => {
        const selected = document.querySelector('input[name="quizz"]:checked');
        if (!selected) {
            alert("Choisis un quiz !");
            return;
        }
        const selectedKey = selected.value;
        const quiz = JSON.parse(localStorage.getItem(selectedKey));
        showQuestion(quiz);
    })
    
    document.querySelector('#create-quizz').addEventListener('click', showCreateQuizz)
}