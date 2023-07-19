// Array
let color= ['Merah','Kuning','Hijau','Biru'];

// Menghitung Panjang Array
console.log(color.length);

// Menampilkan Array
console.log(color);

// Menampilkan beberapa array
console.log(color[0],color[3]);

// Menambahkan element baru diakhir
color.push('Hitam');
console.log(color);

// Menghapus element diaakhir
color.pop();
console.log(color);

// Menambah element baru diawal
color.unshift('Hitam');
console.log(color);

// Menghapus element diawal
color.shift();
console.log(color);

// Menghapus element pada array
// delete color[1];
// console.log(color);

// Menghapus element pada array
color.splice(1,2); // Menghapus dari index 1 sebanyak 2 element
console.log(color);

// Menambah element pada array
color.splice(1,0, 'Hijau');
console.log(color);


