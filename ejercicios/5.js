const obj = [
  [ 1, { nombre: 'Marco' } ],
  [ 2, { nombre: 'Eva' } ],
  [ 3, { nombre: 'Juan' } ]
]

function invertir(array) {
  let new_array = []
  for(let elem of array) {
    new_array.push({id: elem[0], name : elem[1].nombre})
  }
  return new_array
}

console.log(invertir(obj));