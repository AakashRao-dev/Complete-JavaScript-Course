'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ======= XMLHTTPREQUEST - OLD SCHOOL WAY OF FETCHING DATA =======

// CORS - Cross Origin Resource Sharing
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // same as doing this:
    // const data = JSON.parse(this.responseText)[0];
    // console.log(data);

    const html = `
    <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('India');
getCountryData('Pakistan');
getCountryData('Bangladesh');
getCountryData('Bhutan');
getCountryData('South Korea');
*/

// =============================================================
// ======================= CALLBACK HELL =======================

/*
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);
    // Render country 1
    renderCountry(data);

    // Get Neigbour Country
    const neighbour = data.borders?.[0];
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      // console.log(data);
      // Render country 2
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');

// Callback hell - Traingle Shape
setTimeout(() => {
  console.log('One Second Passed!');
  setTimeout(() => {
    console.log('Two Seconds Passed!');
    setTimeout(() => {
      console.log('Three Seconds Passed!');
      setTimeout(() => {
        console.log('Four Seconds Passed!');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

/*
// Delcaring Functions
function asyncFunction1(callback) {
  setTimeout(() => {
    console.log('Async Function 1 Done');
    callback();
  }, 1000);
}

function asyncFunction2(callback) {
  setTimeout(() => {
    console.log('Async Function 2 Done');
    callback();
  }, 1000);
}

function asyncFunction3(callback) {
  setTimeout(() => {
    console.log('Async Function 3 Done');
    callback();
  }, 1000);
}

asyncFunction1(() => {
  asyncFunction2(() => {
    asyncFunction3(() => {
      console.log('All Async Functions done!');
    });
  });
});
*/

/*
// Same thing without using Arrow function
function callback3() {
  console.log('All Async Functions Done');
}
function callback2() {
  asyncFunction3(callback3);
}
function callback1() {
  asyncFunction2(callback2);
}
asyncFunction1(callback1);
*/

//
// Async Task-1 Done:
//              run Callback
// Async Task-2 Done:
//              run Callback
// Async Task-3 Done:
//              run Callback

// ============================================================
// =================== PROMISES & FETCH API ===================

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data);
//     });
// };

/*
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      const [dataObj] = data;
      renderCountry(dataObj);
    });
};

getCountryData('India');
*/

// ============================================================
// ===================== CHAINING PROMISES ====================

/*
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // COUNTRY-1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // COUNTRY-2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    // ONE CALLBACK - ONE RETURN PROMISE - THEN CHAIN THEN FOR RESPONSE to avoid callback hell
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0], 'neighbour');
    });
};

getCountryData('India');
*/

// ==============================================================
// ================= HANDLING REJECTED PROMISES =================

// lvl-1: Simply attach .catch() after the last .then() method
// Lvl-2: Use throw new Error() to reject promise and .catch() the error with status 404

/*
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderErr = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  // COUNTRY-1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders ? data[0].borders[0] : null;

      if (!neighbour) throw new Error('No neighbour found!');

      // COUNTRY-2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    // lvl-1: Simply attach .catch() after the last .then() method
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderErr(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => getCountryData('United Kingdom'));
getCountryData('Australia');
*/

// ==============================================================
// ================= CODING CHALLENGE-1 =========================

/*
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderErr = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  // COUNTRY-1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders ? data[0].borders[0] : null;

      if (!neighbour) throw new Error('No neighbour found!');

      // COUNTRY-2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    // lvl-1: Simply attach .catch() after the last .then() method
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderErr(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const getData = function (url, errMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg} ${response.status}`);
    }
    return response.json();
  });
};

