function fazrodar(div_clicada){
    if(div_clicada.classList.contains("fazrodar"))
        div_clicada.classList.remove("fazrodar");
    else
        div_clicada.classList.add("fazrodar");
}