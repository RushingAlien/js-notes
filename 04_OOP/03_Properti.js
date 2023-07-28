//Properti
class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
    }
}

const car1 = new Car('BMW', 'red', 200, 'b-1');
const car2 = new Car('Audi', 'blue', 220, 'a-1');
const car3 = new Car('BMW', 'black', 250, 'b-2');

console.log(car1);
console.log(car2);
console.log(car3);
 
/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'b-1' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'a-1' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'b-2' }
*/

//Mengisi nilai properti di class
class Carr {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // Set a random chassis number
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}
 
const carr1 = new Carr('BMW', 'red', 200);
const carr2 = new Carr('Audi', 'blue', 220);
const carr3 = new Carr('BMW', 'black', 250);
 
console.log(carr1);
console.log(carr2);
console.log(carr3);
 
/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-558' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'Audi-215' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'BMW-799' }
*/


//Getter dan Setter
// Tanpa getter dan setter, rentan modifikasi nilai
class Carrr {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
 
const carrr = new Car('BMW', 'red', 200);
carrr.chassisNumber = 'BMW-1';
 
console.log(carrr);
 
/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-1' }
*/


// Setter dan Getter
class User {
  constructor(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
 }
 
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
 
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
 
const user = new User('John', 'Doe');
console.log(user);
console.log(user.fullName);
 
user.fullName = 'Fulan Fulanah';
console.log(user);
console.log(user.fullName);
 
/* Output:Sebab kita menetapkan getter dan setter untuk properti fullName, maka kita bisa mengakses properti tersebut melalui instance User. Ketika kita coba mendapatkan nilai properti fullName dengan cara user.fullName, method get
User { firstName: 'John', lastName: 'Doe' }
John Doe
User { firstName: 'Fulan', lastName: 'Fulanah' }
Fulan Fulanah
*/

class Carrrr {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
 
  get chassisNumber() {
    return this._chassisNumber;
  }
 
  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }
}
 
const carrrr = new Carrrr('BMW', 'red', 200);
console.log(carrrr.chassisNumber);
carrrr.chassisNumber = 'BMW-1';
console.log(carrrr.chassisNumber);
 
/* Output:
BMW-232
you are not allowed to change the chassis number
BMW-232
*/