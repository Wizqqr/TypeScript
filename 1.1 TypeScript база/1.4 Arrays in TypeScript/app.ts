const skills: string[] = ['Dev', 'Mobile', 'Testing'];

for ( const skill of skills ) {
    console.log(skill.toLowerCase())
}

const res = skills
    .filter((s: string) => s !== 'Dev')
    .map(s => s + '! ')
    .reduce((a,b) => a + b)


console.log(res)