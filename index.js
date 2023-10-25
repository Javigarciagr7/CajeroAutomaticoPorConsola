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
if(isNaN(retiro) || retiro <= 0 || retiro > saldo){
    console.log("Cantidad invalida o insuficiente");
} else {
    // saldo= saldo - retiro
    saldo-= retiro
    console.log(`Se han retirado: ${retiro.toFixed(2)}€`)
    mostrarsaldo();
}

function transferir(){
    const monto = parseFloat(prompt("Ingrese la cantidad a transferir: "))
    if(isNaN(monto) || monto <= 0 || monto > saldo){
        console.log("Cantidad invalida o insuficiente");
    } else {
        const cuentadestino = prompt("Ingrese el numero de cuenta destino")
        esValidaEstructuraIBAN(cuentadestino)
        console.log(`Se han transferido $${monto.toFixed(2)} a la cuenta ${cuentaDestino}`)
        mostrarsaldo()
}
}


function esValidaEstructuraIBAN(cuentaValidar){
    return /[a-zA-Z]{2}[0-9]{20}$/g.test(strValue)
}

function iniciarsesion(){
    let pin = prompt ("Ingrese su PIN")
    while (pin !== PIN_CORRECTO && intentosrestantes > 1){
    intentosrestantes--
    console.log(`PIN incorrecto,le quedan ${intentosrestantes}intentos`)
    pin = prompt("Introduce su PIN: ")
    }

    if(pin == PIN_CORRECTO){
        console.log("Inicio de sesión exitoso")
        mostrarsaldo()
        operacionescajero()
    }
    else{
        console.log("PIN incorrecto.")
    }

}

function menu(){
    let continuar = true;

    while(continuar){
        console.log("Menú del cajero");
        console.log("1. Consultar saldo");
        console.log("2. Depositar dinero");
        console.log("3. Retirar dinero");
        console.log("4. Tranferir dinero");
        console.log("5. Salir");


        const opcion =prompt("Elija una opcion: ")
        switch(opcion){
            case "1":
                mostrarsaldo()
                break;
            case"2":
                depositar()
                break;
            case "3":
                retirar()
                break;
            case "4":
                transferir()
                break;
            case "5":
                console.log("Ha salido correctamente");
                break;
        }
    }

}
