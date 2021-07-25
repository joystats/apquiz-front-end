import Picsum from "./Picsum";
import { combineReducers } from "redux";

const Reducers = combineReducers({
    photos: Picsum
})

export default Reducers