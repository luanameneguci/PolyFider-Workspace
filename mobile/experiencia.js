function Afunda1(){
    document.getElementById("parte1").style.display="none";
    document.getElementById("resultado1").style.display="block";
    document.getElementById("teste1").style.display="none";
}
function Flutua1(){
    document.getElementById("copo1").style.display="none";
    document.getElementById("copo1flutua").style.display="block";
    document.getElementById("parte2").style.display="block";
    document.getElementById("teste1").style.display="none";
    document.getElementById("teste2").style.display="block";
}
function Afunda2(){
    document.getElementById("parte1").style.display="none";
    document.getElementById("parte2").style.display="none";
    document.getElementById("resultado2").style.display="block";
    document.getElementById("teste2").style.display="none";
}
function Flutua2(){
    document.getElementById("copo2").style.display="none";
    document.getElementById("copo2flutua").style.display="block";
    document.getElementById("parte3").style.display="block";
    document.getElementById("teste2").style.display="none";
    document.getElementById("teste3").style.display="block";
    document.getElementById("afunda").disabled=true;
    document.getElementById("naoafunda").disabled=true;
}
function Afunda3(){
    document.getElementById("parte1").style.display="none";
    document.getElementById("parte2").style.display="none";
    document.getElementById("parte3").style.display="none";
    document.getElementById("resultado3").style.display="block";
    document.getElementById("teste3").style.display="none";
}
function Flutua3(){
    document.getElementById("copo3").style.display="none";
    document.getElementById("copo3flutua").style.display="block";
    document.getElementById("parte4").style.display="block";
    document.getElementById("teste3").style.display="none";
    document.getElementById("teste4").style.display="block";
    document.getElementById("afunda2").disabled=true;
    document.getElementById("naoafunda2").disabled=true;
}
function Afunda4(){
    document.getElementById("parte1").style.display="none";
    document.getElementById("parte2").style.display="none";
    document.getElementById("parte3").style.display="none";
    document.getElementById("parte4").style.display="none";
    document.getElementById("resultado4").style.display="block";
    document.getElementById("resultado5").style.display="none";
    document.getElementById("teste4").style.display="none";
}
function Flutua4(){
    document.getElementById("parte1").style.display="none";
    document.getElementById("parte2").style.display="none";
    document.getElementById("parte3").style.display="none";
    document.getElementById("parte4").style.display="none";
    document.getElementById("resultado5").style.display="block";
    document.getElementById("resultado4").style.display="none";
    document.getElementById("teste4").style.display="none";
}
imagens=["graficoPETmobile.png","graficoPVCmobile.png","graficoPSmobile.png","graficoHDPEmobile.png","graficoLDPEeLLDPEmobile.png","graficoPPmobile.png"]
titulos=["Polietileno teraftalato (PET)","Policloreto de vinilo (PVC)","Poliestireno(PS)","Polietileno de alta densidade(HDPE)","Polietileno de baixa densidade e Polietileno de baixa densidade linear(LDPE e LLDPE)","Polipropileno(PP)"]

function MostraImagemSeguinte(x,id_imagem,id_titulo){
    //nº da imagem atual 
    index_imagem=Number(document.getElementById(id_titulo).dataset.index);
    //passar para a próxima imagem 
    index_imagem += x;
    //verificar se os limites do array são respeitados 
    if (index_imagem<0)
        index_imagem=imagens.length-1;
    if (index_imagem>=imagens.length)
        index_imagem=0;
    //Mostrar imagem
    document.getElementById(id_imagem).src="../imgmobile/graficosmobile/"+imagens[index_imagem];
    //Mostrar titulo
    document.getElementById(id_titulo).innerText=titulos[index_imagem];
    //guardar o nº da imagem atual
    document.getElementById(id_titulo).dataset.index=index_imagem;

}
function Flutua_1(){
    document.getElementById("copo1").style.display="none";
    document.getElementById("parte1").style.display="block";
    document.getElementById("copo1flutua").style.display="block";
    document.getElementById("parte2").style.display="block";
    document.getElementById("teste2").style.display="block";
    document.getElementById("resultado1").style.display="none";
}
function Flutua_2(){
    document.getElementById("parte1").style.display="block";
    document.getElementById("copo2").style.display="none";
    document.getElementById("parte2").style.display="block"
    document.getElementById("copo2flutua").style.display="block";
    document.getElementById("parte3").style.display="block";
    document.getElementById("teste3").style.display="block";
    document.getElementById("resultado2").style.display="none";
}
function Flutua_3(){
    document.getElementById("parte1").style.display="block";
    document.getElementById("parte2").style.display="block";
    document.getElementById("copo3").style.display="none";
    document.getElementById("parte3").style.display="block";
    document.getElementById("copo3flutua").style.display="block";
    document.getElementById("parte4").style.display="block";
    document.getElementById("teste4").style.display="block";
    document.getElementById("resultado3").style.display="none";
}
