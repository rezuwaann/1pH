function oddAverage(arr) {
    let sum = 0,odd=0;
    for (const item of arr) {
        if (item % 2 !== 0) {
            sum += item;
            odd++;
        }
    }
    console.log(sum)
    let average=sum/odd;
    console.log(average)
}

let arr=[1,2,3,4,5,6,7,8,9,10]
oddAverage(arr)
