function rotateArray(arr, positions) {
    const n = arr.length;
    const result = new Array(n);
    
    for (let i = 0; i < n; i++) {
        result[(i + positions) % n] = arr[i];
    }
    return result;
}

const arr = [1,2,3,4,5,6,7,8,9]

console.log(rotateArray(arr,3));


