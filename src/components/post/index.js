import React, { useLayoutEffect } from 'react';

import { getPost } from '../../redux/middleware/post/post.middleware';

import PostCard from './card';
import PostCardLoader from './cardLoader';

import { connect } from 'react-redux';

const Post = (props) => {
  useLayoutEffect(() => {
    props.onGetPost();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {props.getPostReducer.isLoading ? (
        <PostCardLoader count={6} />
      ) : (
        props.getPostReducer.item.map((item) => {
          return <PostCard key={item.id} item={item} />;
        })
      )}
    </div>
  );
};

const mapState = (state) => {
  return {
    getPostReducer: state.getPostReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPost: () => {
      return dispatch(getPost);
    },
  };
};

export default connect(mapState, mapDispatchToProps)(Post);
