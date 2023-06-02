import React, { useState } from "react";
import StarRating from "./StarRating";


export default function Card(props){

  const [like, setLike] = React.useState(0)
  const [readMore, setReadMore] = useState(false)
    function handleClick(){
      setLike(prevState => prevState + 1)
    }
  function handleReadMore() {
      setReadMore(prev => !prev)
   
  }
  
    const classatt = like == 0 ? "btn btn-secondary" : "btn btn-primary"

    return (
      <div className=" mb-3">
        <div className="m-2 card-div">
          <div className="col-md-4">
            <img
              src={props.item.imageUrl}
              className="card-img"
              alt="loading photo..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">
                <small className="text-muted">{props.item.location}</small>
              </p>
              <h5 className="card-title">{props.item.title}</h5>
              <p className="card-text">
                {readMore ? props.item.description :  `${props.item.description.substring(0, 180)}...`} <button onClick={handleReadMore} id="readM-btn">{ readMore ? "readLess" : "readMore" }</button>
              </p>
              <p className="card-text">
                <small className="text-muted">{props.item.startDate}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">{props.item.endDate}</small>
              </p>
              <StarRating />
            
            </div>
          </div>
        </div>
      </div>
    );
} 

