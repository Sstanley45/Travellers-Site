import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ totalStars = 5 }) => {
  const createArray = (length) => [...Array(length)];
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        /> //selectedStars > i returns a boolean.
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};

export default StarRating;
