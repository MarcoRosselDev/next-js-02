// input = [-199, -3, 1, 55, 200]
// retornar un array con el numero menor y el mayor, dentro del array dado
// no utilizar el metodo sort (muy pesado en recursos)
// no iterar mas de una vez el array

function menor_mayor(array) {
  let menor = array[0]
  let mayor = array[0]
  
  for(let numero of array) {
    menor = menor < numero? menor: numero
    mayor = mayor > numero? mayor: numero
  }

  return array.lenght <= 1? ['el array entregado es entero corto!'] : [menor, mayor] 
}

console.log(menor_mayor([-199, -3, 1, 55, 200, 1, 234, 4, 6, 8, -1233])); // [-1233, 234] ==> resultado satisfactorio