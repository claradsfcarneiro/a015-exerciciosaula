/*EXERCÍCIO 1
Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.
Quando digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números indicados.*/

// Versão sem array

/*
let num = Number(prompt("Digite um número"));
let soma = num;
console.log("Números inseridos:");
console.log(num)
while (num != 0) {
    num = Number(prompt("Digite um número"));
    console.log(`${num}`);
    soma = soma + num;
}
console.log(`Soma dos números: ${soma}`);
*/


//Versão com array

/* 
let num = Number(prompt("Digite um número"));
var numeros = [];
numeros.push(num);
let soma = 0;

while (num != 0) {
    num = Number(prompt("Digite um número"));
    numeros.push(num);
}

for (var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(`Números: ${numeros}`);
console.log(`Soma dos números: ${soma}`);
*/

/*EXERCÍCIO 2
Vamos escrever um programa que recebe um número por input do usuário.
Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa. 
Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado. 
*/

/*
num = Number(prompt("Digite um número"));

for (let i = 0; i < num; i++) {
    console.log(i);
}
*/

/*EXERCÍCIO 3
Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha.
"O número do índice ${indice} é ${numero}"
*/

/*
let numeros = [1,3,5,7,9,11,13];

for (let i = 0; i < numeros.length; i++) {
    console.log(`O número do índice ${i} é ${numeros[i]}`);
}
*/

/*EXERCÍCIO 4
Utilizando um laço while, escreva um código que recebe um prompt esperando seu tipo de usuário. O tipo de usuário é representado pelas letras abaixo:
"A": Administrados
"B": Usuário comum
"C": Usuário assinante
Enquanto o valor for diferente da letra que representa "Administrador", o laço deve se repetir, exibindo a mensagem: "Acesso negado."
Quando o valor for igual ao da letra que representa "Administrador", o laço deve parar e a mensagem "Boas-vindas, admin!" deve ser impressa.
*/

/*
let tipoUsuario = prompt("Digite a letra que representa seu tipo de usuário, sendo que \"A\" representa administrador, \"B\" usuário comum e \"C\" usuário assinante.").toUpperCase();
while (tipoUsuario != "A") {
    console.log("Acesso negado.");
    tipoUsuario = prompt("Digite a letra que representa seu tipo de usuário, sendo que \"A\" representa administrador, \"B\" usuário comum e \"C\" usuário assinante.").toUpperCase();
}
console.log("Boas-vindas, admin!");
*/

/*EXERCÍCIO 5
Escreva, utilizando o laço for, um programa que escreva a tabuada do 2.
*/

/*
for (i = 0; i <= 10; i++) {
    console.log(`${i} x 2 = ${i * 2}`);
}
*/

/*EXERCÍCIO 6
Crie um laço for que recebe um array de strings, e imprima no console a string em caixa alta.
*/

/*
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for (let i = 0; i < maioresPaises.length; i++) {
    console.log(maioresPaises[i].toLocaleUpperCase());
}
*/