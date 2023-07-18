
// Destructuring Object
const profile = {
    firstName: 'Wulan',
    age: 18,
    gender: 'Woman'
}
const {firstName, age, gender} = profile;
console.log( firstName, age, gender);


// Destructuring Assignment
const newProfile = {
    newName: 'Fairuz',
    age: 19,
    gender: 'Man'
}

let newName = 'Ulum';

({newName} = newProfile);
console.log(newName); 