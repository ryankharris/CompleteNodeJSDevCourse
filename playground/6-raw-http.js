#!/usr/bin/env node

const http = require('http');
const config = require('../config.json');

const weatherstackUrl = `http://api.weatherstack.com/current?access_key=${config['weather-app'].weatherstack.access_key}&query=45,-75=&units=f`;

// error version, creates error from the service
// const weatherstackUrl = `http://api.weatherstack.com/current?access_key=123&query=45,-75=&units=f`;

// alternatively, you can generate a request error by turning off your network connection

const request = http.request(weatherstackUrl, response => {
  let data = '';
  response.on('data', chunk => {
    data += chunk.toString();
  });
  response.on('end', chunk => {
    try {
      const body = JSON.parse(data);
      console.log(body);
    } catch (e) {
      console.log('error occurred: ', e);
    }
  });
});

request.on('error', err => {
  console.log('error occurred: ', err);
});

request.end();
