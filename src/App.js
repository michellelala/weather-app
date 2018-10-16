import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import key from "./id.js"
// import secret from "./id.js/secret";


class App extends Component {
  constructor() {
    super();
    this.state = {
      forecast: "",
      celsius: false
    }
  }

  toggleConversion = () => {
    this.setState({
      celsius: !this.state.celsius
    })
  }

  componentDidMount() {
    axios.get(`http://api.aerisapi.com/forecasts/11101?client_id=${key.ID}&client_secret=${key.secret}`)
      .then(res => {
        this.setState({
          forecast: res.data.response[0].periods
        })
      })
  }

  renderDays = () => {
    const { forecast, celsius } = this.state;

    return (
      <div className="forecast-parent">
        {forecast.map(day => {
          const iconImage = require(`./icons/${day.icon}`) 

          return (
            <div className="forecast-day" key={day.validTime}>
              <span className="bold"> {day.dateTimeISO.slice(0, 10)} </span>
              <br />
              <img src={iconImage} />
              <br />
              <span className="small italic"> {day.weatherPrimary} </span>
              <br />
              <span className="small"> High: </span>{" "} 
                {celsius 
                  ? day.maxTempC 
                  : day.maxTempF}°
              <br />
              <span className="small"> Low: </span>{" "} 
                {celsius 
                  ? day.minTempC 
                  : day.minTempF}°
            </div>
          )}
        )}
      </div>
    )
  }

  render() {
    const { forecast, celsius } = this.state;
    
    return (
      <div className="App">
        <h1> 7-day Forecast for New York, NY </h1>

        {forecast 
          ? this.renderDays() 
          : "Please wait while we load the information."}

        <span className="small italic">
          Currently showing temperatures in {celsius 
            ? "Celsius" 
            : "Fahrenheit"}.
          <button
            onClick={this.toggleConversion}
            className="toggle small bold">
            {celsius 
              ? "Convert to Fahrenheit" 
              : "Convert to Celsius"}
          </button>
        </span>
      </div>
    );
  }
}

export default App;
