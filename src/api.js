import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=9aeec46714c85f0982712bf766189463",
});

export default api;