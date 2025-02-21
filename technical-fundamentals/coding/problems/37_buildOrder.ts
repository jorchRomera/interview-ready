// 7. *Build Order*:

// You are given a list of projects and a list of dependencies
// (which is a list of pairs of projects, where the second project is
// dependent on the first project). All of a project's dependencies
// must be built before the project is. Find a build order that will allow
// the projects to be built. If there is no valid build order, return an error.

// ```
// EXAMPLE Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output: e, f, a, b, d, c
// ```

export default function buildOrder(projects: string[], dependencies: string[][]): string[] | string {
  const projectsOrder: string[] = []
  const dependenciesMap = transformDependenciesIntoMap(dependencies)
  while (projectsOrder.length !== projects.length) {
    let flag = 0
    for (let i = 0; i < projects.length; i++){
      const project = projects[i]
      if (!projectsOrder.includes(project) && !dependenciesMap.get(project)) {
        addProjectToBuildOrder(project, projectsOrder, dependencies, dependenciesMap)
        flag++
      }
    }
    if (!flag) throw Error('No valid build order exists')
  }
  return projectsOrder
}

function transformDependenciesIntoMap(dependencies:  string[][]): Map<string, number> {
  const map: Map<string, number> = new Map()
  dependencies.forEach((dependency) => {
    if (!map.get(dependency[1])) map.set(dependency[1], 1)
    else map.set(dependency[1], map.get(dependency[1])! + 1)
  })
  return map
}


function addProjectToBuildOrder(project: string, buildOrder: string[], dependencies: string[][], dependencyMap: Map<string, number>) {
  buildOrder.push(project)
  for(const [dependency, dependant] of dependencies) {
    if (project !== dependency) continue
    dependencyMap.set(dependant, dependencyMap.get(dependant)! - 1)
  }
}
// this solution is buildOrder3 but sorted
// export default function buildOrder4(projects: string[], dependencies: string[][]): string[] | string {
//   const projectOrder: string[] = []
//   if (!projects.length) return projectOrder
//   const projectsStore: Map<string, string[]> = new Map()
//   const dependencyCount: Map<string, number> = new Map()
//   projects.forEach(project => {
//     projectsStore.set(project, [])
//     dependencyCount.set(project, 0)
//   })
//
//   for (const [dependency, dependant] of dependencies) {
//     projectsStore.get(dependency)?.push(dependant)
//     dependencyCount.set(dependant, (dependencyCount.get(dependant) || 0) + 1)
//   }
//
//   // I'm not too happy about sorting this. But I had to do it because of the deterministic nature of the test.
//   for (const dependants of projectsStore.values()) {
//     dependants.sort()
//   }
//
//   const queue: string[] = []
//   for (const [dependant, count] of dependencyCount) {
//     if (!count) queue.push(dependant)
//   }
//
//   while (queue.length) {
//     const projectBuilt = queue.shift()
//     projectOrder.push(projectBuilt!)
//     const dependantsToBeUpdated = projectsStore.get(projectBuilt!)
//     dependantsToBeUpdated?.forEach(dependant => {
//       dependencyCount.set(dependant, dependencyCount.get(dependant)! - 1)
//       if (dependencyCount.get(dependant) === 0) queue.push(dependant)
//     })
//   }
//   if (projectOrder.length !== projects.length) throw new Error('No valid build order exists')
//   return projectOrder
// }


// sadly this fails because in the test doesn't say that there's a unique valid build order. So I'll need to implement some kind of sort
// export default function buildOrder3(projects: string[], dependencies: string[][]): string[] | string {
//   const projectOrder: string[] = []
//   if (!projects.length) return projectOrder
//   const projectsStore: Map<string, string[]> = new Map()
//   const dependencyCount: Map<string, number> = new Map()
//   projects.forEach(project => {
//     projectsStore.set(project, [])
//     dependencyCount.set(project, 0)
//   })
//
//   for (const [dependency, dependant] of dependencies) {
//     projectsStore.get(dependency)?.push(dependant)
//     dependencyCount.set(dependant, (dependencyCount.get(dependant) || 0) + 1)
//   }
//   const queue: string[] = []
//   for (const [dependant, count] of dependencyCount) {
//     if (!count) queue.push(dependant)
//   }
//   while (queue.length) {
//     const projectBuilt = queue.shift()
//     projectOrder.push(projectBuilt!)
//     const dependantsToBeUpdated = projectsStore.get(projectBuilt!)
//     dependantsToBeUpdated?.forEach(dependant => {
//       dependencyCount.set(dependant, dependencyCount.get(dependant)! - 1)
//       if (dependencyCount.get(dependant) === 0) queue.push(dependant)
//     })
//   }
//   if (projectOrder.length !== projects.length) throw new Error('No valid build order exists')
//   return projectOrder
// }

// export default function buildOrder2(projects: string[], dependencies: string[][]): string[] | string {
//   const projectOrder: string[] = []
//   if (!projects.length) return projectOrder
//   const missingProjects = [...projects]
//   while(missingProjects.length) {
//     const amountDependencies: Map<string, number> = new Map()
//     for (let d = 0; d < dependencies.length; d++) {
//       const dependant = dependencies[d][1]
//       const dependency = dependencies[d][0]
//       if (projects.includes(dependency) && !missingProjects.includes(dependency)) continue
//       const dependencyAmount = amountDependencies.get(dependant)
//       if (dependencyAmount === undefined) amountDependencies.set(dependant, 1)
//       else amountDependencies.set(dependant, dependencyAmount + 1)
//     }
//     let projectsBuiltThisRound = 0
//     for (let mp = 0; mp < missingProjects.length; mp++) {
//       const project = missingProjects[mp]
//       if (amountDependencies.has(project)) continue
//       projectOrder.push(project)
//       missingProjects.splice(mp, 1)
//       mp--
//       projectsBuiltThisRound++
//     }
//     if (!projectsBuiltThisRound) throw new Error('No valid build order exists')
//   }
//   return projectOrder
// }

// function buildProjects1(projects: string[], dependencies: string[][], projectOrder: string[]) {
//   const temporalProjects: string[] = []
//   for (let p = 0; p < projects.length; p++) {
//     let hasDependencies = false
//     for (let d = 0; d < dependencies.length; d++) {
//       if (dependencies[d][1] === projects[p]) {
//         hasDependencies = true
//         break
//       }
//     }
//     if (!hasDependencies) temporalProjects.push(projects[p])
//   }
//   if (!temporalProjects.length) throw Error('No valid build order exists')
//
//   for (let p = 0; p < temporalProjects.length; p++) {
//     const project = temporalProjects[p]
//     projectOrder.push(project)
//     projects = projects.filter(proj => proj !== project)
//     dependencies = dependencies.filter(dependency => dependency[0] !== project)
//   }
//   if (projects.length) buildProjects(projects, dependencies, projectOrder)
// }
//
