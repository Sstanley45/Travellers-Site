import React, { useState } from "react";
import Data_Reviews from "./ReviewData";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [data, setData] = useState(Data_Reviews)

 
  return (
    <>
      <ReviewCard  data = {data} />
    </>
  );
};

export default Reviews;
