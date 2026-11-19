
var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    imc = peso / (altura * altura)

    resultado = document.getElementById("resultado");

   
    if(imc < 18.5){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> <br/> <b>Você está abaixo do peso!</b>"
    }else if(imc >= 18.5 && imc <= 24.9){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> <br/> <b>Você está no peso ideal!</b>"
    }else if(imc >= 25 && imc <= 29.9){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> <br/> <b>Você está com sobrepeso!</b>"
    }else if(imc >= 30 && imc <= 34.9){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> <br/> <b>Você está com obesidade grau I!</b>"
    }else if(imc >= 35 && imc <= 39.9){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> <br/> <b>Você está com obesidade grau II!</b>"
    }else if(imc >= 40){
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> <br/> <b>Você está com obesidade grau III!</b>"
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}