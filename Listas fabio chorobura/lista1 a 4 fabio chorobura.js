//1. Crie um código que consiga imprimir os tipos de 3 variáveis diferentes;

var nome = ['fabio'];
var altura = 1.75;
var peso = 55;

console.log('Meu nome é '+ nome, ', minha Altura é ' + altura, ', meu Peso é ' + peso);


//////////////////////////////////////////////////////////////////////////////////////////


//2. Crie um código capaz de calcular a raiz quadrada de um número;

var numero1 = prompt('Digite um numero para para calcularmos a Raiz.');
Math.sqrt(+ numero1); 


///////////////////////////////////////////////////////////////////////////////////////////


//3. Crie um código capaz de calcular a potência 2 de um número; 

var base = prompt('Digite a Base:');
var expoente = prompt('Digite o Expoente');
Math.pow(base, expoente);


///////////////////////////////////////////////////////////////////////////////////////////


//4. Crie um código que calcule a hipotenusa através do teorema de pitágoras;

var ca = prompt('Digite o Cateto Adjacente:');
var co = prompt('Digite o valor do Cateto Oposto:');
Math.hypot(ca,co);

///////////////////////////////////////////////////////////////////////////////////////////


//5. Crie um código capaz de calcular a fórmula de bhaskara;

var a = '26';
var b = '25';
var c = '27';

let delta = Math.pow(b, 2) - 4 * a * c;

let x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
let x2 = ((-b) - Math.sqrt(delta)) / (2 * a);

console.log(NaN == false);

if (!x1) {
    console.log("x1 is undefined")
} else {
    console.log("x1 = " + x1)
}
if (!x2) {
    console.log("x2 is undefined")
} else {
    console.log("x2 = " + x1)
}

console.log({
    "result": {
        "x1": x1,
        "x2": x2
    }
})

///////////////////////////////////////////////////////////////////////////////////////

// 6 Crie um objeto json com um ítem do tipo array, e acesse a segunda posição;

console.log ("\nExercicio 6")
let a = [123,364,37,54,1]
let soma = 0
for (let i = 0; i < a.length; i++) {
    soma += a[i];
}
console.log("Soma = "+soma+'\nMédia = '+soma/5)

/////////////////////////////////////////////////////////////////////////////////////////

//7. Crie um array de string e imprima a posição 2;
let nc = ['Fabio', 'Chorobura'];
console.log(nc[1]);


/////////////////////////////////////////////////////////////////////////////////////////

//8. Crie um array de string e concatene o valor da posição 2 com a posição 3

var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);
console.log(nums);


//////////////////////////////////////////////////////////////////////////////////////////

//9. Crie um array e remova o índice 

var nome = [1, 2, 3, 4];
removed = nome.splice(2,0);

console.log(nome);


//////////////////////////////////////////////////////////////////////////////////////////

//10. Crie um array e remova o primeiro ítem da lista;

var frutas = ['Maçã', 'Banana'];
var primeiro = frutas.shift();
console.log(frutas);


/////////////////////////////////////////////////////////////////////////////////////////////

//11. Crie um array e adicione um valor no final do array; 

var frutas = ['Maçã', 'Banana'];
var adicionar = frutas.push('Laranja');
console.log(frutas);


//////////////////////////////////////////////////////////////////////////////////////////////

//12 Crie um código utilizando a estrutura switch case e imprima qual estado corresponde
//a sigla informada. Exemplo: RO corresponde a Rondônia, SP corresponde à São
//Paulo e ZT não corresponde a nenhum estado;

let estado = 'sp';

switch (estado) {
    case 1:
        estado = "rondonia";
        break;
    case 2:
        estado = "saopaulo";
        break;
    case 3:
        estado = "nenhum";
        break;
        
		default:
        nomeestado = "nao existe";
}
var nomeestado = prompt('Digite uma sigla:');

/////////////////////////////////////////////////////////////////////////////////////////////////





