const people = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 45 },
    { name: "Charlie", age: 32 },
    { name: "Diana", age: 52 },
    { name: "Edward", age: 39 }
  ];

function aged(obj) {
  let aged = obj[0]
  for(let i = 0; i< obj.length; i++){
    if(obj[i].age > aged.age ){
      aged = obj[i]
    }
  }
  return `the oldest person is ${aged.name} and the age is: ${aged.age}`
}

console.log(aged(people));



  // console.log(`the greatesst age person is ${maxAge.name} , and his age is ${maxAge.age}`);
  
