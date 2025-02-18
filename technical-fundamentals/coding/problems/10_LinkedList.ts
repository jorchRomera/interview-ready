// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined
  tail: Node<T> | undefined

  constructor(head?: Node<T>) {
    this.head = this.tail = head
  }

  push(value: T) {
    const newNode = { value }
    if (!this.tail) {
      this.head = this.tail = newNode
      return
    }
    this.tail.next = newNode
    this.tail = this.tail.next
  }

  filter(fn: (node: Node<T>, index: number) => boolean): LinkedList<T> {
    const list = new LinkedList<T>()
    let index = 0
    this.visit((node) => {
      if (fn(node, index)) list.push(node.value)
      index++
    })
    return list
  }

  visit(fn: (node: Node<T>, index: number) => unknown) {
    let index = 0
    let p = this.head

    while (p) {
      if (fn(p, index) === 'break') break
      p = p.next
      index++
    }
  }

  merge(linkedList: LinkedList<T>) {
    if (this.tail) this.tail.next = linkedList.head
    else this.head = linkedList.head

    this.tail = linkedList.tail
    this.print(this)
    return this
  }

  print(linkedList: LinkedList<T>) {
    let p = linkedList.head
    let log = ''
    while (p) {
      if (!p.next) log += p.value
      else log += `${ p.value } -> `
      p = p.next
    }
    console.log(log)
  }

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}
  length() {
    let length = 0
    this.visit(() => {
      length++
    })
    return length
  };

  remove(node: Node<T>): void {
    if (node === this.head) {
      if (this.head === this.tail) return this.head = this.tail = undefined
      this.head = this.head!.next
      return
    }
    let p = this.head
    while (p?.next) {
      if (p.next !== node) {
        p = p.next
        continue
      }
      if (p.next === this.tail) {
        p.next = undefined
        this.tail = p
        return
      }
      p.next = p.next.next
      return
    }
  }
}