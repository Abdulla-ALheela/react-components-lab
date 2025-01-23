import "./WeatherForecast.css";
import WeatherIcon from "./Sub-Components/WeatherIcon";
import WeatherData from "./Sub-Components/WeatherData";


const WeatherForecasts = (props) => {

    return (

        <div className="weather">

            <WeatherData day={props.day} />
            <WeatherIcon img={props.img} imgAlt={props.imgAlt} />
            <WeatherData conditions={props.conditions} time={props.time} />

        </div>

    );
}

export default WeatherForecasts;
