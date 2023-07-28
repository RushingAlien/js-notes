[
  {
    "id": 14,
    "title": "Belajar Fundamental Aplikasi Android",
    "author": "Google ATP"
  },
  {
    "id": 51,
    "title": "Belajar Membuat Aplikasi Android untuk Pemula",
    "author": "Google ATP"
  },
  {
    "id": 123,
    "title": "Belajar Dasar Pemrograman Web",
    "author": "Dicoding Indonesia"
  },
  {
    "id": 163,
    "title": "Belajar Fundamental Front-End Web Development",
    "author": "Dicoding Indonesia"
  }
]

//Destructuring Objek
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18
}
  
const { firstName, lastName, age } = profile;
  
console.log(firstName, lastName, age)
  
/* output:
John Doe 18
*/


//Destructuring ke variabel yang sudah dideklarasi
let firstName1 = "Dimas";
let age1 = 20;
 
// menginisialisasi nilai baru melalui destructuring object
({ firstName1, age1 } = profile);
 
console.log(firstName);
console.log(age);
 
/* output:
John
18
*/



//Nilai default
const profile1 = {
  firstName: "John",
  lastName: "Doe",
  age: 18
}
 
 
const { firstName2, age2, isMale = false } = profile;
 
console.log(firstName2)
console.log(age2)
console.log(isMale)
 
/* output:
John
18
undefined
*/


//Penamaan nama variabel lokal
const profile2 = {
  firstName: "John",
  lastName: "Doe",
  age: 18
}
 
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile2;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
 
 
/* output:
John
Doe
18
*/



//Destructuring Array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
 
/* output:
Seafood
Salad
Nugget
Soup
*/


//Loncat nilai
const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [, , thirdFood1 ] = favorites1;
 
console.log(thirdFood);
 
/* output:
Nugget
*/


//Deustructuring ke variabel yang sudahada
favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);
 /* output:
Seafood
Salad
*/

//Melakukan penukaran nilai dengan desutrcutring
let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/


//Nilai default
favorites = ["Seafood"];
 
const [myFood1, herFood1 = "Salad"] = favorites
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
Salad
*/