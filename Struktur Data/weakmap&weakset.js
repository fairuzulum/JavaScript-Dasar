// Perbedaan weakmap dan map

// MAP
const visitsCountMap = new Map();

function countUser(user){
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = {name: "Jonas"};
countUser(jonas); // Menambahkan user "Jonas"

jonas = null; // Data object "Jonas" Dihapus

// Delay dibutuhkan untuk menunggu Gerbage collector
setTimeout(function() {
    console.log(visitsCountMap);
},10000)


// WEAKMAP
const newVisitsCountMap = new WeakMap();

function newCountUser(newUser){
    let newCount = newVisitsCountMap.get(newUser) || 0;
    newVisitsCountMap.set(newUser, newCount + 1)
}

let woman = {name: "Wulan"}; // Weakmap harus berupa array atau Object
newCountUser(woman); // Menambahkan data

woman = null; // Data dihapus

setTimeout(function(){
    console.log(newVisitsCountMap);
}, 10000)

// NOTE :: Data yang sudah tidak terjangkau dalam weakmap maka referensi ke memorinya akan dihapus, beda dengan map yang masih bisa diakses
// Proses diatas disebut Gerbage Collection
