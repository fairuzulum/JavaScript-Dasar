// Object = Terdiri dari key dan value
const mahasiswa = {
    nama: "Fairuz", // Gabungan key dan value disebut property
    umur: 19,
    jurusan: "Teknik Informatika",
}

// Cara mengambil object
console.log(mahasiswa);

// Mengambil salah satu object atau lebih
console.log(`Nama saya ${mahasiswa.nama} dan Umur saya ${mahasiswa.umur} tahun`);


// Mengubah isi key pada object
mahasiswa.nama = "Wulan";
mahasiswa.umur = 18;

console.log(mahasiswa);


// Menghapus property pada object
delete mahasiswa.umur;
console.log(mahasiswa);
