import React from 'react';

import { shortText } from '../../utils/func/text';

import { useHistory } from 'react-router-dom';

const PostCard = (props) => {
  const history = useHistory();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        {shortText(props.item.title, 25)}
      </h2>
      <p className="text-gray-700">{shortText(props.item.body, 120)}</p>

      <button
        className="btn btn-primary btn-sm mt-4"
        onClick={() => history.push(`/post/${props.item.id}`)}
      >
        Readmore
      </button>
    </div>
  );
};

export default PostCard;
