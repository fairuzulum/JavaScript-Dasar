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