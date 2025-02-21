// 6. *Successor*:

// Write an algorithm to find the "next" node
// (i.e., in-order successor) of a given node in a binary search tree.
// You may assume that each node has a link to its parent.

export type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
    parent?: TreeNode<T>; // Link to parent node
};

function getChildrenSuccessor<T>(node?: TreeNode<T>): TreeNode<T> | undefined {
    if (!node) return
    if (!node.left) return node
    return getChildrenSuccessor(node.left)
}

function getParentSuccessor<T>(node: TreeNode<T>) {
    if (!node || !node.parent) return
    if (node.parent.left === node) return node.parent
    return getParentSuccessor(node.parent)
}

export default function successor<T>(node: TreeNode<T>): TreeNode<T> | undefined {
    return getChildrenSuccessor(node.right) || getParentSuccessor(node)
}



