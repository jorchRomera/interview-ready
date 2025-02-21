// 5. *Validate BST*:

// Implement a function to check if a binary tree is a binary search tree.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

//// Gabi's solution on IR
// export default function validateBST<T>(
//   node: TreeNode<T> | undefined,
// ): boolean {
//   if (!node) return true
//   const isBST = (node.left?.value || -Infinity) < node.value && (node.right?.value || Infinity) > node.value
//   const areChildrenBST = validateBST(node.left) && validateBST(node.right)
//
//   return isBST && areChildrenBST
// }

// My solution
export default function validateBST<T>(
  node: TreeNode<T> | undefined,
): boolean {
  if (!node) return true
  return areChildrenLower(+node.value, node.left) && areChildrenHigher(+node.value, node.right)
}

function areChildrenLower<T>(parentValue: number, node?: TreeNode<T> ): boolean {
  if (!node) return true
  if (parentValue <= +node.value) return false
  return areChildrenLower(parentValue, node.left) && areChildrenLower(parentValue, node.right)
}

function areChildrenHigher<T>(parentValue: number, node?: TreeNode<T> ): boolean {
  if (!node) return true
  if (parentValue >= +node.value) return false
  return areChildrenHigher(parentValue, node.left) && areChildrenHigher(parentValue, node.right)
}