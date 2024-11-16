let obj = [{ab:25},{ab:30},{ab:50}]

let sum = obj.reduce((acc,val)=> acc + val.ab ,0)

console.log(sum);
