
const request = require('postman-request');
const json = true;

const extractWeatherData = ({current: {temperature, feelslike, precip, weather_descriptions}}) => {
  return {
    currentTemp: temperature,
    feelsLikeTemp: feelslike,
    chanceOfRain: precip,
    description: weather_descriptions[0]
  };
}; // end extractWeatherData


const forecast = (longitude, latitude, callback) => {
  if (typeof longitude !== 'number' || typeof latitude !== 'number') {
    callback('Invalid argument.', undefined);
    return;
  }
  const weatherstackUrl = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_ACCESS_KEY}&query=${latitude.toString()},${longitude.toString()}=&units=f`;
  request({ url: weatherstackUrl, json }, (error, response, body) => {
    if (error) {
      callback('An error occurred trying to get weather info. Sorry.', undefined);
      return;
    } else if (response.body.error) {
      callback(response.body.error.info, undefined);
      return;
    }
    const result = extractWeatherData(body);
    callback(undefined, result);
  });
};

module.exports = forecast;