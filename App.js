import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './src/store'

const { store, persistor } = configureStore()

class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <Text>app</Text>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
