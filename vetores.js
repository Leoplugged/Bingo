//Vetor = Array
let vetor = [1,2,3,4,5]

let numero = 10

let nome =  "dante"

let soma = function soma(a, b){
        return a+b;
}

vetor.push(numero);
vetor.push(nome);
vetor.push(soma);

console.log(vetor);

//Índice do vetor. Na programação, 0 é sempre a contagem inicial. 
//Ou seja, o 0 do vetor é 1, e 4 é 5.
console.log(vetor[7]);

//.pop() retira o último parametro de uma array
vetor.pop();
vetor.pop();

console.log(vetor);

