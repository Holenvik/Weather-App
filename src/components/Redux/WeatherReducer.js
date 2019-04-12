import axiosInstance from "../DAL/AxiosInstance";
import {statuses} from "../STATUSES";

let initialState = {
    cityForSearch: null,
    cityWeatherInfo: {},
    status: statuses.NOT_INITIALIZED
};

let appid = "a0a7d7eaf5b391ca0b41647fee93864a";

const SET_CITY_FOR_SEARCH = "WEATHER-APP/SET-CITY-FOR-SEARCH";
const SET_CITY_WEATHER_INFO = "WEATHER-APP/SET-CITY-WEATHER-INFO";
const SET_STATUS_WEATHER = "WEATHER-APP/SET-STATUS-WEATHER";

let WeatherReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CITY_FOR_SEARCH: {
            return {...state, cityForSearch: action.city}
        }

        case SET_CITY_WEATHER_INFO: {
            return {...state, cityWeatherInfo: action.data}
        }

        case SET_STATUS_WEATHER: {
            return {...state, status: action.status}
        }

        default: {
            return state
        }
    }
};

export const setStatusWeather = (status) => {
    return {
        type: SET_STATUS_WEATHER,
        status
    }
};

export const setCityForSearchAC = (city) => {
    return {
        type: SET_CITY_FOR_SEARCH,
        city
    }
};

export const setCityWeatherInfoAC = (data) => {
    return {
        type: SET_CITY_WEATHER_INFO,
        data
    }
};

export const getCityInfoThunk = () => (dispatch, getState) => {
    dispatch(setStatusWeather(statuses.INPROGRESS));
    const state = getState();
    axiosInstance
        .get(`weather?q=${state.weather.cityForSearch}&APPID=${appid}&units=metric`)
        .then(res => {
            dispatch(setCityWeatherInfoAC(res.data));
            dispatch(setStatusWeather(statuses.SUCCESS));
        })
        .catch(warn => {
            console.log(warn)
        })
};

export default WeatherReducer;