type User = {
    name: string,
    age: number,
    itSkills: string[]
}

type Role = {
    id: number;
}

// type UserWithRole = User | Role;
type UserWithRole = User & Role;
// type UserWithRole = {
//     user: User,
//     role: Role
// }

let userName: UserWithRole = {
    name: 'User',
    age: 17,
    itSkills: ['it', 'te'],
    id: 1
}