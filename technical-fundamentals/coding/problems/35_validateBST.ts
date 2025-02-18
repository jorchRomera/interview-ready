// 5. *Validate BST*:

// Implement a function to check if a binary tree is a binary search tree.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

// Gabi's solution on IR
export default function validateBST<T>(
  node: TreeNode<T> | undefined,
): boolean {
  if (!node) return true
  const isBST = (node.left?.value || -Infinity) < node.value && (node.right?.value || Infinity) > node.value
  const areChildrenBST = validateBST(node.left) && validateBST(node.right)

  return isBST && areChildrenBST
}

//// My solution
// export default function validateBST<T>(
//   node: TreeNode<T> | undefined,
// ): boolean {
//   if (!node) return true
//   return checkIfHigher(node.value, node.left) && checkIfLower(node.value, node.right) && validateBST(node.left) && validateBST(node.right)
// }
//
// function checkIfHigher<T>(value: T, node?: TreeNode<T>): boolean {
//   if (!node) return true
//   if (value < node.value) return false
//   return checkIfHigher(value, node.left) && checkIfHigher(value, node.right)
// }
//
// function checkIfLower<T>(value: T, node?: TreeNode<T>): boolean {
//   if (!node) return true
//   if (value > node.value) return false
//   return checkIfLower(value, node.left) && checkIfLower(value, node.right)
// }