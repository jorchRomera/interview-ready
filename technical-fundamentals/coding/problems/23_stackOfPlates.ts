// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

export default class StackOfPlates<T> {
  stacks: Array<Array<T>> = []
  currentIndex = -1

  constructor(private capacity: number) {
  }

  push(value: T): void {
    this.currentIndex++
    if (this.currentIndex % this.capacity === 0) this.stacks.push([])
    this.stacks[Math.trunc(this.currentIndex / this.capacity)].push(value)
  }

  pop(): T | undefined {
    if (this.currentIndex < 0) return undefined
    const value = this.stacks[Math.trunc(this.currentIndex / this.capacity)].pop()
    if (this.currentIndex % this.capacity === 0) this.stacks.pop()
    this.currentIndex--
    return value
  }

  popAt(stack: number): T | undefined {
      return this.stacks[stack]?.pop()
  }
}

