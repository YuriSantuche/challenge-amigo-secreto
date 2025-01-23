let amigos = [];
let nomesAdicionados = document.querySelector('p');
let caixaComNomes = document.getElementById('amigo');


function adicionarAmigo(){
    if(caixaComNomes.value == ""){
        alert("Por favor, insira um nome.")
    }
    else{
        amigos.push(caixaComNomes.value);
        nomesAdicionados.innerHTML += (`${caixaComNomes.value} `);
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
        console.log(nomeSorteado);
        nomesAdicionados.innerText = `O Sorteado foi ${nomeSorteado}`;

    }
}


