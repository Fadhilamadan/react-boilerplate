import React from 'react';

const PostDetailCard = (props) => {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title">{props.item.title}</h2>
        <p className="text-base-content">{props.item.body}</p>
      </div>
    </div>
  );
};

export default PostDetailCard;
