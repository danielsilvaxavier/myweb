alert("Olá, Usuário!!!");
var nome;
nome = prompt("Informe seu nome, Usuario!");
alert("muito obrigado pela participação " + nome);

var nota1= 5.9;
var nota2= 6.9;
var nota3= 7.5;
var media= (nota1+nota2+nota3)/3;
if(media >= 7){
    alert("aprovado");
} 
else{
    alert("reprovado");
}
var number1,number2,number3;
number1 = prompt("Digite um número, " +nome);
number2 = prompt("Digite o segundo número:");
number3 = prompt("Digite o último número:");

var media=(number1+number2+number3)/3;
if(media >= 7 ){
        alert("Aprovado, "+nome);
}
if (media >= 5) {
    alert("Recuperação");
    
} else {
    alert("Reprovado!")
}