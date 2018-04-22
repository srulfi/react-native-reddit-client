import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from '../types'

const INITIAL_STATE = {
  fetching: false,
  posts: null,
  success: false,
  error: null,
}

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, fetching: true, success: false, error: null }
    case FETCH_POSTS_SUCCESS:
      return { ...state, fetching: false, posts: action.payload, success: true, error: null }
    case FETCH_POSTS_ERROR:
      return { ...state, fetching: false, posts: null, success: false, error: action.error }
    default:
      return state
  }
}
