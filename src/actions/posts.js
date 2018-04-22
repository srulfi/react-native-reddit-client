import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from '../types'

import config from '../config'

export const fetchPosts = (postsLimit) => {
  return dispatch => {
    dispatch({type: FETCH_POSTS})
    fetch(config.API_ENDPOINT + postsLimit)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        let posts = responseJson && responseJson.data && responseJson.data.children
        if (posts) {
          fetchPostsSuccess(dispatch, posts)
        } else {
          fetchPostsError(dispatch, { message: 'server error' })
        }
      })
      .catch(error => fetchPostsError(dispatch, error))
  }
}

const fetchPostsSuccess = (dispatch, posts) => {
  dispatch({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  })
}

const fetchPostsError = (dispatch, error) => {
  dispatch({
    type: FETCH_POSTS_ERROR,
    error,
  })
}
