import React, { Component } from 'react'
import {
  ActivityIndicator,
} from 'react-native'

class Loader extends Component {

  render () {
    return <ActivityIndicator size='large' color='blue' />
  }
}

export default Loader
