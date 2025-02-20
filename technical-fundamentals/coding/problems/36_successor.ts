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

export default function successor<T>(node: TreeNode<T>): TreeNode<T> | undefined {
    return hasChildrenHigher(node.right) || hasParentHigher(node)
}

function hasChildrenHigher<T>(node?: TreeNode<T>): TreeNode<T> | undefined {
    if (!node?.left) return node
    if (!node.right) return node.left
    return hasChildrenHigher(node.left) || hasChildrenHigher(node.right)
}

function hasParentHigher<T>(node?: TreeNode<T>): TreeNode<T> | undefined {
    if (!node?.parent) return undefined
    if (node === node.parent.left) return node.parent
    return hasParentHigher(node.parent)
}

