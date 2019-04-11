import * as axios from "axios";

let axiosInstance = axios.create({
    baseURL: "api.openweathermap.org/data/2.5/weather",
});

export default axiosInstance