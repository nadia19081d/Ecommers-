import axios from "axios";

const BASE_URL = 'https://ecommerce-fake-store-su3i.onrender.com'

const loginUserService = (data) => {
    return axios.post(`${BASE_URL}/login`, data)
}

const registerUserService = (data) => {
    return axios.post(`${BASE_URL}/register`, data)
}

// funcion para hacer el logout
const logoutUserService = () => {
    localStorage.removeItem('token')
}

export {
    loginUserService,
    registerUserService,
    logoutUserService
}