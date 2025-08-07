const numbers = [12, 14, 100, 1, 23, 3, 5, 23, 224, 225, 234]

numbers.sort()
console.log(numbers)

numbers.sort(function (a, b) { return a - b })
console.log(numbers)

numbers.sort(function (a, b) { return b - a })
console.log(numbers)