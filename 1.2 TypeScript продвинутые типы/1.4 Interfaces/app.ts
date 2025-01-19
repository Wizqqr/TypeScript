interface UserName{
    name: string;
    age: number,
    skills: string[]
}

interface RoleName {
    roleId: number
}

interface UserNameWithRole extends UserName, RoleName{
}

let userB: UserNameWithRole= {
    name: 'asd',
    age: 33,
    skills: ['1', '23'],
    roleId: 1
}