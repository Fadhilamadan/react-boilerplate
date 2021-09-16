import { apiPosts } from '../../../utils/api/posts';
import {
  isGetPostFailed,
  isGetPostLoading,
  isGetPostSuccess,
} from '../../action/post/post.action';
import store from '../../store';

export const getPost = () => {
  store.dispatch(isGetPostLoading());
  apiPosts()
    .then((res) => {
      store.dispatch(isGetPostSuccess(res.data));
    })
    .catch((err) => {
      store.dispatch(isGetPostFailed());
    });
};
