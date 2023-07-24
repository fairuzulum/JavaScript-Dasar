// Global Variable, dapat diakses pada seluruh script
const a = 'a';

function parent(){
    // Local variable, dapat diakses pada parent() dan child()
    const b = 'b';

    function child(){
        // Local Variable, hanya dapat diakses pada fungsi child()
        const c = 'c';
    }
}