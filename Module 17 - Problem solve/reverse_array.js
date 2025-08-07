let numbers=[1,2,3,4,5]

const reversed=[]

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
    reversed.unshift(numbers[i])
}

console.log(reversed)


const reversed2=[];
for(let i=numbers.length-1;i>=0;i--){
   
    reversed2.push(numbers[i])
}

console.log(reversed2)


const reversed3=[]
for (const number of numbers) {
    reversed3.unshift(number)
}
console.log(reversed3)



numbers.reverse()
console.log(numbers)