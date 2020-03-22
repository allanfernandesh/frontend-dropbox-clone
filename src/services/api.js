import axios from 'axios'

const api = axios.create({
    baseURL:"https://clonedropboxbackend.herokuapp.com"
})

export default api;