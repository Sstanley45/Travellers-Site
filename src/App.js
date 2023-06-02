import React, { Suspense, lazy, useEffect, useState } from "react";
import data from "./data.js";
// import Card from "./Card.js";
import Navbar from "./components/Navbar.js";
import Loading from "./components/Loading.js";
import Landing from "./pages/Landing.js";
import Services from "./components/Services.js";
import Footer from "./components/Footer.js";
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
            console.log(data);
        } catch (error) {
             setLoading(false);
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
      <div>
        <Navbar visits={visits} />
        <Landing />
        <Services />
        <h1 style={{ textAlign: "center" }}>Popular Destinations</h1>
        <Suspense fallback={<Loading />}>{mydata}</Suspense>
        <div> {visits.length === 0 && <h3>No travels </h3>} </div>
        {visits.length === 0 && (
          <button onClick={() => setVisits(data)}>Refresh</button>
            )}
            <Footer />
      </div>
    );
} 