let saldo = 1000;
const PIN_CORRECTO ='1234';
let intentosrestantes = 3;

function mostrarsaldo(){
console.log(`Su saldo actual es: ${saldo.toFixed}`)
} 

function depositar(){
const deposito  = parseFloat(prompt("Ingrese la cantidad a depositar: "))
}
if(isNaN(deposito) || deposito <= 0){
    console.log("Cantidad invalida");
} else {
    // saldo= saldo + deposito 
    saldo+= deposito
    console.log(`Se han depositado: ${deposito.toFixed(2)}€`)
    mostrarsaldo();
}

function retirar(){
const retiro = parseFloat(prompt("Ingrese la cantidad a retirar: "))
}
if(isNaN(retiro) || deposito <= 0 || retiro > saldo){
    console.log("Cantidad invalida o insuficiente");
} else {
    // saldo= saldo - retiro
    saldo-= retiro
    console.log(`Se han retirado: ${retiro.toFixed(2)}€`)
    mostrarsaldo();
}

function transferir(){

}

function iniciarsesion(){

}

function menu(){

}
