import React, { useState } from "react";
import StarRating from "./StarRating";

export default function Card(props) {
  const [like, setLike] = React.useState(0);
  const [readMore, setReadMore] = useState(false);

  function handleReadMore() {
    setReadMore((prev) => !prev);
  }

  return (
    <div className=" mb-2">
      <div className="m-2 card-div">
        <div>                                
          <img
            src={props.item.imageUrl}
            className="card-img"
            alt="loading photo..."
          />
        </div>
        <div>
          <div className="card-body">
            <p className="card-text">
              <small className="text-muted">{props.item.location}</small>
            </p>
            <h5 className="card-title">{props.item.title}</h5>
            <p className="card-text">
              {readMore
                ? props.item.description
                : `${props.item.description.substring(0, 180)}...`}{" "}
              <button onClick={handleReadMore} id="readM-btn">
                {readMore ? "ReadLess" : "ReadMore"}
              </button>
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
