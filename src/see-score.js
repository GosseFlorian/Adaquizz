import './style.css'
import { variable } from './variable';
import { acceuil } from './acceuil';
import { getMessageScore } from './message-score';

export function seeScore(quiz){
    let pourcentage = (variable.score / quiz.questions.length) * 100
    let messageScore = getMessageScore(pourcentage)

    document.querySelector('#app').innerHTML =`
        <h2 id="scoreMessage">${messageScore}</h2>
        `
        if(localStorage.getItem("previousScore") === null){
            document.querySelector('#app').innerHTML +=`
            <h3 id="scorePourcentage">${pourcentage}% de bonne réponse</h3>
            <p id="score">Resultats : ${variable.score}/${quiz.questions.length}</p>
            <button id="replayQuizz">Restart</button>
            `
        }else{
            document.querySelector('#app').innerHTML +=`
            <h3 id="scorePourcentage">${pourcentage}% de bonne réponse, ton ancien score était de ${localStorage.getItem("previousScore")}%</h3>
            <p id="score">Resultats : ${variable.score}/${quiz.questions.length}</p>
            <button id="replayQuizz">Restart</button>
        `  
    }
    document.querySelector('#replayQuizz').addEventListener('click', () =>{
        localStorage.removeItem("previousScore")
        localStorage.setItem("previousScore",`${pourcentage}`)
        variable.score = 0
        variable.indexQuestion = 0
        acceuil()
    })
}