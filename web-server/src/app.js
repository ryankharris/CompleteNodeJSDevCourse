
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const myName = 'Ryan Harris';
const age = 99;

// express path config
const publicPath = path.join(__dirname, '..', 'public');
const viewsPath = path.join(__dirname, '..', 'templates', 'views')

// views with Pug config
app.set('view engine', 'pug');
app.set('views', viewsPath); // leaving it default is fine, so this isn't necessary

// static assets config
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome', headerMsg: "Welcome Page (thanks to Pug)", name: myName });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About', headerMsg: "About Page (thanks to Pug)", name: myName });
});

app.get('/about/*', (req, res) => {
  res.status(404).render('notFound', {parentRoute: 'About', headerMsg: '404: About page not found', name: myName});
});

app.get('/help', (req, res) => {
  res.render('help', { headerMsg: "Help Page (thanks to Pug)", name: myName, age });
});

app.get('/help/*', (req, res) => {
  res.status(404).render('notFound', {parentRoute: 'Help', headerMsg: '404: Help page not found', name: myName});
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is raining',
    location: 'Near Portland Oregon',
  });
});

app.get('/weather/*', (req, res) => {
  res.status(404).render('notFound', {parentRoute: 'Weather', headerMsg: '404: Weather page not found', name: myName});
});

app.get('*', (req, res) => {
  res.status(404).render('notFound', {parentRoute: '', headerMsg: '404: Page not found', name: myName});
});

app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
