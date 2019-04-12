const animalsCollection = [
  {
    name: 'elephant',
    species: 'asian bush',
    age: '2 years old',
    weight: '6000 kg', // kg
    foods: 'grasses, small plants, bushes, fruit, twigs, tree bark',
    habitat: 'savanna'
  },
  {
    name: 'lion',
    species: 'african',
    age: '3 years old',
    weight: '190 kg', // kg
    foods: 'beef, micin, mouton, venison',
    habitat: 'african savanna'
  }
]

// -----------------------------------------------------------------------------

const newAnimalsCollection = animalsCollection.map(animal => {
  const newAnimal = Object.assign({}, animal)

  newAnimal.age = parseInt(newAnimal.age)
  newAnimal.weight = parseInt(newAnimal.weight)
  newAnimal.foods = newAnimal.foods.split(', ').map(food => {
    return transformToTitleCase(food)
  })
  newAnimal.name = transformToTitleCase(newAnimal.name)
  newAnimal.species = transformToTitleCase(newAnimal.species)
  newAnimal.habitat = transformToTitleCase(newAnimal.habitat)

  return newAnimal
})

console.log('animalsCollection', animalsCollection)
console.log('newAnimalsCollection', newAnimalsCollection)
