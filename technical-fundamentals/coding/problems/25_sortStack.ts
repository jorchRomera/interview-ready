// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

export default class SortStack<T> {
    stack: Array<T> = []
    constructor() {
    }

    push(value: T): void {
        this.stack.push(value)

        for (let i = this.stack.length - 1; i >= 0; i--) {
            if (this.stack[i] === value) continue
            if (value < this.stack[i]) break
            this.stack[i + 1] = this.stack[i]
            this.stack[i] = value
        }
    }

    pop(): T | undefined {
        return this.stack.pop()
    }

    peek(): T | undefined {
        return this.stack[this.stack.length - 1]
    }

    isEmpty(): boolean {
        return this.stack.length === 0
    }
}
