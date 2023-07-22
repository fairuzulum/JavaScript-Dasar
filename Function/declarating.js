function greeting(name, language){
    if(language == "Indonesia"){
        console.log(`Selamat Pagi ${name}`);
    }else if(language == 'English'){
        console.log(`Good Morning ${name}`);
    }else if(language == 'Japanese'){
        console.log(`Ohayou Gozaimasu ${name}`);
    }
}

greeting('Fairuz','Japanese');

// Return (Fungsi dapat membalikan sebuah nilai)

function multiply(a,b){
    return a*b;
}

let result = multiply(5,10);
console.log(result);