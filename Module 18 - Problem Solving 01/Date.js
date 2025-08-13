const today = new Date()
const today2 = new Date('2062-10-09')
console.log(today)
console.log(today2.getDay()) //- 0 = Sunday
console.log(today2.getMonth())
console.log(today2.getFullYear())

const specificDate = new Date(2091, 0, 26)
console.log(specificDate)
specificDate.setMonth(10) //month index
console.log(specificDate.toString())
console.log(specificDate.toLocaleString('en-GB'))//great britain style

//unix epoc

