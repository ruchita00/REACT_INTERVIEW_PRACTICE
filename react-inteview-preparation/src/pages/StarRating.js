import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };
  const handleHoverEnter = (value) => {
    setHoverRating(value);
  };
  const handleHoverLeave = () => {
    setHoverRating(0);
  };
  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: totalStars }, (_, index) => (
        <Star
          key={index}
          isFilled={index < (rating || hoverRating)}
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => handleHoverEnter(index + 1)}
          onMouseLeave={handleHoverLeave}
        />
      ))}
    </div>
  );
};

const Star = ({ onClick, onMouseEnter, onMouseLeave, isFilled }) => {
  <span
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{
      cursor: "pointer",
      color: isFilled ? "yellow" : "gray",
      fontSize: "2rem",
    }}
  >
    {" "}
    ★
  </span>;
};

export default StarRating;
