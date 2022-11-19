import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})

api.defaults.headers.common['authorization'] = localStorage.getItem('token')