import React from 'react'
import '../Style.css'


class WeatherCard extends React.Component{

    constructor(props){
        super(props)
    }

    roundCelcius = (kelvin) => {
        const celcius = Math.round(kelvin - 273.15);
        return celcius;
    }

    getWeatherIcon = (iconParameter) => {
        const icon = `https://openweathermap.org/img/wn/${iconParameter}@2x.png`
        return <img src = {icon} alt = "" />
    }

    render() {
        return(
            <div className="card rounded my-3 shadow-lg back-card">
            <div className="card-top text-center my-3">
                <div className="city-name my-3">
                    <p>{this.props.weatherResult.name}</p>
                    <span>...</span>
                </div>
            </div>

            <div className="card-body my-5">
                <div className="card-mid row">
                    <div className="col-8 text-center temp">
                        <span>{this.roundCelcius(this.props.weatherResult.main.temp)}&deg;C</span>
                    </div>
                    <div className="col-4 condition-temp">
                        <p className="condition">{this.props.weatherResult.weather[0].description}</p>
                    </div>
                </div>

                <div className="icon-container card shadow mx-auto">
                    {this.getWeatherIcon(this.props.weatherResult.weather[0].icon)}
                </div>
                <div className="card-bottom px-5 row">
                    <div className="col text-center">
                        <p>{this.roundCelcius(this.props.weatherResult.main.feels_like)}&deg;C</p>
                        <span>Feels Like</span>
                    </div>
                    <div className="col text-center">
                        <p>{this.props.weatherResult.main.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default WeatherCard;