function person(name,age) {
    return{
        name:name,
        age:age,
        greet(){
            console.warn(`Hello, my name is ${name} i am ${age} years old` );
        }
    }
}

const createUser = person('Adhil',25)
createUser.greet()




// // factory funcgion using call apply bind
// function person(name,age){
//     return {
//         name:name,
//         age:age,
//         greet(place){
//             console.log(`Hello, my name is ${this.name} and iam ${this.age } years old iam from ${place}`)
//         }
//     }
// }

// const create = person('Ameen',25)
// const another = {name:'fayeem',age:30}

// const binding = create.greet.bind(another,['mlp'])

// binding()