//Assignment
let x = 10;
let y = 5

x += y;

console.log(x);

/* output
15
*/

let x1 = 10;
let y1 = 5;
 
x1 += y1; // artinya -> x = x + y;
x1 -= y1; // artinya -> x = x - y;
x1 *= y1; // artinya -> x = x * y;
x1 /= y1; // artinya -> x = x / y;
x1 %= y1; // artinya -> x = x % y;




//Comparison
let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a !== b);

/* Perbedaan antara “Sama” dan “Identik”

Dalam operator komparasi di JavaScript, hal yang menjadi sedikit “tricky” adalah membedakan antara “sama” (==) dan “identik” (===).

Kita sudah mengetahui bahwa setiap nilai pasti memiliki tipe data baik itu number, string atau boolean. Contohnya sebuah string “10” dan number 10 merupakan hal yang serupa, tetapi keduanya tidak benar-benar sama.

Hal inilah yang membedakan antara sama dan identik pada JavaScript. Jika kita ingin membandingkan hanya dari kesamaan nilainya kita bisa gunakan == tapi jika kita ingin membandingkan dengan memperhatikan tipe datanya kita gunakan ===.
*/

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/




//Logical
let a1 = 10;
let b1 = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

/* output
true
false
true
true
false
false
*/
