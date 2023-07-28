/*
    for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
      // do something
    }
*/


//For loop
for(let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  /* output
  0
  1
  2
  3
  4
  */

let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
  console.log(arrayItem)
}

/* output
Luke
Han
Chewbacca
Leia
*/



//While
let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}


//do-while
let i1 = 1;

do {
  console.log(i1);
  i1++;
} while (i1 <= 100);


//infinite loop

let i2 = 1;
     
while (i2 <= 5) {
  console.log(i2);
}