import React, { useEffect } from "react";

import Breadcrumb from '../components/Breadcrumb'
import ContactForm from '../components/ContactForm'


function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 
  return (
    <div>
      <Breadcrumb title="Contact Us"  />   
      <ContactForm />
    </div>
  )
}

export default ContactUs