const whereAmI = function (lat, lng) {
  getData(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=745935440315315941873x86388`,
    'No such country with that location, please try again!'
  )
    .then(data => {
      console.log(`You are in ${data.city.toLowerCase()}, ${data.country}.`);
      getCountryData(data.country);
    })
    .catch(err => {
      console.error(`${err} 💥💥`);
    });
};

whereAmI('52.508', '13.381');
whereAmI('19.037', '72.873');
whereAmI('-33.933', '18.474');
*/

// ============================================================
// ================== EVENT LOOP IN PRACTICE ==================

// Testing the MicroTASK Queue

/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res));

Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test end');
*/

// ==============================================================
// =========== BUILDING A SIMPLE PROMISE FROM SCRATCH ===========

// PROMISIFYING - Conversion of a function that accepts a callback into a function that returns a promise

/*
const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lottery draw is happening 🔮');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WON! 👍'); // calling this will mark promise as resolved
    } else {
      reject(new Error('You LOST YOUR MONEY!! 🥲'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying setTimout
const wait = function (sec) {
  return new Promise(resolve => {
    setTimeout(resolve, sec * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('1 second Passed!');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds Passed!');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds Passed!');
    return wait(1);
  })
  .then(() => {
    console.log('4 seconds Passed!');
    return wait(1);
  });
*/

// ==================================================================
// ================== PROMISIFYING GEOLOCATION API ==================

// USING GEOLOCATION API TO GET COORDINATES, USING THAT FOR GEOCODING & THEN COUNTRIES API TO DISPLAY IT.

// Promisifying callback based API to Promise based API
// const getPosition = function () {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       error => reject(error)
//     );
//   });
// };

// MORE SIMPLIFIED VERSION OF PROMISIFYING
// const getPosition = function () {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

/*
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderErr = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg} (${response.status})`);
    }
    return response.json();
  });
};

// COUNTRIES API
const getCountryData = function (country) {
  // COUNTRY-1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders ? data[0].borders[0] : null;

      if (!neighbour) throw new Error('No neighbour found!');

      // COUNTRY-2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    // lvl-1: Simply attach .catch() after the last .then() method
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderErr(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// MORE SIMPLIFIED VERSION OF PROMISIFYING
const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log(lat, lng);

      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=745935440315315941873x86388`
      );
    })
    .then(response => response.json())
    .then(data => {
      console.log(`You are in ${data.city?.toLowerCase()}, ${data.country}.`);
      getCountryData(data.country);
    })
    .catch(err => {
      console.error(`${err} 💥💥`);
    });
};
btn.addEventListener('click', whereAmI);

console.log('Getting Position');
*/

// ========================================================
// ================== CODING CHALLENGE-2 ==================

// LEARNED ABOUT *SEQUENTIAL EXECUTION* OF PROMISES WITH .THEN()

// CHAIN OF PROMISES: TASK1 - WAIT - TASK2 - TASK3 - WAIT - TASK4
// When you return a promise from a .then(), the next .then() waits for that promise to resolve before it continues.

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*
const imagesContainer = document.querySelector('.images');
let currentImage;

const wait = function (sec) {
  return new Promise(resolve => {
    setTimeout(resolve, sec * 1000);
  });
};

function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', () => {
      imagesContainer.append(image);
      resolve(image);
    });

    image.addEventListener('error', () => {
      reject('Something went wrong loading the image!');
    });
  });
}

createImage('./img/img-1.jpg')
  .then(img => {
    console.log('First Image Loaded!');
    currentImage = img;
    return wait(2);
  })
  .then(() => {
    console.log('Hiding first image after 2 seconds');
    currentImage.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    console.log('Second Image Loaded!');
    currentImage = img;
    return wait(2);
  })
  .then(() => {
    console.log('Hiding first image after 2 seconds');
    currentImage.style.display = 'none';
  })
  .catch(err => console.log(err));
*/

// =================================================================
// ============== CONSUMING PROMISES WITH ASYNC/AWAIT ==============

// fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then(res => res.json())
//   .then(data => console.log(data));

/*
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// BUILDING THE PROMISE IS SAME, FOR CONSUMING WE USE ASYNC AWAIT
const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // GEOLOCATION
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // REVERSE GEOCODING
  const resGeo = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=745935440315315941873x86388`
  );
  const dataGeo = await resGeo.json();

  // COUNTRY DATA
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo?.country}`
  );
  const data = await res.json();
  countriesContainer.style.opacity = 1;
  renderCountry(data[0]);
};

whereAmI();
*/
