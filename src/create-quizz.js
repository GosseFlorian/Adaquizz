import './style.css'
import { storageNewQuizz } from './storage-new-quizz'

export function showCreateQuizz(){
document.querySelector('#app').innerHTML = `
    <h1>Creation d'un nouveau quizz !</h1>
    <label for="title">Titre du nouveau quizz :</label>
    <input type="text" id="title"/>
    <label for="number-question">Nombre de question (1 à 10) :</label>
    <input type="number" id="number-question" min="1" max="10"/>
    <div id="NewQuestionAndChoice"></div>
    <button id="CreateNewQuizz">Valider</button> 
    `

    let numberQuestion = document.querySelector('#number-question')
    let NewQuestionAndChoice = document.querySelector('#NewQuestionAndChoice')

    numberQuestion.addEventListener("input", () => {
        let number = numberQuestion.value;

        NewQuestionAndChoice.innerHTML = "";

        for(let i = 1; i <= number; i++){
            NewQuestionAndChoice.innerHTML += `
            <input class="question" type="text" placeholder="Nom de la question ${i}"/>
                <div class="newQuestion">
                    <input class="choice" type="text" placeholder="Reponse 1"/>
                    <input class="choice" type="text" placeholder="Reponse 2"/>
                    <input class="choice" type="text" placeholder="Reponse 3"/>
                    <input class="choice" type="text" placeholder="Reponse 4"/>
                    <label for="correct-choice">Bonne réponse ?</label>
                    <input type="number" class="correct-choice" min="1" max="4"/>
                </div>
            `
        }
    })
    document.querySelector('#CreateNewQuizz').addEventListener('click', async() =>{
            storageNewQuizz()
    })
}