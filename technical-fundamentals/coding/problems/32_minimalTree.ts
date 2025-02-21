// 2. *Minimal Tree*:

// Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimal height.
//
// A binary search tree is a search where for each node,
// lesser elements are on the left node, and greater elements on the right node.
//
// Input: [1,2,3]
// Output:
//      2
//   1  |  3
//
// Input: [1,2,3,4,5]
// Output:
//      3
//    2    5
//  1    4


// Input: [1, 2, 3, 4, 5, 6, 7]
// Output:
//        4
//     2      6
//   1   3  5    7


export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function minimalTree<T>(
  sortedArray: T[],
): TreeNode<T> | undefined {
  if (!sortedArray.length) return
  const half = Math.floor(sortedArray.length / 2)
  return {
    value: sortedArray[half],
    left: minimalTree(sortedArray.slice(0, half)),
    right: minimalTree(sortedArray.slice(half + 1))
  }
}