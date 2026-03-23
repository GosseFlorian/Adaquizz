import { variable } from "./variable";

export function checkPreviousScore(myPourcentage, quiz) {
  if (localStorage.getItem("previousScore") === null) {
    document.querySelector("#app").innerHTML += `
                <h3 id="scorePourcentage">${myPourcentage}% de bonne réponse</h3>
                <p id="score">Resultats : ${variable.score}/${quiz.questions.length}</p>
                <button id="replayQuizz">Restart</button>
                `;
  } else {
    document.querySelector("#app").innerHTML += `
                <h3 id="scorePourcentage">${myPourcentage}% de bonne réponse, ton ancien score était de ${localStorage.getItem("previousScore")}%</h3>
                <p id="score">Resultats : ${variable.score}/${quiz.questions.length}</p>
                <button id="replayQuizz">Restart</button>
            `;
  }
}
