import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://picsum.photos/v2'
})

export default Axios