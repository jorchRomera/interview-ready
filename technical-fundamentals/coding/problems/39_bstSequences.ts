// 9. *BST Sequences*: A binary search tree was created by traversing through an array from left to right and inserting each element.
// Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

// ```
// EXAMPLE Input:
/*
            2
           / \
          1   3
*/
// Output: {2, 1, 3}, {2, 3, 1}
// ```

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

function bfs<T>(treeValues: T[], node?: TreeNode<T>) {
  if (!node) return

  treeValues.push(node.value)
  bfs(treeValues, node.left)
  bfs(treeValues, node.right)
}

export default function bstSequences<T>(root: TreeNode<T>): T[][] {
  const treeValues: T[] = []
  bfs(treeValues, root)
  const sequences: T[][] = []
  permute([], treeValues, sequences)
  return sequences
}

function permute<T>(path: any[], treeValues: T[], sequences: T[][]) {
  if (treeValues.length === 0) sequences.push([...path])

  for (let i = 0; i < treeValues.length; i++) {
    path.push(treeValues[i])
    permute(path, [...treeValues.slice(0, i), ...treeValues.slice(i + 1)], sequences)
    path.pop()
  }
}
