import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import config from '../config'

class Posts extends Component {

  componentDidMount () {
    //for now to avoid hardcoding, todo/nicetohave: allow user to choose from UI
    this.props.fetchPosts(config.DEFAULT_POSTS_LIMIT)
  }

  _renderPosts () {
    if (this.props.posts && this.props.posts.length) {
      return this.props.posts.map((post, index) => {
        return <Text key={index}>{post.data.title + '\n'}</Text>
      })
    }
  }

  render () {
    return (
      <View>
        {this._renderPosts()}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  fetching: state.posts.fetching,
  posts: state.posts.payload,
  success: state.posts.success,
  error: state.posts.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (postsLimit) => dispatch(actions.posts.fetchPosts(postsLimit))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
