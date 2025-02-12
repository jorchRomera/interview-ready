// *Sum Lists*: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the Vs digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

import { LinkedList } from './10_LinkedList'

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  if (!list1) return list2
  if (!list2) return list1
  const l1 = new LinkedList(list1)
  const l2 = new LinkedList(list2)
  let sumList: LinkedList<number> = new LinkedList()
  let p1 = l1.head
  let p2 = l2.head
  const arr1 = []
  const arr2 = []
  while (p1 || p2) {
    if (p1) arr1.push(p1.value)
    if (p2) arr2.push(p2.value)
    p1 = p1?.next
    p2 = p2?.next
  }
  (Number(arr1.join('')) + Number(arr2.join(''))).toString().split('').forEach((value) => {
    sumList.push(Number(value))
  })
  return sumList.head
}
