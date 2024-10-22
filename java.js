<button onclick="reiniciarQuiz()">Reiniciar Quiz</button>
function reiniciarQuiz() {
    var perguntas = document.querySelectorAll('.pergunta');
    perguntas.forEach(function(pergunta) {
        var radios = pergunta.querySelectorAll('input[type="radio"]');
        radios.forEach(function(radio) {
            radio.checked = false;
        });
        var elementoResultado = pergunta.querySelector('p');
        elementoResultado.textContent = '';
    });
}
