import "./style.css";
import { variable } from "./variable";
import { getMessageScore } from "./message-score";
import { replayQuiz } from "./replay-quizz";
import { checkPreviousScore } from "./check-previous-score";

export function seeScore(quiz) {
  let pourcentage = (variable.score / quiz.questions.length) * 100;
  let messageScore = getMessageScore(pourcentage);

  document.querySelector("#app").innerHTML = `
        <h2 id="scoreMessage">${messageScore}</h2>
        `;
  checkPreviousScore(pourcentage, quiz);

  document.querySelector("#replayQuizz").addEventListener("click", async () => {
    replayQuiz(pourcentage);
  });
}
