function logId(id: string | number | boolean){
    console.log(id)
    // console.log(id.toLowerCase()) НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ МЕТОДЫ СТРОК ЧИСЕЛ И БУЛЕВЫХ ЗНАЧЕНИЙ
    if ( typeof id === 'string'){
        console.log(id.toLowerCase());
    }
    else if (typeof id === 'number'){
        console.log(id.toFixed())
    }
    else{
        console.log(id.valueOf())
    }
    // else{
    //     console.log(id) // number or boolean type
    // }
}

function logError(err: string | string[]){
    if (Array.isArray(err)){
        console.log(err)
    }
    else{
        console.log(err)
    }
}

function logObject(obj: { a: number} | { b: number }){
    if ('a' in obj) {
        console.log(obj.a)
    }
    else{
        console.log(obj.b)
    }
}

function logMultiplyIds(a: string | number, b: boolean | string){
    if ( a === b) {
        
    } 
    else {
        console.log(a)
    }
}

logId(1.5325);
logId('ASD');
logId(true)
