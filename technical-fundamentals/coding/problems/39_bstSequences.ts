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

export default function bstSequences<T>(root: TreeNode<T>): T[][] {
  const result: T[][] = [];
  const allTreeValues: T[] = []
  dfs(allTreeValues, root)
  backtrack([], allTreeValues, result)
  return result
}

function dfs<T>(allValues: T[], node?: TreeNode<T>) {
  if (!node) return
  allValues.push(node.value)

  dfs(allValues, node.left)
  dfs(allValues, node.right)
}

function backtrack<T>(path: T[], values: T[], result: T[][]) {
  if (values.length === 0) {
    result.push([...path]);
    return;
  }

  for (let i = 0; i < values.length; i++) {
    path.push(values[i]);
    backtrack(path, [...values.slice(0, i), ...values.slice(i + 1)], result);
    path.pop();
  }
}