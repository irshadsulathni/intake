function freequecy(str) {
    let count = {}

    for(let key of str){
        if(count[key]){
            count[key]++
        }else{
            count[key] = 1
        }
    }
    return count
}

const str = 'irshad sulthani'

console.log(freequecy(str));
