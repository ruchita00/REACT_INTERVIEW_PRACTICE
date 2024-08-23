import React, { useState } from "react";

const Dummy = ({ totalStars = 5 }) => {
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
          key={index}
          isFilled={index < (hoverRating || rating)}
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

const Star = ({ isFilled, onClick, onMouseEnter, onMouseLeave }) => (
  <span
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{
      cursor: "pointer",
      color: isFilled ? "#ffd700" : "#d3d3d3", // Gold for filled, light gray for empty
      fontSize: "2rem",
    }}
  >
    ★
  </span>
);

export default Dummy;
