function getBirthDate(ddmmyyyy){
    const string = ddmmyyyy.toString()
    const year = parseInt(string.slice(4))
    let today = new Date().getFullYear()

    return today - year
}

console.log(getBirthDate(14012001));
