function reverseStr(str){
    let revers = ''
    for (let i = str.length - 1; i >= 0 ; i--) {
        revers += str[i]
    }
    return revers
}

const str = 'hello'

console.log(reverseStr(str))