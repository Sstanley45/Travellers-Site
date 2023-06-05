import React, { useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


const ReviewCard = (data) => {

    let len = data.data.length;
    // let randomNo = Math.floor(Math.random() * len) 
    const [randomNo, setRandomNo] = useState(Math.floor(Math.random() * (len+1)));
   

    const handleLeftArrow = () => {
        if (randomNo === 0) {
             setRandomNo(len-1)
        }   
        else {
            setRandomNo(randomNo - 1)
        }  
    }
     const handleRightArrow = () => {
       if (randomNo === (len-1)) {
         setRandomNo(0);
       } else {
         setRandomNo(randomNo + 1);
       }
     };

     let viewData = data.data[randomNo];
    
  return (
    <>
      <div className="review-div">
        <div>
          <img className="review-img" src={viewData.image} alt="img" />
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>{viewData.name}</h3>
          <h5 style={{ textAlign: "center" }} className="style-text">
            {viewData.job}
          </h5>
          <p>{viewData.text}</p>
        </div>
        <div className="review-icons">
          <div>
            <FaAngleLeft onClick={handleLeftArrow} className="angle" />
          </div>
          <div>
            <FaAngleRight onClick={handleRightArrow} className="angle" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard