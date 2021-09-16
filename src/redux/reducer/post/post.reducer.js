import { GET_POST_LOADING, GET_POST_SUCCESS, GET_POST_FAILED } from '../../const';

const initState = {
  isLoading: true,
  isFailed: false,
  item: [],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POST_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        isFailed: false,
      });

    case GET_POST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        item: action.data,
      });

    case GET_POST_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: true,
      });

    default:
      return state;
  }
};

export default postReducer;
