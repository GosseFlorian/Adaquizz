export function getMessageScore(myScore) {
  switch (true) {
    case myScore >= 100:
      return "Aucune erreur, c'est parfait 😎";
    case myScore >= 80:
      return "C'est bien, tu as fait peu d'erreurs 😉";
    case myScore >= 50:
      return "C'est pas mal, mais tu peux encore t'améliorer 💪";
    case myScore > 0:
      return "Aïe, tu as beaucoup d'erreurs, tu devrais réessayer 😅";
    default:
      return "Oups ! Tu n'as trouvé aucune bonne réponse 😱";
  }
}
