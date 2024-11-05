const promise1 = new Promise((resolve,reject)=>{
     const letter = 'b';
     setTimeout(() => {
        if (letter === 'a') {
            resolve('the promise is resolved')
        }else{
            reject('the promise is rejected')
        }
     }, 2000);
})
promise1.then((result)=>{
    console.log(result);
}).catch((reject)=>{
    console.log(reject);
})

// promise using of finding sum of number

function sum(...num){
    return new Promise((resolve,reject)=>{
        if(!num.every(val =>  typeof val === 'number')){
            reject('not input')
        }else{
            const total = num.reduce((acc,val)=> acc + val ,0 )
            resolve(total)
        }
    })
}

sum('a',2,3,4,5,6)
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})







