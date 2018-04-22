import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

class Posts extends Component {

  render () {
    return (
      <TouchableOpacity onPress={() => Actions.postDetail()}>
        <Text>Ir a detalle</Text>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
