// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

export default class StackMin<T> {
    stack: Array<T> = []
    mins: Array<T> = []
    constructor() {}

    push(value: T): void {
        this.stack.push(value)
        const min = this.min()
        if (!min) {
            this.mins.push(value)
            return
        }
        if (value < min) {
            this.mins.push(value)
        }
    }

    pop(): T | undefined {
        const pop =  this.stack.pop()
        if (pop === this.min()) {
            this.mins.pop()
        }
        return pop
    }

    min(): T | undefined {
        return this.mins[this.mins.length - 1]
    }
}