////////////////        ---             Exercícios - Parte 2     ---     /////////////////////////





//////////////////////////////////////////////////////////////////////////////////////////////////


//1. Escreva um programa para ler 2 valores (considere que não serão informados valores
//iguais) e escrever o maior deles.


var num1 = prompt('Digite um numero: ')
var num2 = prompt('Digite outro numero: ')
var num3 = prompt('Digite mais um numero: ')

if(num1 > num2)
if(num1 > num3)
alert(`O ${num1} é o maior!!`)
else
alert(`O ${num3} é o maior!!`)
else
if(num2 > num3)
alert(`O ${num2} é o maior!!`)
else
alert(`O ${num3} é o maior!!`)


//////////////////////////////////////////////////////////////////////////////////////////////////


//2. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma
//mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o
//mês em que ela nasceu).


var votar = "2006";

if (votar >= "pode") {
    mensagem = "Pode votar ";
}

if (votar >= "2006") {
    mensagem = "Pode votar";
} else {
    mensagem = "Não pode votar";
}
var votar = prompt('Digite o ano de nascimento:');


///////////////////////////////////////////////////////////////////////////////////////////////////////

/* 3. Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. A
senha válida é o número 1234. Devem ser impressas as seguintes mensagens:
ACESSO PERMITIDO caso a senha seja válida.
ACESSO NEGADO caso a senha seja inválida.*/


const input = 1234
if (input == 1234){
    console.log("A senha é valida! ")
    }
else{
    console.log("A senha é inválida!")}

    ////////////////////////////////////////////////////////////////////////////////////////////////////

/* 4. As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25
se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const nmacas = 10
let preco
if (nmacas >= 12){
    preco = 0.25
}
else{
    price = 0.30
}
console.log("O valor total da compra é de R$" + nmacas * preco);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*5. Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores
iguais) e escrevê-los em ordem crescente.*/


const a = 2;
const b = 20;
const c = 21;
let pri, seg, ter
if(a > b & b > c){
    pri = a
    seg = b
    ter = c
}
else if(a > c & c > b){
    pri = a
    seg = c
    ter = b
}
else if(b > a & a > c){
    pri = b
    seg = a
    ter = c
}
else if(b > c & c > a){
    pri = b
    seg = c
    ter = a
}
else if(c > a & a > b){
    pri = c
    seg = a
    ter = b
}
else if(c > b & b > a){
    pri = c
    seg = b
    ter = a
}
console.log(pri +'\n'+seg+'\n'+ter)

//////////////////////////////////////////////////////////////////////////////////////////////////////////


/*6. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1:feminino
2:masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal,
utilizando as seguintes Fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7
*/

// Sexo Feminino : 1 -- Sexo Masculino : 2
const sexo = 1
const altura = 1.70
let peso;
switch (sexo){
    case 1:
        peso = (62.1 * altura)-44.7
    break;
    case 2:
        peso = (72.7 * altura)-58
    break;

}
console.log('Seu peso ideal é '+peso.toFixed(2)+'KG.' )




//------------------------------------- Exercício 7 & 8  ---------------------------------------------------


const lados = 4
const tam = 15
if (lados == 3 || lados == 4 || lados == 5){
    let area
    switch(lados){
        case 3:
            area = (tam*tam)/2
            console.log('A área do triângulo é = ' + area + 'cm².')
            break
    
        case 4:
            area = (tam*tam)
            console.log('A área do quadrado é = ' + area + 'cm².')
            break
    
        case 5:
            console.log('Um polígono de 5 lados se chama Pentágono.')
            break
    }
}
else if (lados > 5){
    console.log('Polígono não identificado.')
}
else {console.log('Não é um polígono.')}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
9. Escreva um programa para ler 3 valores inteiros e escrever o maior deles. Considere que
o usuário não informará valores iguais.
 
*/

