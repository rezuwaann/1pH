let a = 3;
let b = 4;

let temp = a;
a = b;
b = temp;

console.log(a, b);

[a, b] = [b, a];

console.log(a, b);

