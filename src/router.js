import React from 'react';

import Post from './components/post';

import { Route, Switch } from 'react-router-dom';

const Router = () => {
  return (
    <div className="container mx-auto px-4">
      <Switch>
        <Route exact path="/">
          <Post />
        </Route>
      </Switch>
    </div>
  );
};

export default Router;
