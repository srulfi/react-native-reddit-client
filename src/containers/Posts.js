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
import { getHoursAgo, resolveThumbnail } from '../utils'

import Icon from 'react-native-vector-icons/Ionicons'

import Loader from '../components/Loader'
import PostsStyles from './styles/PostsStyles'

class Posts extends Component {

  constructor (props) {
    super(props)

    this.state = {
      posts: props.posts || null,
      postSelected: null,
      postsRead: {},
      refreshing: false,
    }
  }

  componentDidMount () {
    !this.props.posts && this._fetchPosts()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.posts !== this.props.posts) {
      this.setState({posts: this.props.posts, refreshing: false})
    }
  }

  _fetchPosts () {
    //for now to avoid hardcoding, todo/nicetohave: allow user to choose from UI
    this.props.fetchPosts(config.DEFAULT_POSTS_LIMIT)
  }

  _selectPost (post) {
    let postId = post.data.id,
      postsRead = this.state.postsRead

    postsRead[postId] = true

    this.setState({
      postSelected: postId,
      postsRead,
    })

    Actions.postDetail({post: post})
  }

  _dismissPost (postId) {
    let remainingPosts = this.state.posts.filter(post => {
      return post.data.id !== postId
    })

    this.setState({posts: remainingPosts})
  }

  _handleRefresh () {
    this.setState({refreshing: true})
    this._fetchPosts()
  }

  _renderPostsList () {
    if (this.state.posts) {
      return (
        <FlatList
          data={this.state.posts}
          renderItem={({ item }) => this._renderPost(item)}
          keyExtractor={item => item.data.id}
          ItemSeparatorComponent={() => this._renderSeparator()}
          onRefresh={() => this._handleRefresh()}
          refreshing={this.state.refreshing}
        />
      )
    }
  }

  _renderPost (post) {
    let postId = post.data.id,
      activePost = this.state.postSelected === postId,
      postRead = this.state.postsRead[postId]

    return (
      <TouchableOpacity onPress={() => this._selectPost(post)}>
        <View style={[PostsStyles.postContainer, activePost && PostsStyles.postContainerSelected]}>
          <View style={PostsStyles.postTopRow}>
            <View style={[PostsStyles.postStatus, !postRead && PostsStyles.postUnreadStatus]} />
            <Text style={PostsStyles.postAuthor}>{post.data.author}</Text>
            <Text style={PostsStyles.postEntryDate}>{getHoursAgo(post.data.created_utc)} hours ago</Text>
          </View>
          <View style={PostsStyles.postMiddleRow}>
            <Image style={PostsStyles.postThumbnail} source={{uri: resolveThumbnail(post.data.thumbnail)}} />
            <Text style={PostsStyles.postTitle}>{post.data.title}</Text>
            <Icon name='ios-arrow-forward' size={30} style={PostsStyles.postArrow} />
          </View>
          <View style={PostsStyles.postBottomRow}>
            <TouchableOpacity onPress={() => this._dismissPost(postId)} style={PostsStyles.postDismissButton}>
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

  _renderDissmissAllButton () {
    return (
      <TouchableOpacity style={PostsStyles.dismissAllContainer} onPress={() => this._dismissAll()}>
        <Text style={PostsStyles.dismissAllText}>Dismiss All</Text>
      </TouchableOpacity>
    )
  }

  _dismissAll () {
    this.setState({posts: null})
  }

  render () {
    return (
      <View style={PostsStyles.container}>
        {this._renderPostsList()}
        {this._renderDissmissAllButton()}
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
