const numbers = [12, 22, 54, 65]
console.log(numbers.length)

console.log(numbers)
numbers.push(44, 55, 66, 87,11,33,66,24,65)
console.log(numbers)
numbers.pop()
console.log(numbers)


//shift removes the first element 
numbers.shift()
console.log(numbers)

numbers.unshift(69)
console.log(numbers)



const friends=['balam','kalam','salam','gelam','pailam']

console.log(friends.includes('gelam'))
console.log(friends.includes('khailam'))

if (friends.includes('salam')) {
    console.log('party')
} else {
    console.log('no food.we are fasting')
}

console.log(friends.indexOf('pailam'))


const nums=[]
const food='string'

console.log(Array.isArray(nums))
console.log(Array.isArray(food))