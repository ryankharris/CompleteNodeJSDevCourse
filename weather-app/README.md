# weather-app
Uses remote APIs to lookup latitude, longitude, and weather forecast of a given location argument.

APIs:
* https://weatherstack.com/
* https://www.mapbox.com/

## Usage
To lookup the data for San Francisco, U.S.A., use:

    ./app.js "san francisco"

To lookup the data for Portland Oregon U.S.A., use:

    ./app.js "portland oregon"

If the location is one word or distinct enough, you can provide unquoted:

    ./app.js tucson
