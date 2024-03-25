// funcion que resiva un numero
// este retornara un array con la cantidad de numeros dado

function array_de_numeros(cantidad) {
  if (cantidad <= 0) {
    return 'la cantidad es menor o igual a 0, por lo que no se puede crear un array con -elementos'
  }
  let arr = []
  for (let i = 0; i < cantidad; i++) {
    arr.push(i + 1)
  }
  return arr
}

console.log(array_de_numeros(20));