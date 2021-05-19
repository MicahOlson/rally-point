import React from 'react'

const ContactUs = () => {
  const contactConfirmation = (event) => {
    event.preventDefault();
    document.querySelector("#contactConfirmation").innerHTML = "Thank you for your interest in Rally Point! A representative will be reaching out soon."
  }

  return (
    <div>
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
        <input
          type="textarea"
          name="message"
          placeholder="Message"
          required
        />
        <button onClick={() => contactConfirmation(event)}>Submit</button>
      </form>
      <h3 id="contactConfirmation"></h3>
    </div>
  )
}

export default ContactUs
