function testing(place){
    console.log(`Hello, my name ${this.name} i am ${this.age} years old & iam from ${place}`)
}

const person1 = { name:'Ameen', age:25 }

testing.call(person1,'Malappuram')

const person2 = {name : 'Irshad ', age:22}
testing.apply(person2,['Thrissur'])

const person3 = {name:'Fayeem',age:24}

const binding = testing.bind(person3,'Kannur')
binding()