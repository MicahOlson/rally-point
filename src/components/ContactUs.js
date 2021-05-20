import React from 'react'
import styled from 'styled-components'

const ContactUsWrapper = styled.section`
  margin-top: 120px;
  input, textarea {
    display: block;
  }
  .col-home-left, .col-home-right {
    flex: 1;
  }
  #contact-text {
    margin-top: 50px;
    margin-left: 50px;
  }
`

const ContactUs = () => {
  const contactConfirmation = (event) => {
    event.preventDefault();
    document.querySelector("#contactConfirmation").innerHTML = "Thank you for your interest in Rally Point! A representative will be reaching out soon."
  }

  return (
    <ContactUsWrapper>
      <div className="row">
        <div className="col-contact-left">
          <h2 id="contact">Contact Us</h2>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="eamil"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              required
            />
            <button onClick={() => contactConfirmation(event)}>Submit</button>
          </form>
          <h3 id="contactConfirmation"></h3>
        </div>
        <div className="col-contact-right">
          <p id="contact-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          </p>
        </div>
      </div>
    </ContactUsWrapper>
  )
}

export default ContactUs
