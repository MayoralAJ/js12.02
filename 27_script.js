//cria referencia aos elementos do html
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");
//cria o ouvinte do evento click
frm.addEventListener("submit", (e)=>{
    //evita o envio do form
    e.preventDefault();
    //captura os dados digitados
    const nome = frm.inNome.value;
    const nota1 = Number (frm.inNota1.value);
    const nota2 = Number (frm.inNota2.value);
    //calcule a méda
    const media = (nota1+nota2)/2;
    //exibe a media usando innerhtml
    resp1.innerHTML = `Média das notas ${media.toFixed(2)}`;
    //exibe as condições
    if(media>=7){
        resp2.innerHTML = `Parabéns ${nome}! Você foi aprovado(a)`;
        resp2.style.color = "blue";
    }else{
        resp2.innerHTML = `Ops ${nome}! Você foi reprovado(a)`;
        resp2.style.color = "red";
    }
})