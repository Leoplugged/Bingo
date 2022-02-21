//Gerar um número aleatório entre 1 e 75

function gerarNumeroAleatorio2(min, max){
    return Math.ceil(Math.random()*(max - min));
}

//Gera repetição por intervalo. Há outro melhor a fazer. Veja mais abaixo.
//setInterval(function(){
//    let numeroAleatorio = gerarNumeroAleatorio2(1,75);
//    console.log(numeroAleatorio);
//}, 1000);

let cartela = [];
let pares = [];
let impares = [];

//Loop de repetição = laço de repetição

for(let i = 0; i < 25; i++){
    let numeroAleatorio = gerarNumeroAleatorio2(1,75);
    if(cartela.indexOf(numeroAleatorio) === -1){
        cartela.push(numeroAleatorio);
        if(numeroAleatorio % 2 === 0)
            pares.push(numeroAleatorio);
        else
            impares.push(numeroAleatorio);
        }
    }

console.log("Cartela", cartela.sort(function(a, b){return a - b}));
//console.log("Pares", pares.sort(function(a, b){return a - b}));
//console.log("Cartela", impares.sort(function(a, b){return a - b}));

//Cria função de sorteio

let numerosSorteados = [];

function sorteio(){
    let intervalo =setInterval(function(){
        let numeroSorteado = gerarNumeroAleatorio2(1,75);
        let numeroExiste = numerosSorteados.indexOf(numeroSorteado) !== -1;

        if(numeroExiste === false){
             numerosSorteados.push(numeroSorteado);
        }else{
            while(numeroExiste === true){
                numeroSorteado = gerarNumeroAleatorio2(1,75);
                numeroExiste = numerosSorteados.indexOf(numeroSorteado) !== -1;
                if(numeroExiste === false);{
                    numerosSorteados.push(numeroSorteado);
                }
            }
        }

        conferirCartela(intervalo);

        console.log("Números Sorteados", numerosSorteados);
        console.log("Tamanho", numerosSorteados.length);

        if(numerosSorteados.length === 75)
            clearInterval(intervalo);       
    },1000)
}

function conferirCartela(intervalo){
    if(numerosSorteados.length < 25)
        return false;
    
    let ganhouBingo = true;
    let quantidadeNumerosSorteados = 0;

    numerosSorteados.forEach(function(sorteado){
        cartela.forEach(function(meuNumero){
            if(sorteado == meuNumero){
                ganhouBingo = true;
                quantidadeNumerosSorteados++;
            }
        })
    })

    if(quantidadeNumerosSorteados == cartela.length){
        console.log("Parabéns! Você ganhou o bingo!");
        clearInterval(intervalo);
    }else{
        console.log("Você ainda não chegou lá! Faltam " + (cartela.length - quantidadeNumerosSorteados) + " números.");
    }
}

sorteio();