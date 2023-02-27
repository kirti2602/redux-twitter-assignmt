import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST,
  DELETE_POST,
  LIKE_POST,
  UNLIKE_POST,
} from "./actionCreators";

const initialState = {
  loading: true,
  posts: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case FETCH_POSTS_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            text: action.payload.text,
            likes: action.payload.likes,
            liked: false,
          },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, numberOfLikes: post.numberOfLikes + 1, liked: true }
            : post
        ),
      };

      case UNLIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, numberOfLikes: post.numberOfLikes - 1, liked: false }
            : post
        ),
      };
    default:
      return state;
  }
};

export default reducer;
