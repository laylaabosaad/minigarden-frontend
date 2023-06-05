import React from 'react'
import LoginComponent from '../Components/LoginAndSignup/LoginComponent'
import Footer from '../Components/Footer/Footer'
import { useState, useEffect } from 'react';
import Loader from '../Components/loader/Loader';

function Login() {
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
    <div>
      <div>
        <LoginComponent/>

      </div>
      <Footer/>

    </div>
  )
}

export default Login