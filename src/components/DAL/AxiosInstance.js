import * as axios from "axios";

let axiosInstance = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/",
});

export default axiosInstance