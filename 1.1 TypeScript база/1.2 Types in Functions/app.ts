function getFullName(firstName: string, surname: string): string {
    return `Hello my name is ${firstName} and my surname is ${surname}`;
}


const getFullNameArray = (firstName: string, surname: string): string => {
    return `${firstName} ${surname}`;
}

console.log(getFullName('Aziret', 'Dzhumabekov'))