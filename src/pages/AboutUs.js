import React from 'react'
import Rectangle from '../Components/Aboutus/Rectangle'
import {useState, useEffect } from 'react'

import "../Components/Aboutus/rectangle.css"
import Footer from '../Components/Footer/Footer'
import Loader from '../Components/loader/Loader'


function AboutUs() {
   const [loading, setLoading] = useState(true);
    useEffect(() => {
     
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    if (loading) {
      return <Loader />;
    }
  return (
    <div className="about-us-page">
      <Rectangle />
     
      <Footer />
    </div>
  );
}

export default AboutUs