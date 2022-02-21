let temperatura;

//Função que registra a temperatura e informa a situação periodicamente.
function gerarTemperaturaAleatoria() {
    let sinal = Math.random();

    if (sinal > 0.5)
        temperatura = Math.floor(Math.random() * 3);
    else
        temperatura = Math.floor(Math.random() * (-7));

    //Mensagens informativas sobre temperatura registrada periodicamente.
    if (temperatura <= (-5))
        console.log(temperatura + 'ºC. A temperatura está conforme esperado.');
    else if (temperatura > (-5) && temperatura < 0)
        console.log(temperatura + 'ºC. Atenção: reajustar temperatura.');
    else
        console.log(temperatura + 'ºC. Acertar temperatura urgentemente!');
}

setInterval(gerarTemperaturaAleatoria, 500)