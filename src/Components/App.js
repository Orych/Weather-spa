import React from 'react';
import axios from 'axios';
import '../Style.css'
import CitySearch from './CitySearch';
import WeatherCard from './WeatherCard'

class App extends React.Component{

    state = {weatherResult: null}
    

    onSearchSubmit = async (searchInputValue) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=f7ba517291e94b77301fa612e55f08b5`)
        this.setState({weatherResult: response.data})
     }

     componentDidMount() {
        window.addEventListener('load', () => {
        console.log(localStorage.getItem('state'))
        this.onSearchSubmit(localStorage.getItem('state'))
        });
      }

    render() {
        return(
            <div className="container my-5">
                <h1 className="text-center title">Your city</h1>
                <CitySearch onSearchSubmit = {this.onSearchSubmit} />
                {this.state.weatherResult ?  <WeatherCard weatherResult = {this.state.weatherResult} /> : <div></div>}
            </div>
        )
    }

}

export default App;