import { GET_POST_LOADING, GET_POST_SUCCESS, GET_POST_FAILED } from '../../const';

export const isGetPostLoading = () => {
  return {
    type: GET_POST_LOADING,
  };
};

export const isGetPostSuccess = (data) => {
  return {
    type: GET_POST_SUCCESS,
    data: data,
  };
};

export const isGetPostFailed = () => {
  return {
    type: GET_POST_FAILED,
  };
};
