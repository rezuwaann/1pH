const employees = [
    { name: 'Ashik', designation: 'Content Writer', salary: 25000 },
    { name: 'Atik', designation: 'Developer', salary: 29000 },
    { name: 'Abdul Rahim', designation: 'Digital Marketer', salary: 21000 }
]

console.log(employees[0].name)

for (const employee of employees) {
    console.log(employee.name, employee.designation, employee.salary)
}

for (const emp of employees) {
    const person=emp;
    const personInfo=emp.name+' ; '+emp.designation+' ; '+emp.salary;
    console.log(personInfo)
}