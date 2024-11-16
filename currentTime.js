// const fs = require('fs')

// const date = new Date()
// const current = date.toISOString()

// fs.writeFile('date1.txt',current,(err)=>{
//     if (err) {
//         console.log('facing some error');
        
//     }else{
//         console.log('data saved success');
        
//     }
// })

// fs.unlink('date.txt',(err)=>{
//     if (err) {
//         console.log('some error',err);
//     }
//     console.log('success');
    
// })

const fs = require('fs')

const date = new Date().toDateString()

fs.writeFile('date.txt',date,(err)=>{
    if (err) {
        console.log('cant write ',err);
    }
    console.log('success'); 
})

fs.unlink('date.txt',(err)=>{
    if (err) {
        console.log('facing some issues',err);
    }
    console.log('deleted');
    
})