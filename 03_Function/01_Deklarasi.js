//Contoh
function multiply(a, b) {
    return a * b;
}

multiply(3, 4);

//Fungsi
function greeting() {
  console.log("Good Morning!")
}

greeting();

/* output
Good Morning!
*/


//Fungsi dengan parameter
function greeting1(name, language) {
    if(language === "English") {
      console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
      console.log(`Bonjour ${name}!`);
    } else {
      console.log(`Selamat Pagi ${name}!`);
    }
}
greeting1("Harry", "French");

/* output
Bonjour Harry!
*/

function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 2)
console.log(result)

/* output
20
*/


//Pengembalian nilai dengan return
function greeting2(name, language) {
  if(language === "English") {
    return `Good Morning ${name}!`
  } else if (language === "French") {
    return `Bonjour ${name}!`;
  } else {
    return `Selamat Pagi ${name}!`;
  }
}

let greetingMessage = greeting2("Harry", "French");
console.log(greetingMessage);

/* output
Bonjour Harry!
*/


//Fungsi melalui Expression
const greeting3 = function(name, language) {
    if(language === "English") {
      return "Good Morning " + name + "!";
    } else if (language === "French") {
      return "Bonjour " + name + "!";
    } else {
      return "Selamat Pagi " + name + "!";
    }
  }
  
  console.log(greeting3('Ron', 'English'));
  
  /* output
  Good Morning Ron!
   */