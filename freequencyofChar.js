function freequecy(str) {
    let count = {}

    for(let key of str){
        if(count[key]){
            count[key]++
        }else{
            count[key] = 1
        }
    }
    return count
}

const str = 'irshad sulthani'

console.log(freequecy(str));

function frequency(str) {
    let count = {};

    // Count the frequency of each character
    for (let key of str) {
        if (count[key]) {
            count[key]++;
        } else {
            count[key] = 1;
        }
    }

    // Find the character with the highest frequency
    let maxChar = '';
    let maxCount = 0;
    for (let key in count) {
        if (count[key] > maxCount) {
            maxChar = key;
            maxCount = count[key];
        }
    }

    return { maxChar, maxCount };
}

const str1 = 'irshad sulthani';
console.log(frequency(str1));  
