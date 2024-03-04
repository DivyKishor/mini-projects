import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../style.css";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hoverR, sethoverR] = useState(0);
  //console.log(noOfStars);
  return (
    <div className="starRating ">
      {
        [...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={
             ( index <= rating ||  index <= hoverR) ? "active" : "inactive"
            }
            onClick={() => setRating(index)}
            onMouseMove={() => sethoverR(index)}
            onMouseLeave={() => sethoverR(rating)}
          />
        );
        })
      }
    </div>
  );
};

export default StarRating;
