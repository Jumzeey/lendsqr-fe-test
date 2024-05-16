import axios from "axios";

const baseURLs = 'https://run.mocky.io/v3';

const axiosInstance = axios.create({
    baseURL: baseURLs,
    headers: {
      'Content-Type': 'application/json',
    },
  });
export default axiosInstance;  