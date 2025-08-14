function multiply(num1, num2) {

    if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
        return 'Please provide a number'
    }
    const multi = num1 * num2;
    return multi;
}

const result = multiply(2, 'hi')
console.log(result)


function getSecond(numbers) {
    if (Array.isArray(numbers)==false) {
        return 'Please provide an array'
    }
    return numbers;
}

let numarray = getSecond([12, 34, 2, 3, 1, 3])
numarray = getSecond(9)
console.log(numarray)


