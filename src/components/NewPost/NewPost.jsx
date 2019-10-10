import React, { Component } from "react";
import { connect } from "react-redux";
import actionCreators from "../../base/store/actions";
import { Redirect, Link } from "react-router-dom";
import "./style.scss";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPostData: {
        title: "",
        categories: "",
        content: ""
      }
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const { name, value } = e.target;
    console.log(name + ":" + value);
    const newState = { ...this.state };
    newState["newPostData"][name] = value;
    this.setState({
      ...newState
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.newPostData);
    this.props.addPost(this.state.newPostData);
  }
  render() {
    const { savedPostStatus } = this.props;
    const { newPostData } = this.state;
    const { title, categories, content } = newPostData;
    return (
      <>
        {savedPostStatus ? (
          <Redirect />
        ) : (
          <form onSubmit={e => this.onSubmit(e)}>
            <ul>
              <li>
                <div>title:</div>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.onChange}
                />
              </li>
              <li>
                <div>categories:</div>
                <input
                  type="text"
                  name="categories"
                  value={categories}
                  onChange={this.onChange}
                />
              </li>
              <li>
                <div>content:</div>
                <textarea
                  onChange={this.onChange}
                  id=""
                  cols="30"
                  rows="10"
                  name="content"
                  value={content}
                  name="content"
                ></textarea>
              </li>
              <li>
                <input type="submit" value="Save" />
                <div className="btn">
                  <Link to="/posts">Cansel</Link>
                </div>
              </li>
            </ul>
          </form>
        )}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    savedPostStatus: state.savedPostStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(actionCreators.getPosts()),
    addPost: data => dispatch(actionCreators.addPost(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);
