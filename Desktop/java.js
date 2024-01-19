/* Esconde a imagem clicada*/
function fazdesaparecer(elemento) {
    elemento.style.display = 'none';
 }

 function mostrarautores(){
    if(document.getElementById("autores").style.display=="none")
    {
        document.getElementById("autores").style.display="block";
    }else
    document.getElementById("autores").style.display="none";
}