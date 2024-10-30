function isPal(str) {
    let reverse = str.split('').reverse().join('')

    return str === reverse
}

let str = 'hello'

console.log(isPal(str));
