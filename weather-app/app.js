#!/usr/bin/env node

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

if (!process.env.WEATHERSTACK_ACCESS_KEY) {
  console.log('Error: Weatherstack access key was not provided to the environment. Exiting.');
  process.exit(0);
}

if (!process.env.MAPBOX_ACCESS_TOKEN) {
  console.log('Error: Mapbox access key was not provided to the environment. Exiting.');
  process.exit(0);
}

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];
if (!location) {
  console.log('Please provide a location as CLI arg. Exiting');
  process.exit(0);
}

// geocode(location, (error, response) => {
geocode(location, (error, {lon, lat, place} = {}) => {
  if (error) {
    console.log(error);
    process.exit(0);
  }
  console.log(`Geocode: ${place} is at longitude: ${lon}, latitude: ${lat}`);

  forecast(lon, lat, (error, data) => {
    if (error) {
      console.log(error);
      process.exit(0);
    }
    console.log('Forecast:', data);
  });
});


