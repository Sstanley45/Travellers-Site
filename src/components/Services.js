import React from 'react'

const Services = () => {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Our Services</h1>
        <div className="services-div">
          <div>
            <img
              className="service-img"
              src="https://images.unsplash.com/photo-1483450388369-9ed95738483c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmxpZ2h0JTIwYm9va2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h2 style={{ textAlign: "center" }}>Flight Booking</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi id alias veritatis suscipit esse, aut deleniti ad eligendi ipsa eaque veniam saepe praesentium dolore. Tempore.
            </p>
          </div>
          <div>
            <img
              className="service-img"
              src="https://images.unsplash.com/photo-1594741158704-5a784b8e59fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEhvdGVsJTIwYm9va2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h2 style={{ textAlign: "center" }}>Hotel Booking</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatibus recusandae repellendus, nemo quod rem iste nulla quasi eius odio?
            </p>
          </div>
          <div>
            <img
              className="service-img"
              src="https://media.istockphoto.com/id/1416033324/photo/driver-greeting-vacationers-before-boarding-motor-coach.webp?b=1&s=170667a&w=0&k=20&c=yw8oCL2nXUng9appTbDVUY5uaHAoDcS311nx4QbnIUI="
              alt=""
            />
            <h2 style={{ textAlign: "center" }}>Tour Packages</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus soluta voluptatem omnis fuga odio reiciendis, exercitationem totam qui.
            </p>
          </div>
        </div>
      </>
    );
}

export default Services