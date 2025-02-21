// 8. *First Common Ancestor*:

// Design an algorithm and write code to find the first common ancestor of two nodes
// in a binary tree. Avoid storing additional nodes in a data structure.
// NOTE: This is not necessarily a binary search tree.

/*
             1
            / \
           2   3
          / \ / \
         4  5 6  7
 */

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function firstCommonAncestor<T>(
  node: TreeNode<T> | undefined,
  p: TreeNode<T>,
  q: TreeNode<T>,
): TreeNode<T> | undefined {
  if (!node) return
  if (!isChild(p, node) || !isChild(q, node)) return
  return firstCommonAncestor(node.left, p, q) || firstCommonAncestor(node.right, p, q) || node
}

function isChild<T>(comparingNode: TreeNode<T>, node?: TreeNode<T>): boolean {
  if (!node) return false
  if (comparingNode === node) return true
  return isChild(comparingNode, node?.left) || isChild(comparingNode, node.right)
}