const p = 4
const z = 23
const e = 143
if (p > z & p > e){
    console.log('O número '+ p + ' é maior que '+z+' e '+e+'.')
}
else if(z > p & z > e){
    console.log('O número '+ z + ' é maior que '+p+' e '+e+'.')
}
else if(e > z & e > p){
    console.log('O número '+ e + ' é maior que '+p+' e '+z+'.')
}

/*
10. Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
Equilátero, Isósceles ou Escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.
*/

const lado1 = 4
const lado2 = 3
const lado3 = 4
if(lado1 == lado2 & lado1 == lado3){
    console.log('É um triângulo equilátero')
}
else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log('É um triângulo isócele')
}
else if(lado1 != lado2 & lado1 != lado3 & lado2 != lado3){
    console.log('É um triângulo escaleno')
}
else{console.log('Não é um triângulo.')}


///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
11. Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o
triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
*/

const ladoA = 90
const ladoB = 90
const ladoC = 90
if(ladoA == 90 || ladoB == 90 || ladoC == 90){
    console.log('É um triângulo Retângulo')
}
else if(ladoA > 90 || ladoB > 90 || ladoC > 90){
    console.log('É um triângulo Obtusângulo')
}
else if(ladoA < 90 & ladoB < 90 & ladoC < 90){
    console.log('É um triângulo escaleno')
}
else{console.log('Não é um triângulo.')}



//////////////////////////////////////////////////////////////////////////////////////////////////////

/*
/////////////////////////////      ----      Exercícios - Parte 3  ---    ///////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
1. Faça um programa que leia e valide as seguintes informações:Dica: se sua variável é **texto**, o tamanho dela está armazenado em: texto.length
    1. Nome: maior que 3 caracteres;
    2. Idade: entre 0 e 150;
    3. Salário: maior que zero;
    4. Sexo: 'f' ou 'm';
    5. Estado Civil: 's', 'c', 'v', 'd';
*/

var nome ="";
var nome = prompt ('Digite seu nome'+nome);
if (nome.length >= 4) {
         console.log("Nome Registrado Com Sucesso!");
} else {
         console.log("Nome Inferior a 4 Digitos!");
         var nome = prompt ('Digite Um nome Valido!'+nome);
}
var Idade ="";
var Idade = prompt ('Digite sua Idade'+Idade);
if (Idade.length  <= 150) {
         console.log("Idade Registrada Com Sucesso!");
} else {
         console.log("Idade Inferior a 0 ou Superior a 150!");
         var Idade = prompt ('Digite Uma Idade Valida!'+idade);
}
var salario = "";
var salario = prompt('Qual Seu Salario?');
if(salario.length <= 0){
    console.log('Salario Registrado com sucesso');
}
else {
        console.log('Salario inferior a 0!');
        var salario = prompt ('Digite Uma Idade Valida!'+salario);
}
var sexo1 = "";
var sexo1 = prompt('Qual Seu Sexo? *Apenas F e M !');
if(sexo1.length  ){
    console.log('Sexo Registrado com sucesso');
}
else {
        console.log('Sexo Diferente De F ou M !');
        var sexo1 = prompt ('Digite Um Sexo Valido!'+sexo1);
}
var ec = "";
var ec = prompt('Qual Seu Estado Civil? apenas : s, c, v, d!');
if(ec.length <= s ){
    console.log('Estado Civil Registrado com sucesso');
}
else {
        console.log('Estado Civil Diferente De s, c, v, d!');
        var ec = prompt ('Digite Um Estdo Civil Válido'+ec);
}
console.log (nome + Idade + sexo1 + ec);



///////////////////////////////////////////////////////////////////////////////////////

/*
2 - Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a 
população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número 
de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

*/
console.log ("\nExercicio 2")
let pais1 = 80000
let pais2 = 200000
let anos = 0
do {
    pais1 = pais1 * 0.03 + pais1
    pais2 = pais2 * 0.015 + pais2
    anos = anos + 1
}
while (pais1 <= pais2)
console.log('É necessário '+anos+ ' anos.')

