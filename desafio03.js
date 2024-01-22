//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

/*IMC = PESO / ALTURA² */
function calculaIMC(valor1, valor2) {
    return resultado = valor1 / (valor2 ** 2);
}

let numeroIMC = calculaIMC(peso, altura);

let peso = 100;
let altura = 1.70;

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

/* Fatorial é quando voce pega um numero e faz ele vezes os seus anteriores. Ex: fatorial de 5! = (5*4*3*2*1) = 120  [OBS: Fatorial de 0 e 1 = 1] */
let fat = 5;
let qualFatorial = calculaFatorial(fat);
console.log(qualFatorial);

function calculaFatorial(numFatorial) {
    // Se o fatorial de 1 ou 0 for escolhido, sabemos que o fatorial de 0 ou 1 é igual a = 1. Por isso coloquei a condição IF.
    if ( numFatorial == 0 || numFatorial == 1) {
        return 1;
    } else {
            // resultado fatorial começando com 1, para que durante o loop FOR, façamos o (resultfatorial) 1 *i(numFatorial) escolhido pela pessoa. Resultando assim em 1xnumFatorial = o próprio numero. Com isso vamos ter o numero, e a cada loop o (i) vai descer 1, por causa do i-- e o resultFatorial sempre sera multiplicado pelo numero anterior. Ficando assim... 5x4x3x2x1
            resultFatorial = 1;
            for (i = numFatorial; i > 1; i--) {
            resultFatorial *= i;                   
            }
            return resultFatorial;
        }
    
}

        /* OUTRA FORMA DE FAZER TAMBEM 
let fat = 5;
let qualFatorial = calculaFatorial(fat);
console.log(qualFatorial);

function calculaFatorial(numFatorial) {
    if ( numFatorial == 0 || numFatorial == 1) {
        return 1;
    } else {
            resultFatorial = 1;
            for (let i = 2; i <= numFatorial; i++) {
                resultFatorial *= i;
            }
            return resultFatorial
        }
    
}        
*/        

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function calculaDolar(valorDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

let dollar = 50;
let reais = calculaDolar(Dollar);
console.log(`${dollar} dólares em reais é R$ ${reais}`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
let alturA = 10;
let largura = 15;
calculaArea(alturA, largura);

function calculaArea(a, l) {
    let area = a*l;
    let perimetro = 2*(a+l)  ; 
    
    console.log(`Area do retangulo é ${area}`);
    console.log(`Perimetro do retangulo é ${perimetro}`);
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
// AREA DO CIRCULO -> A=PI*raio²  | PERIMETRO -> P=2*PI*raio
 
function calcularAreaCirculo(raio) {
    // PI * Raio²
    return Math.PI * (raio**2);   
}

function calcularPerimetroCirculo() {
    // 2 * PI * Raio
    return 2 * Math.PI * raio;
}

let raio = 5;
let areaDoCirculo = calcularAreaCirculo(raio);
let perimetroDoCirculo = calcularPerimetroCirculo(raio);


console.log(`A area do circulo é ${areaDoCirculo}`);
console.log(`O perimetro do circulo é ${perimetroDoCirculo}`);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro ( COM WHILE).
function calculaTabuada(valor) {
    let contador = 1
    while (contador <= 10) {
        let resultadoTabuada = valor * contador;
        console.log(`${valor} x ${contador} = ${resultadoTabuada}`);
        contador++        
    }
}

let tabuadaDo = 5;
calculaTabuada(tabuadaDo);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro (COM FOR).
function mostrarTabuada(num) {
    for ( let i = 1 ; i <= 10 ; i++) {
        let respostaTabuada = num * i;
        console.log (`${num} x ${i} = ${respostaTabuada}`);
    }
}

let tabbuada = 10;
mostrarTabuada(tabbuada);
