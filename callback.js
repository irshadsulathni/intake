function greet(name, callback){
    console.log('Hello ',name);
    callback()
}

function sayBye(){
    setTimeout(() => {
        console.log('GoodBye !');
    }, 2000);
}

greet('Ameen',sayBye)