////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
3. Altere o programa anterior permitindo ao usuário informar 
as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.
*/
console.log ("\nExercicio 3")
let paisA = 200000
let paisB = 2000000
let porcentagemA = 0.1
let porcentagemB = 0.05
let anos1 = 0
if (paisA < paisB){
    do {
        paisA = paisA * porcentagemA + paisA
        paisB = paisB * porcentagemB + paisB
        anos1 = anos1 + 1
    }
    while (paisA <= paisB)
    console.log('São necessários '+anos1+ ' anos.')
}
else {console.log("País A já é mais populoso que País B.")}  


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
4- Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro.
 Depois modifique o programa para que ele mostre os números um ao lado do outro.
*/

let numero = 0
while (numero < 20){
    numero = numero + 1
    console.log(numero)
}
let x = [...Array(21).keys()]
console.log(x)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

 /*
5. Faça um programa que leia 5 números e informe o maior número.
 */
let values = [1,5,3,18,4];
let maxValue = values.reduce(function(prev, current) { 
	return prev > current ? prev : current; 
});
console.log(maxValue);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
6- Faça um programa que leia 5 números e informe a soma e a média dos números.
*/

function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [1, 5, 2, 3, 7];
var a = ArrayAvg(myArray);
console.log(a)

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*
7- Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
*/

function impar() {
    for (var i = 0; i < 50; i++) {
        if ((i % 2) > 0) {
                        console.log('numeros impar ' + i);
        }
    }
}

impar();

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
8- Faça um programa que receba dois números inteiros e gere 
os números inteiros que estão no intervalo compreendido por eles
*/
let num1=1;
let num2=20;

