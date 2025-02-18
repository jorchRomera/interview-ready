// Write the basic tree algorithms of Depth-first-search and Breadth-first search.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export class Tree<T> {
  bfs(node: TreeNode<T> | undefined, visit: (node: TreeNode<T>) => void) {
    if (!node) return

    const queue = [node]
    let n
    while (n = queue.shift()) {
      visit(n)

      if (n.left) queue.push(n.left)
      if (n.right) queue.push(n.right)
    }
  }

  dfs(node: TreeNode<T> | undefined, visit: (node: TreeNode<T>) => void) {
    if (!node) return

    visit(node)
    this.dfs(node.left, visit)
    this.dfs(node.right, visit)
  }
}
