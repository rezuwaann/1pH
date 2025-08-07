const exam_marks = [
    [98, 87, 45, 12, 63],
    [54, 89, 74, 23, 11],
    [45, 87, 12, 56, 45],
    [78, 65, 32, 87, 54]
]

console.log(exam_marks[0])
exam_marks [0].push(69);
console.log(exam_marks)
exam_marks[1].pop()
console.log(exam_marks)

for (const marks of exam_marks) {
    console.log(marks)
}