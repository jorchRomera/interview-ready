// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumLists(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  const linkedList1 = new LinkedList(list1)
  const linkedList2 = new LinkedList(list2)
  const sumLinkedList: LinkedList<number> = new LinkedList()
  let p1 = linkedList1.head
  let p2 = linkedList2.head
  let carry = 0
  while(p1 || p2) {
    const value = (p1?.value || 0) + (p2?.value || 0) + carry
    carry = value > 9 ? 1 : 0
    sumLinkedList.push(value % 10)
    p1 = p1?.next
    p2 = p2?.next
  }
  if (carry > 0) sumLinkedList.push(carry)
  return sumLinkedList.head
}
