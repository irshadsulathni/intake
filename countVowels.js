function countVowels(str){
    let vow = ['A','E','I','O','U','a','e','i','o','u']
    let count = 0
    for(let i = 0; i < str.length ; i++){
        if (vow.includes(str[i])) {
            count++
        }
    }
    return count
}

const str = 'hello'

console.log(countVowels(str));
