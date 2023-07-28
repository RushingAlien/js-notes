class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }
 
  get chassisNumber() {
    return this._chassisNumber;
  }
 
  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }
 
  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
 
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
 
  _generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
 
const car = new Car('BMW', 'red', 200);
 
console.log(car._chassisNumber);
car._chassisNumber = 'BMW-1';
console.log(car._chassisNumber);
console.log(car._generateChassisNumber());
 
/* Output:
BMW-85
BMW-1
BMW-667
*/



//Membuat properti menjadi private dengan #
class Carr {
    #chassisNumber = null; //enclosing class
    
    constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
    }
    
    get chassisNumber() {
    return this.#chassisNumber;
    }
    
    set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
    }
    
    // Methods
    drive() {
    console.log(`${this.brand} ${this.color} is driving`);
    }
    
    reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
    }
    
    turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }
    
    #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
}