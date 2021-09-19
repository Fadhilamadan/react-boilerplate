import {
  GET_POST_DETAIL_FAILED,
  GET_POST_DETAIL_LOADING,
  GET_POST_DETAIL_SUCCESS,
} from '../../const';

export const isGetPostDetailLoading = () => {
  return {
    type: GET_POST_DETAIL_LOADING,
  };
};

export const isGetPostDetailSuccess = (data) => {
  return {
    type: GET_POST_DETAIL_SUCCESS,
    data: data,
  };
};

export const isGetPostDetailFailed = () => {
  return {
    type: GET_POST_DETAIL_FAILED,
  };
};
