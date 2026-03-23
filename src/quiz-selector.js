export function quizSelector(){
    for (let i = 1; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        document.querySelector('#choose-quizz').innerHTML +=`
        <input type="radio" name="quizz" value="${key}" id="radio-${key}">
        <label for="radio-${key}">${key}</label><br>
        `
    }
}