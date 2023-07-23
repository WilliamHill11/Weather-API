const searchCity = document.getElementById('search');
const weatherContainer = document.querySelector('.weatherContainer');
const description = document.querySelector('.description');

const { log } = console;
log(searchCity);
// key 96341608d1a046c7b04181727232007
searchCity.addEventListener('input', (e) => {
  const searchValue = e.target.value;
  log(searchValue);
});


  .then((response) => response.json())
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
    temp.innerHTML = `${data.current.temp_c} <span>&#8451;<span>`;
    detail1.innerHTML = `FEELS LIKE: ${data.current.feelslike_c}<span>&#8451;<span>`;
    detail2.textContent = `WIND: ${data.current.wind_kph} km/h`;
    detail3.textContent = `HUMIDITY: ${data.current.humidity}%`;

    log(card);
    log(data);
    log(weatherCondition);
  });

// .then((data) => console.log(data.current.temp_c));
