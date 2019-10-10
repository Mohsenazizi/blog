import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import actionCreators from "../../base/store/actions";
import "./style.scss";
class PostDetail extends Component {
  componentDidMount() {
    // console.log();
    this.props.getPostDetail(this.props.match.params.id);
    console.log(this.props.postDetail);
  }
  render() {
    return (
      <>
        {this.props.loaded ? (
          <Redirect to="/posts" />
        ) : (
          <div className="postDetailContainer">
            <div className="backDeleteContainer">
              <Link to="/posts">Back to posts</Link>
              <div
                className="btn"
                onClick={() => this.props.deletePost(this.props.postDetail.id)}
              >
                Delete
              </div>
            </div>
            <div className="title">{this.props.postDetail.title}</div>
            <div className="category">{this.props.postDetail.categories}</div>
            <div className="content">{this.props.postDetail.content}</div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    postDetail: state.postDetail,
    loaded: state.loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPostDetail: data => dispatch(actionCreators.getPostDetail(data)),
    addPost: data => dispatch(actionCreators.addPost(data)),
    deletePost: data => dispatch(actionCreators.deletePost(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
