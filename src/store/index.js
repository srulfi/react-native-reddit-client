import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

import config from '../config'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [thunk]

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(...middlewares)),
  )

  const persistor = persistStore(store)

  config.devMode && persistor.purge()

  return { store, persistor }
}

export default configureStore
