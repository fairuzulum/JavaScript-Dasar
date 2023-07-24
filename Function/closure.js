// Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure. 
function init(){
    const name = 'Fairuz Ulum';

    function greet() { // Inner function, merupakan contoh closure
        console.log(`Hallo ${name}`);
    }

    greet();
}
init();
