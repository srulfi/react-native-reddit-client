import React, { Component } from 'react'
import {
  ActivityIndicator,
} from 'react-native'

import LoaderStyles from './styles/LoaderStyles'

class Loader extends Component {

  render () {
    return <ActivityIndicator size='large' style={LoaderStyles.loader}/>
  }
}

export default Loader
