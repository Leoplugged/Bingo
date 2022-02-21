//Gerar um número aleatório no JavaScript. 
//E se eu quiser que esse número seja de 1 a 100?
//Vetores

function gerarNumeroAleatorio(){
    setInterval(function(){
        let numero = Math.ceil(Math.random()*2);
        console.log(numero);
    }, 500);
}

function gerarNumeroAleatorio1(){
    setInterval(function(){
        let numero = Math.ceil(Math.random()*100);
        console.log(numero);
    }, 1000);
}

gerarNumeroAleatorio()
gerarNumeroAleatorio1()