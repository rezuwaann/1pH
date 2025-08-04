const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb',
    monitor: 'hp'
}

const keys = Object.keys(computer)
console.log(keys)

const values = Object.values(computer)
console.log(values)


const college = {
    name: 'vnc',
    class:10,
    unique: {

        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

console.log(college.unique.result.merit)
delete college.class
console.log(college)

for (const prop in computer){
    console.log(prop)
    console.log(computer[prop])
}


const key=Object.keys(computer)
console.log(key)//array

for(const k of key){
    console.log(k, computer[k])
}

