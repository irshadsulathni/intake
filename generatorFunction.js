function* decresing(start, limit, deff){
    for(let num = start; num>= limit; num-=deff){
        yield num
    }
}

for(let line of decresing(1000,0,50) ){
    console.log(line)
}

// printing multiplication table using generator faunction 




function* table(num,limit = 10){
    for(let i = 1; i<= limit; i++){
        yield `${i} * ${num} = ${ num * i } ` 
    }
}

for(let mul of table(10)){
    console.log(mul)
}