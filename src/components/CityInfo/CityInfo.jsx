import React from "react";
import style from "./CityInfo.module.css"
import {ClipLoader, SyncLoader} from "react-spinners";

let CityInfo = (props) => {
    let {handleSubmit} = props;
    let {WeatherInfo} = props;
    let {cityForSearch, status, cityWeatherInfo} = WeatherInfo;

    if (status === "SUCCESS") {
        return (
            <>
                <div className={style.cityName}>
                    <span>
                        {cityWeatherInfo.name}
                    </span>
                </div>
                <div className={style.cityName}>
                    <span>
                        {`Current: ${cityWeatherInfo.main.temp}°`}
                    </span>
                </div>
                <div className={style.cityName}>
                    <span>
                        {`Wind Speed: ${cityWeatherInfo.wind.speed} m/hr`}
                    </span>
                </div>
                <div className={style.cityName}>
                    <span>
                        {`Clouds: ${cityWeatherInfo.weather[0].description.toUpperCase()}`}
                    </span>
                </div>
            </>
        )
    } else {
        return (
            <div className={style.spinner}>
                <SyncLoader
                    sizeUnit={"px"}
                    size={100}
                    color={'#36D7B7'}
                    loading={true}
                />
            </div>
        )
    }
};

export default CityInfo