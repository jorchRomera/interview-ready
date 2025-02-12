// 7. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function isPalindrome<T>(head: Node<T> | undefined): boolean {
  const li = new LinkedList(head)
  const arr: T[] = []
  li.visit((node) => arr.push(node.value))
  const length = arr.length
  for (let i = 0; i <= length / 2; i++) {
    if (arr[i] !== arr[length - 1 - i]) return false
  }
  return true
}
