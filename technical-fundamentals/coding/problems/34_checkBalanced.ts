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
    let max = 0

    function dfs<T>(currentLevel: number, node?: TreeNode<T>): boolean {
        if (!node) return true
        if (!node.left || !node.right) {
            if (!max) max = currentLevel
            if (Math.abs(max - currentLevel) >= 2) return false
        }
        return dfs(currentLevel + 1, node.left) && dfs(currentLevel + 1, node.right)
    }

    return dfs(0, tree)
}
