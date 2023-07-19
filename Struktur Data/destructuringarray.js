const color = ['white','red','blue','green','black'];
const [firstColor, secondColor, thirdColor] = color;
console.log(firstColor);


// Pertukaran Nilai

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log('Ini adalah nilai x :' + x);
console.log('Ini adalah nilai y :' + y);
