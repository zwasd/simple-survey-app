import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'

import rootReducer from '../reducers'
import { loadState, saveState } from './localStorage'


const configureStore = () => {
    // load state from local storage to store
    const persistedState = loadState()

    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(thunk, createLogger())
    )

    // subscribe to save state to local storage
    store.subscribe(throttle(() => {
        saveState({
            ...store.getState(),
            showResult: false,
            currentPage: 1
        })
    }, 1000))

    return store
}

export default configureStore