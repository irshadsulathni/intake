const people = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 45 },
    { name: "Charlie", age: 32 },
    { name: "Diana", age: 52 },
    { name: "Edward", age: 39 }
  ];

  let maxAge = people[0]

  for(let i = 1; i < people.length; i++){
    if(people[i].age < maxAge.age){
        maxAge = people[i]
    }
        
  }

  console.log(maxAge.name);
  