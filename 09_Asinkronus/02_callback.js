function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];

    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

function usersCallback(error, users) {
  if (error) {
    console.log("process failed:", error.message);
    return;
  }
  console.log("process success:", users);
}

getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
getUsers(true, usersCallback); // process failed: cannot retrieve users due offline

//Callback hell
// Perhatikan yang sinkronus
function getUserWeather(userId) {
  try {
    const user = getUser(userId);
    const weather = getWeather(user.location);
    return { ...user, ...weather };
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

const userWeather = getUserWeather(1);
console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }

function getUserWeatherr(userId) {
  try {
    const user = getUser(userId);
    const weather = getWeather(user.location);
    return { ...user, ...weather };
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

const userWeatherr = getUserWeatherr(1);
console.log(userWeatherr); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }

//Perhatikan yang asinkronus
function getUserWeatherrr(userId) {
  try {
    const user = getUser(userId);
    const weather = getWeather(user.location);
    return { ...user, ...weather };
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

const userWeatherrr = getUserWeatherrr(1);
console.log(userWeatherrr); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }

//Kode di atas susah dibaca, ada promise agar lebih mudah