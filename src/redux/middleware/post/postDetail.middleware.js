import { apiPostDetail } from '../../../utils/api/posts';
import {
  isGetPostDetailLoading,
  isGetPostDetailSuccess,
  isGetPostDetailFailed,
} from '../../action/post/postDetail.action';

export const getPostDetail = (postId) => {
  return (dispatch) => {
    dispatch(isGetPostDetailLoading());
    apiPostDetail(postId)
      .then((res) => {
        dispatch(isGetPostDetailSuccess(res.data));
      })
      .catch((err) => {
        dispatch(isGetPostDetailFailed());
      });
  };
};
