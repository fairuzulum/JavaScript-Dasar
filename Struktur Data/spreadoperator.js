// Array
const animal = ['dog','cat','bee','fish','lion'];
const color = ['white','blue','orange','green','black'];
console.log(...animal);
//Menggambungkan dua array dengan spread
const all1 = [...animal,...color];
console.log(all1);


// Object
const human={
    name: 'Fairuz',
    age: 19,
    gender: 'Man',
    address: 'Bekasi Utara',
}
const car={
    nameCar: 'Honda Civic',
    tipe: 'Turbo',
    color: 'Black',
}
console.log(human);
// Menggabungkan dua object dengan spread
const newobj = {...human,...car}; 
console.log(newobj);
