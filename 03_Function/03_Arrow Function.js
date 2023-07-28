//Regular Function
// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}

//Arrow Function
// function expression
const sayHello1 = (greet) => {
    console.log(`${greet}!`)
}
    
const sayName1 = (name) => {
    console.log(`Nama saya ${name}`)
}

//Contoh
const sayName2 = name => {
  console.log(`Nama saya ${name}`)
}

sayName2("Leia");

/* output
Nama saya Leia
 */

//Tanpa parameter
const sayHello2 = () => {
  console.log("Selamat pagi semuanya!")
};

sayHello2();

/* output
Selamat pagi semuanya!
 */

//function satu baris tidak perlu kurung kurawal
const sayName3 = name => console.log(`Nama saya ${name}`);
sayName3("Leia");

const sayHello3 = () => console.log("Selamat pagi semuanya!");
sayHello3();

/* output
Nama saya Leia
Selamat pagi semuanya!
 */

//Return
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */