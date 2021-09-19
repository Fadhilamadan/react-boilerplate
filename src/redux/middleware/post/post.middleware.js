import { apiPosts } from '../../../utils/api/posts';
import {
  isGetPostFailed,
  isGetPostLoading,
  isGetPostSuccess,
} from '../../action/post/post.action';

export const getPost = () => {
  return (dispatch) => {
    dispatch(isGetPostLoading());
    apiPosts()
      .then((res) => {
        dispatch(isGetPostSuccess(res.data));
      })
      .catch((err) => {
        dispatch(isGetPostFailed());
      });
  };
};
