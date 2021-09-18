import getPostReducer from './reducer/post/post.reducer';
import getPostDetailReducer from './reducer/post/postDetail.reducer';

import { combineReducers } from 'redux';

export default combineReducers({
  getPostReducer,
  getPostDetailReducer,
});
