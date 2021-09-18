import React from 'react';

const PostDetailCard = (props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{props.item.title}</h2>
      <p className="text-gray-700">{props.item.body}</p>
    </div>
  );
};

export default PostDetailCard;
