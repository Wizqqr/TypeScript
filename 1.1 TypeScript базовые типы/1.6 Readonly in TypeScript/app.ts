const skillsIT: readonly [number, string] = [1, 'Dev'];
// skillsIT[0] = 2  ERROR

const skillsProgramming: readonly string[] = ['Dev', 'DevOps']
// skillsProgramming[0] = 'dev' ERROR

const skillsit: ReadonlyArray<string> = ['Dev', 'Devops']
const skillss: Array<string> = ['Dev', 'Devops']