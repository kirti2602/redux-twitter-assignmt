import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const LIKE_POST = 'LIKE_POST';
export const UNLIKE_POST = 'UNLIKE_POST';

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: error
});

export const addPost = text => ({
  type: ADD_POST,
  payload: { text, likes: 0 }
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: id
});

export const likePost = id => ({
  type: LIKE_POST,
  payload: id
});

export const unlikePost = id => ({
  type: UNLIKE_POST,
  payload: id
});

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsRequest());
    axios
      .get('https://redux.free.beeceptor.com/tweets')
      .then(res => {
        const posts = res.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch(error => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};