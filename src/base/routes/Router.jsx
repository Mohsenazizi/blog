import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Posts from "../../components/Posts/Posts";
import NewPosts from "../../components/NewPost/NewPost";
import PostDetail from "../../components/PostDetail/PostDetail";
const Router = () => {
  return (
    <Switch>
      <Route path="/posts/new" exact component={NewPosts} />
      <Route path="/posts/:id" exact component={PostDetail} />
      <Route path="/" component={Posts} />
    </Switch>
  );
};

export default Router;
