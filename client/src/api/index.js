
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

const createGame = (payload) => {
    return api.post(`/game`, payload)
}

const getGame = async (id) => {
    return api.get(`/game/${id}`)
}

const updateGame = async (id, payload) => {
    const game = await getGame(id)
    const updatedGame = {
        ...game,
        payload
    }
    return api.put(`/game/${id}`, updatedGame)
}


const apis = {
    createGame,
    getGame,
    updateGame
}

export default apis