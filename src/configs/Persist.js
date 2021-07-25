import { persistReducer, persistStore } from "redux-persist"
import Reducers from "../reducers"
import storage from "redux-persist/lib/storage"

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const config = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(config, Reducers)
const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export {
    store, persistor
}