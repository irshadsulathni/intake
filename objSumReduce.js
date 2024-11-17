let arr = [{ab:5},{ab:10},[{ae:20}]]

let flat = arr.flat().map((item) => item.ab)


let sum = arr.reduce((acc,val)=>{
    if (Array.isArray(val)) {
        return acc + val.reduce((subAcc, subVal) => subAcc + subVal.ab, 0);
    }
    return acc + val.ab

},0)



console.log(sum)