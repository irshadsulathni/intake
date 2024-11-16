function titleCase(str) {
    return str.replace(/\b\w/g, char=> char.toUpperCase())
}

let str = 'my name is vinyak'

console.log(titleCase(str));
