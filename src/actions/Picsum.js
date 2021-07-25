import Axios from '../configs/Axios'

const getPhotos = ()=>{
    return dispatch=>{
        Axios.get('/list')
        .then(res=>dispatch({
            type: 'GET_PHOTOS',
            payload: res.data 
        }))
    }
}

export {
    getPhotos
}