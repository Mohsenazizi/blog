import actionTypes from "./actions";

const initialState = {
  savedPostStatus: false,
  posts: [],
  postDetail: {},
  loaded: false
};
const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.GETPOSTS:
      newState.posts = action.result;
      return {
        ...newState
      };
    case actionTypes.ADDPOST:
      newState.savedPostStatus = true;
      newState.posts.push(action.result);
      return {
        ...newState
      };
    case actionTypes.POSTDETAILDATA:
      newState.postDetail = action.result;
      newState.loaded = false;
      return {
        ...newState
      };

    case actionTypes.DELETEPOST:
      newState.loaded = true;
      const newPosts = newState.posts.filter(item => {
        return item.id !== action.result.id;
      });
      newState.posts = newPosts;
      return {
        ...newState
      };

    case actionTypes.DELETEFALSE:
      newState.loaded = false;
      return {
        ...newState
      };
    default:
      return state;
  }
};
export default reducer;
