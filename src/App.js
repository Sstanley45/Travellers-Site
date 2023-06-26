import travel from '../src/images/travell.svg'
import faq from "../src/images/faq.svg";
import React, { Suspense, lazy, useEffect, useState } from "react";
import data from "./data.js";
// import Card from "./Card.js";
import Navbar from "./components/Navbar.js";
import Loading from "./components/Loading.js";
import Landing from "./pages/Landing.js";
import Services from "./components/Services.js";
import Footer from "./components/Footer.js";
import Reviews from "./components/Reviews.js";
import Questions from "./components/Accordion/Questions.js";
import SideBar from './components/SideBar';
import Submenu from './components/Submenu';
const Card = lazy(() => import("./components/Card.js"));


export default function App() {
    const [visits, setVisits] = useState(data)
    const [loading, setLoading] = useState(true) 

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch('')
            const data = await response.json()
            setLoading(false)
            console.log(data)
        } catch (error) {
             setLoading(false)
            console.error(error)
        }
    }
    useEffect(() => {
        fetchData()
    },[])

    const handleRemove = (id) => {
        const left_visits = visits.filter((visit) => visit.id !== id);
         return setVisits(left_visits)
    }

    const mydata = visits.map(item => {
        return(
            <Card 
                key = {item.id}
                item={item}
                handleRemove = {handleRemove}
            />
             ) 
    })


    return (
      <div className="container">
        <Navbar visits={visits} />
        <Submenu />
        <Landing />
        <Services />
        <h1 style={{ textAlign: "center", margin: "30px" }}>
          Popular Destinations
        </h1>
        <Suspense fallback={<Loading />}>{mydata}</Suspense>
        <h2 style={{ textAlign: "center" }}>
          Checkout Reviews From Our Clients!
        </h2>
        <div className="reviews-illustration-div">
          <div>
            <Reviews />
          </div>
          <div className="ilustration-person-with-bag">
            <img className="illustration-travell person-with-bag-img" src={travel} alt="" />
          </div>
        </div>
        <h3 style={{ textAlign: "center",margin:"15px" }}>
          Frequently asked question - <span className="style-text">FAQs</span>
        </h3>
        <div className="question-illustration-div">
          <div>
            <img
              className="illustration-travell illustration-question"
              src={faq}
              alt=""
            />
          </div>
          <div>
            <Questions />
          </div>
        </div>

        <Footer />
      </div>
    );
} 