import React from 'react';

import { shortText } from '../../../utils/func/text';

import { useHistory } from 'react-router-dom';

const PostCard = (props) => {
  const history = useHistory();

  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title">{shortText(props.item.title, 25)}</h2>
        <p className="text-base-content">{shortText(props.item.body, 120)}</p>

        <div className="card-actions">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => history.push(`/post/${props.item.id}`)}
          >
            Readmore
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
