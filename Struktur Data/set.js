// Set
const numberSet = new Set([1,3,1,4,6,5]);
console.log(numberSet); 
// Pada set data yang ditampilkan tidak ada duplikasi
// Maka output yang dihasilkan dari code diatas adalah
// Set(5) { 1, 3, 4, 6, 5 }


// Menambahkan data kedalam set
numberSet.add(2);
numberSet.add(9);
numberSet.add(7);

console.log(numberSet);


// Menghapus nilai set 
numberSet.delete(1);
console.log(numberSet);

// NOTE :: Set tidak memiliki urutan atau index, sehingga argument yang dimasukan kedalam fungsi delete adalah nilai yang ingin dihapus