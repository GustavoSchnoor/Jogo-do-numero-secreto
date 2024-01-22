//Criar uma função que exibe "Olá, mundo!" no console.
function exibirFrase() {
    console.log('Ola Mundo!');
}
exibirFrase();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibirNome('Gustavo');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroNumero(num) {
    return num*2;
}
let dobro = dobroNumero(5);
console.log(dobro)

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mostrarMedia(num1, num2, num3) {
    return (num1+num2+num3) / 2; 
}
let mediaTotal = mostrarMedia(5, 7, 11);
console.log(mediaTotal)

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function mostrarMaior(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }    
}
let numMaior = mostrarMaior(13, 12);
console.log(numMaior);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function vezesEleMesmo(number) {
    return number*number ;   
}
let result = vezesEleMesmo(4);
console.log(result);