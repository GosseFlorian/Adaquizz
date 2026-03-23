import { showQuestion } from './show-question';

export function startQuizz(){
    const selected = document.querySelector('input[name="quizz"]:checked');
    if (!selected) {
        alert("Choisis un quiz !");
        return;
    }
    const selectedKey = selected.value;
    const quiz = JSON.parse(localStorage.getItem(selectedKey));
    showQuestion(quiz);
}