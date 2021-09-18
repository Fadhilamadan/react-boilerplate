import React from 'react';

import Post from './components/post/list';
import PostDetail from './components/post/detail';

import { Route, Switch } from 'react-router-dom';

const Router = () => {
  return (
    <div className="container mx-auto px-4">
      <Switch>
        <Route exact path="/">
          <Post />
        </Route>
        <Route exact path="/post/:postId">
          <PostDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default Router;
