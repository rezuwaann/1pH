const mobile = [
    { name: 'samsung', price: 79 },
    { name: 'samsung', price: 39 },
    { name: 'samsung', price: 749 },
    { name: 'samsung', price: 769 },
    { name: 'samsung', price: 7529 },
    { name: 'samsung', price: 719 },
    { name: 'samsung', price: 739 },
    { name: 'samsung', price: 779 }
]

let cheapest = mobile[0].price;
for (const item of mobile) {
   
    cheapest = Math.min(cheapest, item.price)
}
console.log(cheapest)