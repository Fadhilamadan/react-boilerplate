import React from 'react';

const PostCard = (props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{props.title}</h2>
      <p className="text-gray-700">{props.body}</p>
    </div>
  );
};

export default PostCard;
