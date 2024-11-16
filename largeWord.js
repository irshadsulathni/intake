let str =  'Hell Fayis Is a goodadd boy'

function count(str){
    let words = str.split(' ')
    let sorted = words.sort((a,b)=> b.length - a.length )
    return sorted[0]
}

console.log(count(str))