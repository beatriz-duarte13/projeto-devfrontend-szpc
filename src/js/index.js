const listaSelecaoFrontends = document.querySelectorAll(".frontend");

listaSelecaoFrontends.forEach(frontend => {
    frontend.addEventListener("click", () => {
        esconderCartaoFrontend();

        const idFrontendSelecionado = mostrarCartaoFrontendSelecionado(frontend);

        desativarFrontendNaListagem();

        ativarFrontendSelecionadoNaListagem(idFrontendSelecionado);

        if (window.innerWidth < 820) {
            moverParaCartaoSelecionado(idFrontendSelecionado);
        }
    });
});

function ativarFrontendSelecionadoNaListagem(idFrontendSelecionado) {
    const frontendSelecionadoNaListagem = document.getElementById(idFrontendSelecionado);
    frontendSelecionadoNaListagem.classList.add("ativo");
}

function desativarFrontendNaListagem() {
    const frontendAtivoNaListagem = document.querySelector(".ativo");
    frontendAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoFrontendSelecionado(frontend) {
    const idFrontendSelecionado = frontend.attributes.id.value;
    const idDoCartaoFrontendParaAbrir = "cartao-" + idFrontendSelecionado;
    const cartaoFrontendParaAbrir = document.getElementById(idDoCartaoFrontendParaAbrir);
    cartaoFrontendParaAbrir.classList.add("aberto");
    return idFrontendSelecionado;
}

function esconderCartaoFrontend() {
    const cartaoFrontendAberto = document.querySelector(".aberto");
    cartaoFrontendAberto.classList.remove("aberto");
}

function moverParaCartaoSelecionado(idFrontendSelecionado) {
    const cartaoSelecionado = document.getElementById("cartao-" + idFrontendSelecionado);

    cartaoSelecionado.scrollIntoView({
        behavior: "smooth",
        block: "start", 
        inline: "nearest"
    });

}

