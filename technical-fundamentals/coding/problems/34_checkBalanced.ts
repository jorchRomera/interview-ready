// 4. *Check Balanced*:

// Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree
// such that the heights of the two subtrees of any node never differ by more than one.

export type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
};

export default function checkBalanced<T>(tree?: TreeNode<T> | null): boolean {
    if (!tree) return true
    return isBalanced(tree)
}

function isBalanced<T>(tree?: TreeNode<T> | null): boolean {
    if (!tree) return true
    const isNodeBalanced = Math.abs(getHigh(tree.left) - getHigh(tree.right)) <= 1
    return isBalanced(tree.left) && isBalanced(tree.right) && isNodeBalanced
}

function getHigh<T>(node: TreeNode<T> | undefined): number {
    if (!node) return 0
    return Math.max(getHigh(node.left), getHigh(node.right)) + 1
}
