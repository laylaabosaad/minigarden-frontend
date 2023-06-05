
import ContactForm from "../Components/ContactUs/ContactForm"
import Footer from "../Components/Footer/Footer"
import Loader from "../Components/loader/Loader"
import { useState, useEffect } from "react";



function ContactUs() {
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
     
      <ContactForm />
      <Footer/>
    
    
    </div>
  )
}

export default ContactUs