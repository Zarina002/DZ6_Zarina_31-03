function processArray(arr, func) {
    return arr.map(func)
}

function double(x) {
    return x * 2
}

const myArray = [1, 2, 3, 4, 5, 6,]


const result = processArray(myArray, double)
console.log(result)


