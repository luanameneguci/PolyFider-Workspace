/* Aplica ou remove a classe de css que faz rodar */
function fazrodar(div_clicada){
    if(div_clicada.classList.contains("fazrodar"))
        div_clicada.classList.remove("fazrodar");
    else
        div_clicada.classList.add("fazrodar");
}

/* Esconde a imagem clicada*/
function fazdesaparecer(elemento) {
   elemento.style.display = 'none';
}