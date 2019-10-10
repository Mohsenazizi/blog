import axios from "axios";
const BASE_URL = "http://reduxblog.herokuapp.com/api/";
const request = axios.create({
  baseURL: BASE_URL
});

export default request;
