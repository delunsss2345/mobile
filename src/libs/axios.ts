import { AUTH_KEY, PersistedAuth } from "@/store/auth-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseURL = 'http://localhost:3000'


export const axiosInstance = axios.create({
    baseURL 
})


axios.interceptors.request.use(
  async (config) => {
     const saved  = await AsyncStorage.getItem(AUTH_KEY);
     const response = JSON.parse(saved as string) as PersistedAuth; 
    if (saved) {
      config.headers.Authorization = `Bearer ${response.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

