/**/
const botoes = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll(".personagem")

botoes.forEach((botao , indice) => {
    botao.addEventListener("click" , () => {
        desselecionarBotao();
        desselecionarpersonagem(indice);

        botao.classList.add("selecionado");
        personagem[indice].classList.add("selecionado");
    });
});

function desselecionarpersonagem(indice) {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove("selecionado");

    
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove('selecionado');
}
