import axios from "axios";

const BASE_URL = 'https://ecommerce-fake-store-su3i.onrender.com';

// obtiene todos los productos
const getItems = () => {
    return axios.get(`${BASE_URL}/items`)
}

// obtiene un solo producto con base al ID
const getItem = (id) => {
    return axios.get(`${BASE_URL}/items/${id}`)
}

export {
    getItems,
    getItem
}