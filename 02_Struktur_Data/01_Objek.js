//Object
const user = {};

let object = {key1: "value1", key2: "value2", key3: "value3"}

//Contoh
const user1 = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};
//Contoh denga pemanggilan nilai dari dalam object
const user2 = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};
  
  console.log(`Halo, nama saya ${user2.firstName} ${user2.lastName}`);
  console.log(`Umur saya ${user2.age} tahun`);
  
  /* output
  Halo, nama saya Luke Skywalker
  Umur saya 19 tahun
  */

//contoh dengan pemanggilan nilai dengan bracket
const user4 = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};
  
  console.log(`Halo, nama saya ${user4.firstName} ${user4.lastName}`);
  console.log(`Umur saya ${user4.age} tahun`);
  console.log(`Saya berasal dari ${user4["home world"]}`);
  
  /* output
  Halo, nama saya Luke Skywalker
  Umur saya 19 tahun
  Saya berasal dari Tattooine
  */


//Mengubah nilai dalam objek
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};
  
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);
  
  /* output
  {
    name: 'Millenium Falcon',
    manufacturer: 'Corellian Engineering Corporation',
    maxSpeed: 1300,
    color: 'Glossy red'
  }
   */

  const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
   
//spaceship = { name: "New Millenium Falcon" }; // Error


//Menambahkan key baru
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
  
  spaceship.color = "Glossy red";
  spaceship["maxSpeed"] = 1300;
  spaceship.class = "Light freighter";
  
  console.log(spaceship);
  
  /* output
  {
    name: 'Millenium Falcon',
    manufacturer: 'Corellian Engineering Corporation',
    maxSpeed: 1300,
    color: 'Glossy red',
    class: 'Light freighter'
  }
  */


//Mengahpus key
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
  };
  
  spaceship.color = "Glossy red";
  spaceship["maxSpeed"] = 1300;
  
  delete spaceship.manufacturer;
  
  console.log(spaceship);
  
  /* output
  { name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
   */




//Spread
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/