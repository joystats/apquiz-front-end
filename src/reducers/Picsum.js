const Picsum = (state={}, action)=>{
    switch(action.type){
        case 'GET_PHOTOS':
            return {...state, photos: action.payload}
        default:
            return state;
    }
}

export default Picsum