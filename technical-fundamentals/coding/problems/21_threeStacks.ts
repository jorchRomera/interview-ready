// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

export default class ThreeStacks<T> {
  private array: (T | undefined)[]
  private arrayLength: number

  constructor(arrayLength: number) {
    this.array = Array(arrayLength).fill(undefined)
    this.arrayLength = arrayLength / 3
  }

  push(stackNum: number, value: T): void {
    for (let i = this.arrayLength * stackNum; i < this.arrayLength * (stackNum + 1); i++) {
      if (!this.array[i]) {
        this.array[i] = value
        break
      }
    }
  }

  pop(stackNum: number): T | undefined {
    let value
    for(let i = (this.arrayLength * (stackNum + 1)) - 1; i >= this.arrayLength * stackNum; i--) {
      if (this.array[i]) {
        value = this.array[i]
        this.array[i] = undefined
        break
      }
    }
    return value
  }

  peek(stackNum: number): T | undefined {
    for (let i = this.arrayLength * (stackNum + 1) - 1; i >= this.arrayLength * stackNum; i--) {
      if(this.array[i]) return this.array[i]
    }
    return
  }
}