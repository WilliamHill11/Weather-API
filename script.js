const weatherContainer = document.querySelector('.weatherContainer');
const description = document.querySelector('.description');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const searchCity = document.querySelector('#search').value;
  fetchData(searchCity);
});

function fetchData(search) {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=403433c1a5764250bfd30625232307&q=${encodeURIComponent(
    search,
  )}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) throw new Error('not valid response');
      return response.json();
    })
    .then((data) => {
      const card = weatherContainer;
      const weatherCondition = card.querySelector('.condition');
      const city = card.querySelector('.city');
      const temp = card.querySelector('.temp');
      const weatherDetails = description;
      const detail1 = weatherDetails.querySelector('.one');
      const detail2 = weatherDetails.querySelector('.two');
      const detail3 = weatherDetails.querySelector('.three');

      weatherCondition.textContent = data.current.condition.text;
      city.textContent = `${data.location.name}, ${data.location.country}`;
      temp.innerHTML = `${data.current.temp_c} <span>&#8451;</span>`;
      detail1.innerHTML = `FEELS LIKE: ${data.current.feelslike_c}<span class='celsius'>&#8451;</span>`;
      detail2.textContent = `WIND: ${data.current.wind_kph} km/h`;
      detail3.textContent = `HUMIDITY: ${data.current.humidity}%`;
    })
    .catch((error) => console.log(error, '404 status'));
}

// .then((data) => console.log(data.current.temp_c));
