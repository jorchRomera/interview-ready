// 6. *Animal Shelter*:

// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" basis. People must adopt either the "oldest"
// (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat
// (and will receive the oldest animal of that type).
// They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations
// such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
// You may use the built-in LinkedList data structure.

import { LinkedList } from './10_LinkedList.js'

export type AnimalType = 'dog' | 'cat';

export class Animal {
  type: AnimalType

  constructor(type: AnimalType) {
    this.type = type
  }
}

export default class AnimalShelter {
  dogs: Array<Animal> = []
  cats: Array<Animal> = []
  animals = new LinkedList<Animal>()

  constructor() {
  }

  enqueue(type: AnimalType): void {
    const newAnimal = new Animal(type)
    if (type === 'dog') this.dogs.push(newAnimal)
    else this.cats.push(newAnimal)
    this.animals.push(newAnimal)
  }

  dequeueAny(): Animal | undefined {
    const olderAnimal = this.animals.head?.value.type
    if (!olderAnimal) return
    if (olderAnimal === 'dog') return this.dequeueDog()
    return this.dequeueCat()
  }

  dequeueDog(): Animal | undefined {
    this.dequeueAnimal('dog')
    return this.dogs.shift()
  }

  dequeueCat(): Animal | undefined {
    this.dequeueAnimal('cat')
    return this.cats.shift()
  }

  private dequeueAnimal = (type: AnimalType)=> {
    let dNode
    this.animals.visit((node): any => {
      if (node.value.type === type) {
        dNode = node
        return 'break'
      }
    })
    if (!dNode) return undefined
    this.animals.remove(dNode)
  }
}

