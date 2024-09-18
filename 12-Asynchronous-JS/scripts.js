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
