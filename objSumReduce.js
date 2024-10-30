let arr = [{ab:5},{ab:10},[{ab:20}]]

let flat = arr.flat().map((item) => item.ab)
console.log(Math.min(...flat))







let sum = arr.reduce((acc,val)=>{
    if (Array.isArray(val)) {
        return acc + val.reduce((subAcc, subVal) => subAcc + subVal.ab, 0);
    }
    return acc + val.ab

},0)

console.log(sum)