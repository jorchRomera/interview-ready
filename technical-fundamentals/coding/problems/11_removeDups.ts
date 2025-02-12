// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from './10_LinkedList.js'

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  const list: LinkedList<T> = new LinkedList(head)
  const set: Set<T> = new Set()
  return list.filter(node => {
    if (set.has(node.value)) return false
    set.add(node.value)
    return true
  }).head
}

export function removeDups2<T>(head?: Node<T>): Node<T> | undefined {
  const set: Set<T> = new Set()
  let list = head
  while (list) {
    const next = list.next
    if (!set.has(list.value)) set.add(list.value)
    if (next && set.has(next.value)) list.next = next.next
    else list = list.next
  }
  return head
}
