//Output ke terminal
console.log("Hello World!");



//Expression
5; // Baris kode ini merupakan expression karena interpreter akan membaca kode ini dan menghasilkan nilai 5.
2 + 3; // Baris kode ini juga merupakan expression. Interpreter mengevaluasi kode dan juga akan menghasilkan nilai 5.



//statement
var yourName;
let yourAge;
const numberOfDays = 365;  // declaration statement



//Komen
// Ini merupakan komentar satu baris, kode di bawah tidak akan dijalankan
// console.log("Halo!");
/* Ini merupakan komentar dengan lebih dari satu baris
Teks apapun yang berada disini akan dijadikan komentar.
Ketika menggunakan ini, jangan lupa untuk menutupnya.
*/



//Variabel
let lastName;
lastName = "Skywalker";

console.log(lastName);

/* output
Skywalker
*/

let lastName1 = "Skywalker";

console.log(lastName1);

/* output
Skywalker
*/

//let fullName = let lastName2; // Error karena let lastName2 adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
//let fullName1 = (lastName3 = "Skywalker"); // (lastName3 = "Skywalker") merupakan expression, sehingga kode ini tidak error.
//let fullName2 = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.

/*syarat variabel
    Harus dimulai dengan huruf atau underscore (_).
    Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
    Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
    Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)
*/



//Constant
const z = 100;
console.log(z);
z = 200;
console.log(z)

/* TypeError: Assignment to constant variable. */