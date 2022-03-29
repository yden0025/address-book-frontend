import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/',
    responseType: 'json'
})

export { http };