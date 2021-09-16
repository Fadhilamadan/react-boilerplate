import axios from 'axios';

export const apiPosts = () => {
  return axios({
    method: 'GET',
    url: `${process.env.API_URL}/posts`,
    headers: {
      ContentType: 'application/json',
      Accept: 'application/json',
    },
  });
};

export const apiPostDetail = (postId) => {
  return axios({
    method: 'GET',
    url: `${process.env.API_URL}/posts/${postId}`,
    headers: {
      ContentType: 'application/json',
      Accept: 'application/json',
    },
  });
};

export const apiPostDetailComments = (postId) => {
  return axios({
    method: 'GET',
    url: `${process.env.API_URL}/posts/${postId}/comments`,
    headers: {
      ContentType: 'application/json',
      Accept: 'application/json',
    },
  });
};
