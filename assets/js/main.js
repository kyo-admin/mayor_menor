/*
=======EJERCICIO IF==============================
Programa que pida dos numero y que nos diga cual
es el mayor, el menor y si  son iguales.
=================================================
INICIO
    INGRESO NUMERO 1
    INGRESO NUMERO 2
    EVALUAR SI SON IGUALES
    EVALUAR SI NUMERO 1 es Mayor que NUMERO 2
    EVALUAR SI NUMERO 2 es Mayor que NUMERO 1
    EVALUAR SI NO SON NUMEROS
FIN
*/

let valor1 = parseInt(prompt("Ingrese un número"));
let valor2 = parseInt(prompt("Ingrese otro número"));
if( valor1 == valor2){
  alert(`${valor1} = ${valor2}`)
  console.log(`${valor1} = ${valor2}`)

}else if(valor1 > valor2){
  alert(`${valor1} > ${valor2}`)
  console.log(`${valor1} > ${valor2}`)

}else {
  alert(`${valor1} < ${valor2}`)
  console.log(`${valor1} < ${valor2}`)
}