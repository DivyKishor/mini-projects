import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating2 = ({ totalStars, initialRating = 0, onSelectRating }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(null);

  const handleMouseOver = (hoveredStar) => {
    setHoverRating(hoveredStar);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  const handleClick = (selectedStar) => {
    setRating(selectedStar);
    //onSelectRating(selectedStar);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = rating >= starValue;
        const isHovered = hoverRating !== null && starValue <= hoverRating;
        const isHalfFilled = hoverRating !== null && hoverRating < starValue && starValue - hoverRating === 0.5;

        return (
          <span
            key={starValue}
            style={{ cursor: 'pointer' }}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          >
            {isHovered || isFilled ? (
              isHalfFilled ? (
                <FaStarHalfAlt color="#ffc107" />
              ) : (
                <FaStar color="#ffc107" />
              )
            ) : (
              <FaRegStar color="#ffc107" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating2;