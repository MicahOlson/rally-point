import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          // value={this.state.email} 
          // onChange={this.handleChange} 
          required
        />
        <input
          type="eamil"
          name="email"
          placeholder="Email"
          // value={this.state.email} 
          // onChange={this.handleChange} 
          required
        />
        <input
          type="textarea"
          name="message"
          placeholder="Message"
          // value={this.state.email} 
          // onChange={this.handleChange} 
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

// // function ContactUs() {
// //   return (
// //     <div>
// //       {/* <form onSubmit={document.querySelector("#contact-us-confirmation").innerHTML = "Thanks for reaching out to Rally Point! A representative will contact you shortly"}> */}
// //       <form>
// //         <input 
// //           type="text" 
// //           name="name" 
// //           placeholder="Name" 
// //           // value={this.state.email} 
// //           // onChange={this.handleChange} 
// //           required 
// //         />
// //         {/* <input 
// //           type="email" 
// //           name="email" 
// //           placeholder="Email" 
// //           value={this.state.email} 
// //           onChange={this.handleChange} 
// //           required 
// //         />
// //         <input 
// //           type="password" 
// //           name="password" 
// //           placeholder="Password" 
// //           value={this.state.password} 
// //           onChange={this.handleChange} 
// //           required 
// //         /> */}
// //         <button type="submit">Submit</button>
// //       </form>
// //       <p id="contact-us"></p>
// //     </div>
// //   );
// // }

export default ContactUs
