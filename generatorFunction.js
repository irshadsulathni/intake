// function* decresing(start, limit, deff){
//     for(let num = start; num>= limit; num-=deff){
//         yield num
//     }
// }

// for(let line of decresing(1000,0,50) ){
//     console.log(line)
// }

// printing multiplication table using generator faunction 




function* table() {
    for (let i = 1000; i >= 50 ; i -= 50) {
        yield i
    }
}

for(let val of table()){
    console.log(val);
}