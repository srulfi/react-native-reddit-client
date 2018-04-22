import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from '../types'

export const fetchPosts = () => {

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