for (let i =(num1+1); i< num2; i++){
    console.log(i);
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
9- Altere o programa anterior para mostrar no final a soma dos números.
*/

let h = 23
const j = 45
let t = 0
let array = []
while (h < j -1) {
    h += 1
    t += 1
    array.splice(t,0,h)    
}
let sum = 0
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
10 - Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. 
O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
*/

let value = 0
let m = 2
console.log('\nTabuada do '+m+':')
while (value < 10){
    value += 1
    console.log(m+' * '+value + ' = ' + (m*value))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////    ----  Exercícios - Parte 4  ----   /////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*
1. Escreva um script que pergunta ao usuário se ele deseja converter uma temperatura de grau Celsius para Farenheit ou vice-versa. 
Para cada opção, crie uma função. Crie uma terceira, que é um menu para o usuário escolher a opção desejada, onde esse menu chama a função de conversão correta.
*/
function menu() {    
    if (document.getElementById('CF').checked){
        celcius()
    }
    else if (document.getElementById('FC').checked){
        farenheit()
    }
    else{
        alert('Selecione uma opção de converção!')
    }
}


function celcius(){
    let x = document.getElementById("numberBox").value
    let y = (x * 1.8) + 32
    document.getElementById("textBox").innerHTML=y + (" °F");
}

function farenheit(){
    let x = document.getElementById("numberBox").value
    let y = (x - 32) * (5/9)
    document.getElementById("textBox").innerHTML=y.toFixed(2) + (" °C");
}

/*
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>At1-Li4</title>
</head>

<style>

    .parent{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 200px;
    }
    .mainDiv{
        display: flex;
        width: fit-content;
        border: 2px solid rgb(110, 67, 67);
        padding: 24px 35px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        flex-direction: column;
        align-items: center;
        background-color: rgb(201, 182, 182);
    }

    .title{
        border-bottom: 3px solid black;
        width:100%;
        text-align: center;
        
    }
    
    .textBox{
        font-size: 18px;
        text-align: center       
    }

    .numberBox{
        margin-bottom: 10px;
        font-size: 16px;
        border: 2px solid rgb(44, 32, 32);
        border-radius: 3px;
        text-align: center;
        padding: 5px;
    }

    .convertBnt{
        margin-top: 10px;
        background-color: rgb(41, 116, 41);
        border: 2px solid rgb(51, 100, 51);    
        color: lightgray;    
        border-radius: 3px;
        padding: 4px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;        
        font-weight: 500;
        font-size: 16px;
        cursor: pointer;        
        transition: background-color 0.2s, color 0.2s;
    }

    .convertBnt:hover{
        background-color: lightgray;        
        border: 2px solid rgb(0, 200, 0);
        color: rgb(0, 200, 0);
    }

    .radioBnt{
        margin: 20px 0;
        font-size: 15px;
    }


</style>

<script src="lista4 -1.js"></script>

<body style="background-color: rgb(209, 203, 203);">
    <div class="parent">
        <div class="mainDiv">

            <div class="title">
                <h4>Converção:</h4>
            </div>

            <div class="radioBnt">
                <input type="radio" id="CF" name="radioBnt">
                <label for="CF">Celsius Para Farenheit</label>
                <input type="radio" id="FC" name="radioBnt">
                <label for="FC">Farenheit Para Celsius</label> 
            </div>
            
            <input class="numberBox" id="numberBox" type="number" placeholder="Insira a temperatura">
            <h4 class="textBox" id="textBox">-</h4>
            <button class="convertBnt" onclick="menu()">Converter</button>

        </div>
    </div>
</body>
</html>
*/

//  DOCUMENTOS SEPARADOS PARA ESTA TIVIDADE //

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
2. Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos através de uma função.
 Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira.
*/

function sum(a,b,c){
    return a + b + c
}

function average(){
    let x = sum(3,8,1)
    console.log(`Soma = ${x}`, `Média = ${x/3}`)
}
average()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
3. Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.
*/

function max(a,b,c){
    console.log(Math.max(a,b,c))
}

function min(a,b,c){
    console.log(Math.min(a,b,c))
}

function main(){
    let a = 400, b = 289, c = 22
    max(a,b,c)
    min(a,b,c)
}
main()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
4. A probabilidade de dar um valor em um dado é 1/6 (uma em 6). 
Faça um script em JavaScript que simule 1 milhão de lançamentos de dados e mostre a frequência que deu para cada número.
*/

let um   = 0, dois   = 0, tres = 0
let quatro  = 0, cinco  = 0, seis   = 0

for(let x = 0; x < 1000000; x++){

    let y = Math.floor(Math.random() * 6) + 1;    

    switch (y){

        case 1:
            um += 1
            break
        
        case 2:
            dois += 1
            break
        
        case 3:
            tres += 1
            break    

        case 4:
            quatro += 1
            break     

        case 5:
            cinco += 1
            break 

        case 6:
            seis += 1
            break     
    }
   
}

let rum = (um * 100) / 1000000
console.log('Lado 1: ' + rum.toFixed(2) + '%' )

let rdois = (dois * 100) / 1000000
console.log('Lado 2: ' +rdois.toFixed(2) + '%' )

let rtres = (tres * 100) / 1000000
console.log('Lado 3: ' +rtres.toFixed(2) + '%' )

let rquatro = (quatro * 100) / 1000000
console.log('Lado 4: ' +rquatro.toFixed(2) + '%' )

let rcinco = (cinco * 100) / 1000000
console.log('Lado 5: ' +rcinco.toFixed(2) + '%' )

let rseis = (six * 100) / 1000000
console.log('Lado 6: ' +rseis.toFixed(2) + '%' )

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
5. Crie uma função que recebe um inteiro positivo e teste para saber se ele é primo ou não. 
Faça um script que recebe um inteiro *n* e mostra todos os primos, de 1 até n.
*/

let nprimo = 43
let res = 0

for (let n = 1;n < nprimo; n++){    

    if (nprimo % n == 0 && n != 1){
        res += 1
    }        
}

if(res != 0){
    console.log(`${nprimo} não é primo.`)
}
else{
    console.log(`${nprimo} é um numero primo.`)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









