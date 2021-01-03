
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

const createGame = (payload) => {
    return api.post(`/game`, payload)
}


const apis = {
    createGame,
}

export default apis