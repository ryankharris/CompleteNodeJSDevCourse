#!/usr/bin/env node


const request = require('postman-request');
const json = true;

// const extractGeoData = (data) => {
//   return {
//     lon: data.features[0].center[0],
//     lat: data.features[0].center[1],
//     place: data.features[0].place_name
//   };
// };
const extractGeoData = ([feature0]) => {
  const [lon, lat] = feature0.center;
  const place = feature0.place_name;

  return {
    lon,
    lat,
    place
  };
};

const geocode = (location, callback) => { // returns {lon, lat, place}
  const encodeLocation = encodeURI(location);
  const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeLocation}.json?limit=1&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;
  request({ url: mapboxUrl, json }, (error, response) => {
  // request({ url: mapboxUrl, json }, (error, {body: {features}}) => { // this line is problematic when your net-connection is down
    if (error) {
      callback('An error occurred trying to get longitude and latitude info. Sorry.', undefined);
      return;
    } else if (!response.body.features || response.body.features.length === 0) {
    // } else if (!features || features.length === 0) {
      callback('No results found. Please revise your search location.', undefined);
      return;
    }
    const result = extractGeoData(response.body.features);
    callback(undefined, result);
  });
};

module.exports = geocode;