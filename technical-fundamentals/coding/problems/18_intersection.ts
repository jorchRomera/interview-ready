// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { LinkedList } from './10_LinkedList'

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined,
): Node<T> | undefined {
  const set: Set<Node<T>> = new Set()

  const li1 = new LinkedList<T>(list1)
  li1.visit(node => set.add(node))

  const li2 = new LinkedList<T>(list2)
  let ret: Node<T> | undefined
  li2.visit(node => {
    if (set.has(node) && !ret) ret = node
  })
  return ret
}


export function myIntersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined,
): Node<T> | undefined {
  let p1 = list1
  let p2 = list2
  const intersection: LinkedList<T> = new LinkedList()
  while (p1) {
    while (p1 && p2) {
      if (p1.value === p2.value) {
        intersection.push(p1.value)
        p1 = p1.next
      } else if (intersection.head?.value) return intersection.head
      p2 = p2.next
    }
    p2 = list2
    p1 = p1?.next
  }
  return intersection.head
}
