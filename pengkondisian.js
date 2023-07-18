// if else
let x = 70;

if(x < 80){
    console.log('Nilai di bawah kkm');
}else{
    console.log('Nilai di atas kkm');
}

// if, else if
let language = ''; 
let greeting = 'Pilih bahasa dahulu'

if(language === "Indonesia"){
    greeting = 'Selamat Pagi';
} else if(language === "English"){
    greeting = 'Good Morning';
} else if(language === 'Japanese'){
    greeting = 'Ohayou Gozaimasu';
}

console.log(greeting);


// Ternary Operator atau Conditional expressions
// condition ? true expression : false expression
let y = 79;
let status = y >= 80 ? 'Nilai terpenuhi' : 'nilai tidak terpenuhi';
console.log(`Nilai : ${status}`);
