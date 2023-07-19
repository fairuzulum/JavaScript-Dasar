// Array Multi Dimensi
const capital = new Map([
    ['Indonesia', 'Jakarta'],
    ['England', 'London']
])

// Mengetahui ukuran map
console.log(capital.size);

// Menampilkan map
console.log(capital);

// Menampilkan salah satu map dengan get
console.log(capital.get('Indonesia'));

// Menambahkan pasangan key value pada map dengan set
capital.set("Japanese","Tokyo");
console.log(capital.size);
console.log(capital);
