let amigos = [];
let nomesAdicionados = document.querySelector('p');
let caixaComNomes = document.getElementById('amigo');


function adicionarAmigo(){
    if(caixaComNomes.value == ""){
        alert("Por favor, insira um nome.")
    }
    else{
        amigos.push(caixaComNomes.value);
        nomesAdicionados.innerHTML += (`<br> ${caixaComNomes.value}`);
        caixaComNomes.value = '';
    }
}


function sortearAmigo(){
    if(amigos.length == 0){
        alert('Nenhum nome foi adicionado.');
    }
    else{
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        let nomeSorteado = amigos[indiceAleatorio];
        nomesAdicionados.style.color = "green";
        nomesAdicionados.innerHTML = (`<strong><br> O amigo secreto é: ${nomeSorteado}</strong>`);
        document.getElementById('botaoAdicionar').setAttribute('disabled',true);
        document.getElementById('botaoAdicionar').style.backgroundColor = 'grey';

    }
}


