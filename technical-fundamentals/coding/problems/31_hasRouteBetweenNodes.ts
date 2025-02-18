// 1. *Route Between Nodes*:

// Given a directed graph, design an algorithm to find out whether there is a route
// between two nodes.

export type GraphNode = {
  value: number;
  neighbors: GraphNode[];
};

export default function hasRouteBetweenNodes(
  start: GraphNode,
  end: GraphNode,
): boolean {
  const stack = [start]
  const set = new Set().add(start)
  let n
  while(n = stack.pop()) {
    n.neighbors.forEach((node) => {
      if (set.has(node)) return
      set.add(node)
      stack.push(node)
    })
    if (set.has(end)) return true
  }
  return false
}