import './style.css'
import { variable } from './variable';
import { showQuestion } from './show-question';

export function seeScore(quiz){
    let pourcentage = (variable.score / quiz.questions.length) * 100
    let messageScore = null
    if(pourcentage >= 100){
        messageScore = "Aucune erreur, c'est parfait 😎"
    } else if(pourcentage >= 80){
        messageScore = "C'est bien, tu as fait peu d'erreurs 😉"
    } else if(pourcentage >= 50){
        messageScore = "C'est pas mal, mais tu peux encore t'améliorer 💪"
    } else if(pourcentage < 50 && pourcentage > 0){
        messageScore = "Aïe, tu as beaucoup d'erreurs, tu devrais réessayer 😅"
    } else {
        messageScore = "Oups ! Tu n'as trouvé aucune bonne réponse 😱"
    }
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
        showQuestion(quiz)
    })
}