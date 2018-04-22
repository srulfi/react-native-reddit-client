import React, { Component } from 'react'
import {
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import config from '../config'

import Loader from '../components/Loader'
import PostsStyles from './styles/PostsStyles'

class Posts extends Component {

  constructor (props) {
    super(props)

    this.state = {
      posts: props.posts || null
    }
  }

  componentDidMount () {
    console.log(this.props.posts)
    //for now to avoid hardcoding, todo/nicetohave: allow user to choose from UI
    !this.props.posts && this.props.fetchPosts(config.DEFAULT_POSTS_LIMIT)
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.posts !== this.props.posts) {
      this.setState({posts: this.props.posts})
    }
  }

  _renderPost (post) {
    console.log(post)
    return (
      <View style={PostsStyles.postContainer}>
        <View style={PostsStyles.postTopRow}>
          <Text style={PostsStyles.postAuthor}>{post.data.author}</Text>
          <Text style={PostsStyles.postEntryDate}>{post.data.created}</Text>
        </View>
        <View style={PostsStyles.postMiddleRow}>
          <Image style={PostsStyles.postThumbnail} source={{uri: post.data.thumbnail}} />
          <Text style={PostsStyles.postTitle}>{post.data.title}</Text>
        </View>
        <View style={PostsStyles.postBottomRow}>
          <TouchableOpacity onPress={() => this._dismissPost(post.id)}>
            <Text style={PostsStyles.postDismissAction}>Dismiss Post</Text>
          </TouchableOpacity>
          <Text style={PostsStyles.postCommentsNumber}>{post.data.num_comments}</Text>
        </View>
      </View>
    )
  }

  render () {
    if (this.state.posts) {
      return (
        <View>
          <FlatList
            data={this.state.posts}
            renderItem={({ item }) => this._renderPost(item)}
            keyExtractor={item => item.data.id}
            /*ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}*/
          />
        </View>
      )
    }
    return null
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
