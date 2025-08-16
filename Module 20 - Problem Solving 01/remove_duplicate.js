let arr = [1, 2, 1, 2, 34, 5, 3, 53, 3, 6, 5, 3, 34, 5, 4]

function removeDuplicate(arr) {
    let unique = []
    for (const item of arr) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    console.log(arr)
    console.log(unique)
}
removeDuplicate(arr)