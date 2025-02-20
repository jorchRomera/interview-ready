// 8. *First Common Ancestor*:

// Design an algorithm and write code to find the first common ancestor of two nodes
// in a binary tree. Avoid storing additional nodes in a data structure.
// NOTE: This is not necessarily a binary search tree.

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
  if (isChild(p, node.left)) {
    if (isChild(q, node.right)) return node
    return firstCommonAncestor(node?.left, p, q)
  }
  if (isChild(q, node)) return node
  return firstCommonAncestor(node?.right, p, q)
}

function isChild<T>(findingNode: TreeNode<T>, rootNode?: TreeNode<T>): TreeNode<T> | undefined {
  if (!rootNode) return
  if (rootNode.value === findingNode.value) return rootNode
  return isChild(findingNode, rootNode.left) || isChild(findingNode, rootNode.right)
}