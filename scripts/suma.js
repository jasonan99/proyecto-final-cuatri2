document.querySelector("#suma").addEventListener("click",sumar);
document.querySelector("#resta").addEventListener("click",restar);
let contador = 0;

function sumar() {
    contador = contador+1
    document.querySelector("#quantity").innerHTML = contador
}

function restar() {
    contador = contador-1
    document.querySelector("#quantity").innerHTML = contador
}