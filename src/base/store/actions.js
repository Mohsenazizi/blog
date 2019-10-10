import axios from "../config/axios/axios";
import constants from "../config/constants/constants";
const { requests } = constants;
const GETPOSTS = "getPosts";
const GETPOST = "getPost";
const DELETEPOST = "deletePost";
const ADDPOST = "addPost";
const POSTDETAILDATA = "postDetail";
const DELETEFALSE = "deleteFalse";
const savePostsSync = posts => {
  return {
    type: GETPOSTS,
    result: posts
  };
};
const getPosts = () => {
  return dispatch => {
    axios.get(requests.getPosts).then(({ data }) => {
      console.log(data);
      dispatch(savePostsSync(data));
    });
  };
};
const saveNewPostSync = data => {
  return {
    type: ADDPOST,
    result: data
  };
};
const addPost = sendData => {
  return dispatch => {
    axios.post(requests.getPosts, sendData).then(({ data }) => {
      console.log(data);
      dispatch(saveNewPostSync(data));
    });
  };
};
const postDetailSync = data => {
  return {
    type: POSTDETAILDATA,
    result: data
  };
};
const getPostDetail = id => {
  return dispatch => {
    axios.get(requests.detail(id)).then(({ data }) => {
      console.log(data);
      dispatch(postDetailSync(data));
    });
  };
};
//
const postDeleteSync = data => {
  return {
    type: DELETEPOST,
    result: data
  };
};
const deletePost = id => {
  return dispatch => {
    axios.delete(requests.detail(id)).then(({ data }) => {
      console.log(data);
      dispatch(postDeleteSync(data));
    });
  };
};
const deleteFalseSync = () => {
  return {
    type: DELETEFALSE
  };
};
export default {
  GETPOSTS,
  GETPOST,
  DELETEPOST,
  POSTDETAILDATA,
  ADDPOST,
  DELETEPOST,
  DELETEFALSE,
  getPosts,
  addPost,
  getPostDetail,
  deletePost,
  deleteFalseSync
};
