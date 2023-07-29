function getUsers(isOffline) {
  // return a promise object
  return new Promise((resolve, reject) => {
    // simulate network delay
    setTimeout(() => {
      const users = ["John", "Jack", "Abigail"];

      if (isOffline) {
        reject(new Error("cannot retrieve users due offline"));
        return;
      }

      resolve(users);
    }, 3000);
  });
}

getUsers(false)
  .then((users) => {console.log(users)})
  .catch((err) => console.log(err.message));


//Promsify
const fs = require('fs');
const { promisify } = require('util');

const readFilePromise = promisify(fs.readFile);

readFilePromise('./data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.log(err.message));
