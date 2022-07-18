import axios from 'axios'

const BASE_URL = 'http://server-app-js.herokuapp.com/'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})