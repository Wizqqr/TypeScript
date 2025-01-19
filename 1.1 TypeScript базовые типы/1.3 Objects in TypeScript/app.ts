function getFullNameUser(userEntity: { firstName: string, surname: string,}): string {
    return `Hello my name is ${userEntity.firstName} and my surname is ${userEntity.surname}`;
}

const user = {
    firstName: 'Aziret',
    surname: "Dzhumabekov",
    city: 'Bishkek',
    age: 16,
    skills: {
        dev: true,
        mobile: false
    }
}

console.log(getFullNameUser(user));
