import React, { Component } from 'react'
import {
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import PostDetailStyles from './styles/PostDetailStyles'

class PostDetail extends Component {

  constructor (props) {
    super(props)

    this.post = props.post.data
  }

  _openLargeImage () {
    let largeImageUrl = this.post.preview && this.post.preview.images && this.post.preview.images[0] && this.post.preview.images[0].source && this.post.preview.images[0].source.url

    if (largeImageUrl) {
      Linking.openURL(largeImageUrl)
    }
  }

  render () {
    return (
      <View style={PostDetailStyles.container}>
        <Text style={PostDetailStyles.author}>{this.post.author}</Text>
        <TouchableOpacity onPress={() => this._openLargeImage()}>
          <Image source={{uri: this.post.thumbnail}} style={PostDetailStyles.thumbnail} />
        </TouchableOpacity>
        <Text style={PostDetailStyles.title}>{this.post.title}</Text>
      </View>
    )
  }
}

export default PostDetail
