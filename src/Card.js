import React from "react";



export default function Card(props){

    const [like, setLike] = React.useState(0)
    function handleClick(){
      setLike(prevState => prevState + 1)
    }

    const classatt = like == 0 ? "btn btn-secondary" : "btn btn-primary"

    return(
    <div className="card mb-3" > 
          <div className="row g-0">
              <div className="col-md-4">
              <img src= {props.item.imageUrl} className="img-fluid rounded-start img-thumbnail" alt="loading photo..." />
              </div>
                  <div className="col-md-8">
                          <div className="card-body">
                                <p className="card-text"><small className="text-muted">{props.item.location}</small></p>
                                <h5 className="card-title">{props.item.title}</h5>
                                <p className="card-text">{props.item.description}</p>
                          
                                <p className="card-text"><small className="text-muted">{props.item.startDate}</small></p>
                                <p className="card-text"><small className="text-muted">{props.item.endDate}</small></p>
                                <button className={classatt} onClick = {handleClick} > {like } </button> likes
                            </div>
                   </div>
          </div>
    </div>

        
  )
} 










        


        // <div classNameName="card">
            
        //     <img src={props.item.imageUrl} classNameName="card--image" alt="pic" />
        //     <div classNameName="card--stats">
               
        //         <span>{props.item.description}</span>
        //         <span classNameName="gray">({props.item.startDate}) • </span>
        //         <span classNameName="gray">{props.item.location}</span>
        //     </div>
        //     <p classNameName="card--title">{props.item.title}</p>
        //     <p classNameName="card--price"><span classNameName="bold">From ${props.item.price}</span></p>
        // </div> 