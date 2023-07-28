


// Undefined
let x;
console.log(typeof(x));

/* output: undefined */



// Number
let xx = 10;
console.log(typeof(xx))

/* output: number */

let y = 17.25;
console.log(typeof(y))

/* output: number */

/* bisa melakukan operasi berikut kepada Number :
+ - / * % **  */

let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* output:
21
3
108
1.3333333333333333
3
*/

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */



// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/



// Strings
let greet = "Hello";
console.log(typeof(greet))

/* output: string */

const question = '"What do you think of JavaScript?" I asked';

console.log(question)

/* output: "What do you think of JavaScript?" I asked */

const answer = '"I think it\'s awesome!" he answered confidently';

console.log(answer);

console.log("Windows path: C:\\Program Files\\MyProject");

let greet1 = "Hello";
let moreGreet = greet1 + greet1;
console.log(moreGreet);

/* output: HelloHello */

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */



//Boolean
let x1 = true;
let y1 = false;

console.log(typeof(x1))
console.log(typeof(y1))

/* output: 
boolean
boolean
*/

const a1 = 10;
const b1 = 12;

let isGreater = a1 > b1;
let isLess = a1 < b1;

console.log(isGreater);
console.log(isLess);

/* output:
false
true
*/




//Null

let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/




//Symbol
const id = Symbol("id");

console.log(id);

/* output
Symbol(id)
*/
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

/* output
false
*/