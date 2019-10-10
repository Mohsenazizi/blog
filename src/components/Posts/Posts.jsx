import React, { Component } from "react";
import actionCreators from "../../base/store/actions";
import { connect } from "react-redux";
import Post from "./Post/Post";
import { Link } from "react-router-dom";
import "./style.scss";
class Posts extends Component {
  componentDidMount() {
    this.props.deleteFlase();
    if (this.props.posts.length === 0) {
      this.props.getPosts();
    }
  }
  render() {
    return (
      <div className="postsContainer">
        <div className="buttonContainer">
          <div className="btn">
            <Link to="/posts/new">Add Post</Link>
          </div>
        </div>
        {this.props.posts.map((item, index) => {
          return <Post key={item.id} data={item} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(actionCreators.getPosts()),
    deleteFlase: () => dispatch(actionCreators.deleteFalseSync())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
