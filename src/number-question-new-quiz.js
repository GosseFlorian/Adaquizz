export function numberQuestionNewQuiz() {
  let numberQuestion = document.querySelector("#number-question");
  let number = numberQuestion.value;
  let NewQuestionAndChoice = document.querySelector('#NewQuestionAndChoice')
  NewQuestionAndChoice.innerHTML = "";

  for (let i = 1; i <= number; i++) {
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
            `;
  }
}
