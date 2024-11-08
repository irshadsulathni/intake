const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ reject('p1 reject') },1000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ reject('p2 reject') },2000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ reject('p3 reject') },500)
})



const allPromise = Promise.any([p1,p2,p3])

allPromise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})