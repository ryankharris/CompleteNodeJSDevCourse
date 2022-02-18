
const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '..', 'public');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome', message: "Welcome to Ryan's place (thanks to Pug)" });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Me', message: "About me and stuff (thanks to Pug)", name: 'Ryan Harris' });
});

app.get('/help', (req, res) => {
  res.render('help', { message: "Help for you (thanks to Pug)", name: 'Ryan Harris', age: 99 });
});

// app.get('/help', (req, res) => {
//   res.send({
//     name: 'Ryan',
//     age: 99
//   });
// });

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is raining',
    location: 'Near Portland Oregon',
  });
});

app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
