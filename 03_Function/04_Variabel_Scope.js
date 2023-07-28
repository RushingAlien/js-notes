// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
    
function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
    // local variable, dapat diakses hanya pada fungsi child().
    const c = 'c';
    }
}


function multiply(num) {
  total = num * num;
  return total;
}

let total = 9;
let number  = multiply(20);

console.log("Nilai total", total)
console.log("Nilai number",number)

/* output
400
*/

function multiply1(num) {
    this.total = num * num;
    return this.total;
}

total = 9;
number  = multiply1(20);

console.log("Nilai total", total)
console.log("Nilai number",number)

/* output
400
*/

function multiply2(num) {
    let total = num * num;
    return total;
}

total = 9;
number  = multiply2(20);

console.log("Nilai total", total)
console.log("Nilai number",number)

/* output
400
*/

function multiply3(num) {
    let total = num * num;
    return this.total;
}

total = 9;
number  = multiply3(20);

console.log("Nilai total", total)
console.log("Nilai number",number)