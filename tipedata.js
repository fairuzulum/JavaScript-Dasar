// Number
console.log('.........NUMBER..........');
let a = 10; // Tipe data angka ditulis seperti angka pada umumnya
console.log(a);
console.log(typeof(a));

let b = 12.5; // Bilangan desimal pada JavaScript menggunakan titik (.) pada bilangan desimalnya
console.log(b);
console.log(typeof(b));


// BigInt (Tipe data yang lebih besar daripada Number)
console.log('.........BIGINT..........');
const bigNumber = 1234567890123456789012345678901234567890n; // Untuik membedakan number dan bigint tambahkan "n" diakhir angka
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);


// String
console.log('.........STRING..........');

let firstName = "Fairuz"; // Untuk menetapkan nilai sebagai string maka ditandai dengan petik satu ('') atau petik dua("")
let lastName = "Ulum";
console.log(firstName);

const fullName = firstName + " " + lastName;
console.log(`Hello, my name is ${fullName}.`);


// Boolean
console.log('.........BOOLEAN..........');
let x = true;
let y = false;
console.log(typeof(x));
console.log(typeof(y));


// Null
console.log('.........NULL..........');
let someLaterData = null;
console.log(someLaterData);


// Symbol 
console.log('.........Symbol..........');
const id = Symbol("id");
console.log(id);

