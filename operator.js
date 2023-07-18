// Assignment Operator atau tanda sama dengan (=)
let x = 10;
let y = 5;
 
x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;


// Comparison Operator

// ==	Membandingkan kedua nilai apakah sama (tidak identik).
// !=	Membandingkan kedua nilai apakah tidak sama (tidak identik).
// ===	Membandingkan kedua nilai apakah identik.
// !==	Membandingkan kedua nilai apakah tidak identik.
// >	Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
// >=	Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
// <	Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
// <=	Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.


// Logical Operator

// &&	Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
// ||	Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).
// ! Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.

let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false
