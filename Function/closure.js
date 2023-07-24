// Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure. 
function init(){
    const name = 'Fairuz Ulum';

    function greet() { // Inner function, merupakan contoh closure
        console.log(`Hallo ${name}`);
    }

    greet();
}
init();

// Menggunakan return
function newInit(){
    const name = "Fairuz Ulum";
    
    function greet(){
        console.log(`Morning ${name}`);
    }

    return greet;
}

const myFunction = newInit();
myFunction();

// Contoh program Counter yang dibuat dengan closure
const add = () =>{
    let counter = 0;
    return () => {
        return ++counter;
    };
}

const addCounter = add();
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());




