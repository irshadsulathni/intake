function secondLargest(arr) {
    let max = arr[0]
    let sec = arr[0]
    for(let i = 0 ; i <arr.length; i++){
        if(arr[i] > max){
            sec = max
            max = arr[i]
        }else if(arr[i] > sec && arr[i] < max){
            sec = arr[i]
        }
    }
    return sec
}

let arr = [1,2,3,65,4,7,8,9]

console.log(secondLargest(arr))

let second = arr[0]

let max = arr.reduce((acc,val)=>{
    if(val > acc){
        second = acc
        acc = val
    }else if( val > second && val !== acc){
        second = val
    }

    
    return acc
})


console.log(second)
