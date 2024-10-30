// const express = require('express')

// const app = express()

// app.get('/',(req,res)=>{
//     res.send('hello hy')
// })

// const port = 3000

// app.listen(port,()=>{
//     console.log(`http://localhost:${port}`);
    
// })
// const fs = require('fs');

// // Get the current date and time
// const currentDateTime = new Date().toString();


// fs.writeFile('currentDateTime.txt', currentDateTime, (err) => {
//     if (err) throw err;
//     console.log(currentDateTime);
// });

// const http = require('http')

// const server = http.createServer((req,res)=>{
    
//     if(req.url === "/home"){
//         res.write("you are in home")
//         res.end()
//     }
// })

// const port = 3000

// server.listen(port,()=>{
//     console.log(`http://localhost:${port}`);
    
// })


// const express  = require('express')

// const app = express()

// app.get('/sum',(req,res)=>{
//     const { num1 , num2 } = req.query

//     const number1 = parseFloat(num1)
//     const number2 = parseFloat(num2)

//     const sum = number1 + number2

//     res.send(` sum = ${sum}`)
// }).listen(3000)

// const array = [1,2,3,1,2,3,3,6,45,4,8,69,36,4,5,2,1,3,6,4,7,5]

// function removeDupe(arr){
//     let dupe = []
//     for(let i = 0; i<arr.length;i++){
//         let isDupe = false;
//         for(let j = 0; j < dupe.length; j++){
//             if(arr[i] === dupe[j]){
//                 isDupe = true
//                 break;
//             }
//         }
//         if(!isDupe){
//             dupe.push(arr[i])
//         }
//     }
//     return dupe
// }

// console.log(removeDupe(array))


// const promise1 = new Promise((resolve,reject)=>{
//     // resolve('success 1')
//     // reject('rejected 1')
// })

// const promise2 = new Promise((resolve,reject)=>{
//     reject('rejected 2')
//     // resolve('success 2')
// })
// const promise3 = new Promise((resolve,reject)=>{
//     // resolve('success 3')
//     reject('rejected 3')
// })

// const allpromise = Promise.race([promise1,promise2,promise3])

// allpromise.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

// const express = require('express')

// const app = express()

// app.get('/sum',(req,res)=>{
//     const { num1 , num2 } = req.query;
//     const number1 = parseFloat(num1)
//     const number2 = parseFloat(num2)
//     const sum = number1 + number2
//     res.send(`the sum of numbers = ${sum}`)
// })
// const port = 3000

// app.listen(port,()=>{
//     console.log(`http://localhost:${port}`);
    
// })


// example of call apply bind

// function intro(gree,place){
//     console.log(`${gree}, My name is ${this.name}  i am from ${this.place} and i ${this.age} years old and i am studying in ${place}`)
// }

// const person = {
//     name:'Ameen',
//     age:23,
//     place:'Malappuram'
// }

// const me = intro.bind(person)

// me('hi','calicut')