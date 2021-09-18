import React, { useLayoutEffect } from 'react';

import { getPostDetail } from '../../../redux/middleware/post/postDetail.middleware';
import PostCardLoader from '../list/cardLoader';

import PostDetailCard from './card';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostDetail = (props) => {
  const params = useParams();

  useLayoutEffect(() => {
    props.onGetPostDetail(params.postId);
  }, []);

  return props.getPostDetailReducer.isLoading ? (
    <PostCardLoader count={1} />
  ) : (
    <PostDetailCard
      key={props.getPostDetailReducer.item.id}
      item={props.getPostDetailReducer.item}
    />
  );
};

const mapState = (state) => {
  return {
    getPostDetailReducer: state.getPostDetailReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPostDetail: (postId) => {
      dispatch(getPostDetail(postId));
    },
  };
};

export default connect(mapState, mapDispatchToProps)(PostDetail);
