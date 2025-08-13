const heights = [65, 35, 57, 3, 23, 56, 687, 8, 2324, 46]

function getmax(heights) {
    let max2 = heights[0]
    for (const num of heights) {
        // if (num > max) {
        //     max = num;
        // }
        max2=Math.max(max2,num)
    }
    return max2;
}
console.log(getmax(heights))