function fetchWithAuth (url: string, method: 'post' | 'get'): 1 | -1{
    return 1
}

fetchWithAuth('1', 'post')
fetchWithAuth('asd', 'get')

let method = 'post'

fetchWithAuth('s', method as 'post');


// let a: 'asd' = 'asd';
// a = 'asdd'