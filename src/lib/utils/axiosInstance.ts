import axios from "axios";

const baseURLs = 'https://run.mocky.io/v3'; //this ought to be from an .env file to support multiple environment (staging, production or sandbox).

const axiosInstance = axios.create({
    baseURL: baseURLs,
    headers: {
      'Content-Type': 'application/json',
    },
  });
export default axiosInstance;  