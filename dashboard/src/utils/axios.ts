import axios from 'axios'
import { logout } from './auth'

const baseURL = process.env.REACT_APP_BACKEND_URL
const userToken: string = localStorage.getItem('user-token') || ''
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
})

if (userToken.length) {
  /**
   * we'll be setting user token on all request only
   * if we user token on local storage.
   */
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('user-token')}`
}

axiosInstance.defaults.withCredentials = true

axiosInstance.interceptors.request.use(
  (config:any) => {
    if(config){
      config.headers['Authorization'] = `Bearer ${localStorage.getItem('user-token')}`;
    }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use( (res:any) => {
  return res;
 },
 error => {
   if(error.response.status === 401) {
     logout()
     window.location.href ='/'
   }
   return Promise.reject(error);
 }
)

export default axiosInstance
