import axios from 'axios';

const baseURL = 'https://6ac34091ae53bf25b80e4174.mockapi.io/api/v1/movies'

const axiosClient = axios.create({
  baseURL, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;