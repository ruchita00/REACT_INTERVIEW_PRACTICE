import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };
  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };
  const handleMouseLeave = () => {
    setHoverRating(0);
  };
  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: totalStars }, (_, index) => (
        <Star
          isFilled={index < (hoverRating || rating)}
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};
const Star = ({ onClick, isFilled, onMouseEnter, onMouseLeave }) => {
  return (
    <span
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        color: isFilled ? "yellow" : "gray",
        fontSize: "2rem",
        cursor: "pointer",
      }}
    >
      ★
    </span>
  );
};

export default StarRating;
