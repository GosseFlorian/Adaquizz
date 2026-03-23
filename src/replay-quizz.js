import { acceuil } from './acceuil';
import { variable } from './variable';

export function replayQuiz(myPourcentage) {
  localStorage.removeItem("previousScore");
  localStorage.setItem("previousScore", `${myPourcentage}`);
  variable.score = 0;
  variable.indexQuestion = 0;
  acceuil();
}
