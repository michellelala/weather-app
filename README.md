# Weather App

This is a *very* simple weather app I created for a coding challenge using the [Aeris Weather API](https://www.aerisweather.com/support/docs/api/).

It shows the 7-day forecast for New York, NY, with:
- High/low temperatures
- A short description of the weather
- Weather icons
- A button to convert from Fahrenheit to Celsius, or vice versa

Also features a responsive web design.

<img src="./src/images/convert.gif" alt="gif of temperature conversion" />

### Installation

In terminal:
1. Clone this repo.
```
$ git clone repo-name
```
2. cd into root directory and install all dependencies.
```
$ cd path/to/repo
$ npm install
```
3. You will need to create a (free) account on the Aeris website.
4. In your `src` folder, create a new file `id.js`.
5. In your `id.js` file, copy and paste the following code. 
6. Replace the values `YOUR_CLIENT_ID` and `YOUR_SECRET_KEY` with the new client ID and secret key you obtained, as strings.
```
const key = {
  ID: YOUR_CLIENT_ID,
  secret: YOUR_SECRET_KEY
}

export default key
```
6. In your root directory, start the app.
```
$ npm start
```


##### Enjoy the weather, folks.
