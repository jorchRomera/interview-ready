// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

export default class MyQueue<T> {
  stack: Array<T> = []
  queue: Array<T> = []

  constructor() {
  }

  enqueue(value: T): void {
    this.moveToStack()
    this.stack.push(value)
  }

  dequeue(): T | undefined {
    this.moveToQueue()
    return this.queue.pop()
  }

  peek(): T | undefined {
    this.moveToStack()
    return this.stack[0]
  }

  isEmpty(): boolean {
    return this.stack.length === 0 && this.queue.length === 0
  }

  moveToStack(): void {
    while (this.queue.length > 0) {
      const value = this.queue.pop()
      this.stack.push(value!)
    }
  }

  moveToQueue(): void {
    while (this.stack.length > 0) {
      const value = this.stack.pop()
      this.queue.push(value!)
    }
  }
}
