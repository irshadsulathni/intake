let str = 'fayis is a super man'

function count(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count++
        }
    }


    
    return count + 1
}
console.log(count(str));





