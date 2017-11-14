import React from 'react';
import ContactLinksContainer from './ContactLinksContainer'
import '../styles/Contact.css'

const Contact = (props) => {

  return (
    <div className='main-content fade-in'>
      <ContactLinksContainer {...props} />
    </div>
  )
}

export default Contact;