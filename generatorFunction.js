function* decresing(start, limit, deff){
    for(let num = start; num>= limit; num-=deff){
        yield num
    }
}

for(let line of decresing(1000,0,50) ){
    console.log(line)
}

