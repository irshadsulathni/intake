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







