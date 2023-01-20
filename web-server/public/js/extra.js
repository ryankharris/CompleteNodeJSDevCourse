

const weatherForm = document.querySelector('form');
weatherForm.addEventListener('submit', async (event) => {
  const msg1 = document.querySelector('#msg-1');
  const msg2 = document.querySelector('#msg-2');
  event.preventDefault();
  msg1.textContent = 'Loading...';
  msg2.textContent = '';
  
  const searchInput = document.querySelector('input');
  const value = searchInput.value;
  // const weatherPath = `http://localhost:3000/weather?address=${value}`;
  const weatherPath = `/weather?address=${value}`;
  const response = await fetch(weatherPath);
  const data = await response.json();
  if (data.error) {
    msg1.textContent = data.error;
    return;
  }
  
  msg1.textContent = data.location;
  const {chanceOfRain, currentTemp, description, feelsLikeTemp} = data.forecast || {};
  msg2.textContent = `${currentTemp} (feels like ${feelsLikeTemp}) degrees and ${description} with ${chanceOfRain}% chance of rain.`;
});

// (async () => {
//   const puzzlePath = 'http://puzzle.mead.io/puzzle';
//   const response = await fetch(puzzlePath);
//   const data = await response.json();
//   console.log(data);
// })();

// (async () => {
//   const weatherPath = 'http://localhost:3000/weather?address=Boston';
//   const response = await fetch(weatherPath);
//   const data = await response.json();
//   if (data.error) {
//     console.log('error:', data.error);
//     return;
//   }
//   console.log(data);
// })();