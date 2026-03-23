import { variable } from "./variable";

export function nextQuestion(quiz) {
  if (variable.indexQuestion < quiz.questions.length - 1) {
    variable.indexQuestion++;
    document.querySelector("#app").innerHTML += `
                    <button id="nextQuestion">Continue</button>
                `;
    document.querySelector("#nextQuestion").addEventListener("click", async () => {
        const { showQuestion } = await import("./show-question");
        showQuestion(quiz);
      });
  } else {
    document.querySelector("#app").innerHTML += `
                    <button id="seeScore">Score</button>
                `;
    document.querySelector("#seeScore").addEventListener("click", async () => {
      const { seeScore } = await import("./see-score");
      seeScore(quiz);
    });
  }
}
