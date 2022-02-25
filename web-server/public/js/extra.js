
const weatherForm = document.querySelector('form');
weatherForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const searchInput = document.querySelector('input');
  const value = searchInput.value;
  const weatherPath = `http://localhost:3000/weather?address=${value}`;
  const response = await fetch(weatherPath);
  const data = await response.json();
  if (data.error) {
    console.log('error:', data.error);
    return;
  }
  console.log(data);
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