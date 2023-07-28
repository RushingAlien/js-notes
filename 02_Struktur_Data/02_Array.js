//Membuat array
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

//Mencetak array dengan indeks
let myArray1 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray1[1]);

/* output:
42.5
*/

//Out of bounds
let myArray2 = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray2[5]);

/* output:
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/



//Memasukkan nilai ke array
const myArray3 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.push('JavaScript');
console.log(myArray3);

/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */


//Mengeluarkan nilai terkahir dari array
const myArray4 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray4.pop();
console.log(myArray4);

/* output
[ Cokelat, 42.5, 22, true ]
*/


//Menabmahkan dan Mengeluarkan nilai pertama dari array 
const myArray5 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray5.shift();
myArray5.unshift("Apple");

console.log(myArray5);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/


//Menghapus nilai dari array
const myArray6 = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray6[1];
console.log(myArray6);

/* output
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
*/


//Menghapus dan mengatur ulang indeks
const myArray7 = ["Cokelat", 42.5, 22, true, "Programming"];

myArray7.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray7);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/

//Menambahkan ke nilai ke indeks tertentu
const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month);

month.splice(1, 0, 'February');
console.log('after splice: ', month);

/* output
before splice:  [ 'January', 'March', 'April', 'May' ]
after splice:  [ 'January', 'February', 'March', 'April', 'May' ]
*/


//Spread
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
     
console.log(favorites);
 
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites1);
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

/* output
Seafood Salad Nugget Soup
Seafood Salad Nugget Soup
*/

favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/
