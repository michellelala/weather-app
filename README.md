# Weather App
-----

This is a simple weather app I created for a coding challenge using the [Aeris Weather API](https://www.aerisweather.com/support/docs/api/).

It shows the 7-day forecast for New York, NY, with high/low temps, a short description of the weather, weather icons, and a button to convert from Fahrenheit to Celsius or vice versa.

### Installation
-----
In terminal:
1. Clone this repo.
```
$ git clone [repo]
```
2. cd into root directory and install all dependencies.
```
$ cd [/path/to/repo/]
$ npm install
```
3. You will need to create a (free) account on the Aeris website.
4. In your `src` folder, create a new file `id.js`.
5. In your `id.js` file, replace the values below (including brackets) with the new client ID and secret key you obtained, as strings.
```
const key = {
  ID: [YOUR_CLIENT_ID],
  secret: [YOUR_SECRET_KEY]
}

export default key;
```
6. In your root directory, start the app.
```
$ npm start
```

-----

Enjoy the weather, folks.