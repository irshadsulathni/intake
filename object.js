const people = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 45 },
    { name: "Charlie", age: 32 },
    { name: "Diana", age: 52 },
    { name: "Edward", age: 39 }
  ];

  console.log(Object.values(people.age));

  let maxAge = people[0]

  for(let i = 0; i < people.length ; i++){
    if (people[i].age > maxAge.age) {
      maxAge = people[i]
    }
  }




  // console.log(`the greatesst age person is ${maxAge.name} , and his age is ${maxAge.age}`);
  
