let contador = 1;

document.querySelector("#suma").addEventListener("click",sumar);
document.querySelector("#resta").addEventListener("click",restar);

function sumar() {
    contador += 1
    if(contador<=0) contador = 0
    document.querySelector("#quantity").innerHTML = contador
}

function restar() {
    contador = contador-1
    if(contador<=0) contador = 0
    document.querySelector("#quantity").innerHTML = contador
}

let contador1 = 1;

document.querySelector("#suma1").addEventListener("click",sumar1);
document.querySelector("#resta1").addEventListener("click",restar1);

function sumar1() {
    contador1 += 1
    if(contador1<=0) contador1 = 0
    document.querySelector("#quantity1").innerHTML = contador1
}

function restar1() {
    contador1 = contador1-1
    if(contador1<=0) contador1 = 0
    document.querySelector("#quantity1").innerHTML = contador1
}