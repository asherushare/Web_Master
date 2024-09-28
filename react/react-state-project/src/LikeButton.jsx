import React from 'react';
import { useState } from 'react';

function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let toggleLike = () => {
        setIsLiked(!isLiked);
    }
  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-thumbs-up"></i>
        )}
      </p>
    </div>
  );
}

export default LikeButton
