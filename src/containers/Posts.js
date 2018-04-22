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
import { getHoursAgo } from '../utils'

import Icon from 'react-native-vector-icons/Ionicons'

import Loader from '../components/Loader'
import PostsStyles from './styles/PostsStyles'

class Posts extends Component {

  constructor (props) {
    super(props)

    this.state = {
      posts: props.posts || null,
      postSelected: null
    }
  }

  componentDidMount () {
    //for now to avoid hardcoding, todo/nicetohave: allow user to choose from UI
    !this.props.posts && this.props.fetchPosts(config.DEFAULT_POSTS_LIMIT)
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.posts !== this.props.posts) {
      this.setState({posts: this.props.posts})
    }
  }

  _selectPost (postId) {
    this.setState({postSelected: postId})
  }

  _resolveThumbnail (uri) {
    return uri === 'default' || uri === 'self' ? config.DEFAULT_THUMBNAIL : uri
  }

  _renderPost (post) {
    let activePost = this.state.postSelected === post.id
    return (
      <TouchableOpacity onPress={() => this._selectPost(post.id)}>
        <View style={[PostsStyles.postContainer, activePost && PostsStyles.postContainerSelected]}>
          <View style={PostsStyles.postTopRow}>
            <View style={PostsStyles.postUnreadStatus} />
            <Text style={PostsStyles.postAuthor}>{post.data.author}</Text>
            <Text style={PostsStyles.postEntryDate}>{getHoursAgo(post.data.created_utc)} hours ago</Text>
          </View>
          <View style={PostsStyles.postMiddleRow}>
            <Image style={PostsStyles.postThumbnail} source={{uri: this._resolveThumbnail(post.data.thumbnail)}} />
            <Text style={PostsStyles.postTitle}>{post.data.title}</Text>
            <Icon name='ios-arrow-forward' size={30} style={PostsStyles.postArrow} />
          </View>
          <View style={PostsStyles.postBottomRow}>
            <TouchableOpacity onPress={() => this._dismissPost(post.id)} style={PostsStyles.postDismissButton}>
              <Icon name='ios-close-circle-outline' size={25} style={PostsStyles.postDismissIcon} />
              <Text style={PostsStyles.postDismissText}>Dismiss Post</Text>
            </TouchableOpacity>
            <Text style={PostsStyles.postCommentsNumber}>{post.data.num_comments} comments</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _renderSeparator () {
    return <View style={PostsStyles.postSeparator} />
  }

  render () {
    if (this.state.posts) {
      return (
        <View style={PostsStyles.container}>
          <FlatList
            data={this.state.posts}
            renderItem={({ item }) => this._renderPost(item)}
            keyExtractor={item => item.data.id}
            ItemSeparatorComponent={() => this._renderSeparator()}
            /*ListHeaderComponent={this.renderHeader}
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
