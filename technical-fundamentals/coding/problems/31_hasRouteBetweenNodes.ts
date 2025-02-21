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
  const set = new Set()
  const queue = [start]
  set.add(start)
  let n
  while (n = queue.shift()) {
    for (const neighbor of n.neighbors) {
      if (set.has(neighbor)) continue
      if (neighbor === end) return true
      set.add(neighbor)
      queue.push(neighbor)
    }
  }
  return false
}