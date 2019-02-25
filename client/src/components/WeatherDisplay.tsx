import * as React from 'react';
import WeatherIcons from '../classes/WeatherIcons';
import NumberFormat from '../classes/NumberFormat';
import '@mdi/font/css/materialdesignicons.css';
import './WeatherDisplay.css';

interface IWeatherDisplayProps {
    weather: any;
    currentWeather: any,
    handleTextChange: any,
    locationText: string,
    handleLocationSubmit: any,
    location: any,
}

export default (props: IWeatherDisplayProps) => {
    if (Object.keys(props.currentWeather).length === 0) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="weather-display">
            <h1>{props.location.addressLabel}</h1>
            <h2>{NumberFormat.from(props.currentWeather.temperature).degreesC}</h2>
            <span className={`weather-display--icon mdi mdi-${WeatherIcons.weatherType(props.currentWeather.icon).iconSlug}`} />
            <h3>{props.currentWeather.summary}</h3>
            <p>{props.weather.hourly.summary}</p>

            <div>
                <span className="mdi mdi-weather-windy" />
                <span>{`${props.currentWeather.windSpeed}mph`}</span>
            </div>
            <div>
                <span className="mdi mdi-umbrella" />
                <span>{`${props.currentWeather.humidity * 100}%`}</span>
            </div>
            <div>
                <span>UV Index: </span>
                <span>{props.currentWeather.uvIndex}</span>
            </div>
            <div className="location-box">
                <input type="text" value={props.locationText} onChange={props.handleTextChange} />
                <button onClick={props.handleLocationSubmit}>change location</button>
            </div>
        </div>
    );
};

