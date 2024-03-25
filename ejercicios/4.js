//dado el objeto retronarlo como nuevo array de poares, donde el primero indice es el id del objeto iterado 

const objeto = [
  {
    id: 1,
    nombre: 'Marco'
  },{
    id: 2,
    nombre: "Eva"
  }, {
    id: 3,
    nombre: 'Juan'
  }
]

function nuevo_array(array) {
  let new_array = []
  for(let item of array){
    new_array.push([item.id, item])
  }
  return new_array
}

console.log(nuevo_array(objeto));