import "./style.css";
import { storageNewQuizz } from "./storage-new-quizz";
import { numberQuestionNewQuiz } from "./number-question-new-quiz";

export function showCreateQuizz() {
  document.querySelector("#app").innerHTML = `
    <h1>Creation d'un nouveau quizz !</h1>
    <label for="title">Titre du nouveau quizz :</label>
    <input type="text" id="title"/>
    <label for="number-question">Nombre de question (1 à 10) :</label>
    <input type="number" id="number-question" min="1" max="10"/>
    <div id="NewQuestionAndChoice"></div>
    <button id="CreateNewQuizz">Valider</button> 
    `;

  let numberQuestion = document.querySelector("#number-question");
  let createNewQuizz = document.querySelector("#CreateNewQuizz");

  numberQuestion.addEventListener("input", numberQuestionNewQuiz);
  createNewQuizz.addEventListener("click", storageNewQuizz);
}
