// crea una algoritmo que devuelva la cantidad de numeros positivos en un array

function cantidad_de_numeros_positivos(array) {
  let cantidad = 0
  for(let numero of array) {
    numero > 0? cantidad++ : null; 
  }
  return cantidad
}

console.log(cantidad_de_numeros_positivos([1, 34,4, 0, -1, -4]));