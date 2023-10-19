// Membuat Object

const car = {
    // propertie
    brand: 'Ford',
    color:'white',
    maxSpeed: 200,

    // Method
    drive:() => {
        console.log('driving');
    },
    reverse:() => {
        console.log('reversing');
    },
    turn:() => {
        console.log('turning');
    }
}

console.log(car.brand); 
console.log(car.color);
console.log(car.maxSpeed); 
car.drive(); 
car.reverse(); 
car.turn(); 