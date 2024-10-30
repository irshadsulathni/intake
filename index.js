const fs = require('fs')

fs.readFile('sample.txt','utf-8',(err,data)=>{
    if(err) throw err

    console.log(data);
    
})




fs.writeFile('sample.txt','hello world',(err)=>{
    if (err) {
        throw err
    }
    console.log('file hase been writed');  
})

fs.unlink('sample.txt',(err)=>{
    if (condition) {
        
    }
})



const products = [
    { name: 'Laptop', price: 1500 },
    { name: 'Smartphone', price: 800 },
    { name: 'Tablet', price: 600 }
];

function mostCheapes(prod) {
    let cheap = prod[0]
    for(let i = 1; i < prod.length ; i++){
        if(prod[i].price < cheap.price){
            cheap = prod[i]
        }
    }
    return cheap.name
}

console.log(mostCheapes(products));








