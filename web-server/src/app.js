
const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '..', 'public');
const app = express();
const PORT = 3000;
app.use(express.static(publicPath));

app.get('/help', (req, res) => {
  res.send({
    name: 'Ryan',
    age: 41
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is raining',
    location: 'Near Portland Oregon',
  });
});

app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
