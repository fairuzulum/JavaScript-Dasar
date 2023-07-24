// Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya.
const user = {
    id: 1,
    displayName: 'Fairuz',
    fullName: 'Fairuz Ulum',
};

function introduce({displayName, fullName }){
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);


// Memberikan nilai default pada parameter
function exsponentFormula(baseNumber, exponent = 2){
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exsponentFormula(3);

// Rest Parameter
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

console.log(sum(1,2,3,4,5));