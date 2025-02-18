// 3. *List of Depths*:

// Given a binary tree, design an algorithm which creates a linked list
// of all the nodes at each depth (e.g., if you have a tree with depth D,
// you'll have D linked lists).

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export type ListNode<T> = {
  value: T;
  next?: ListNode<T>;
};

export default function listOfDepths<T>(
  root: TreeNode<T> | null,
): ListNode<T>[] {
  const lists: ListNode<T>[] = []
  const level = 0
  if (!root) return lists
  dfs(root, lists, level)
  return lists
}

function dfs<T>(node: TreeNode<T> | undefined, lists: ListNode<T>[], level: number) {
  if (!node) return
  const currentList = lists[level]
  if (!currentList) lists[level] = { value: node.value }
  else {
    let p = currentList
    while (p) {
      if (!p.next) {
        p.next = { value: node.value }
        break
      }
      p = p.next
    }
  }
  dfs(node.left, lists, level+1)
  dfs(node.right, lists, level+1)
}

/*
                 1
                / \
               2   3
              / \   \
             4   5   6
            /
           7
     */
// 1
// 2 3
// 4 5 6
// 7