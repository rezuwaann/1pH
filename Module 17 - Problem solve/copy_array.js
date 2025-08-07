const product=[25,25,25]
const comp_products=product; //reference based copy


comp_products[0]=15;
product[1]=55;



console.log(product)
console.log(comp_products)




//not reference based
const new_numbers=Array.from(product)
const new_numbers2=[].concat(product)
const new_numbers3=[...product]

product[0]=0;
console.log(new_numbers)
console.log(new_numbers2)
console.log(new_numbers3)

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}