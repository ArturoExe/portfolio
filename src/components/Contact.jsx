import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-text-container">
        <h2>Contact Information</h2>
        <p>Stay connected with me for any inquiries or collaborations</p>
      </div>

      <div className="contact-container">
        <div className="contact-titles">
          <h1>PROJECT INQUIRY</h1>
          <h1>EMPLOYMENT</h1>
          <h1>REQUEST</h1>
          <h1>OTHER</h1>
        </div>

        <form
          action="https://formspree.io/f/xpwrbkwr" // <-- replace with your Formspree URL
          method="POST"
        >
          <h2>Leave your contact information here</h2>
          <input name="name" placeholder="NAME" required />
          <div className="input-container">
            <input name="email" type="email" placeholder="EMAIL" required />
            <input name="phone" placeholder="PHONE" />
          </div>

          <input name="projectType" placeholder="TYPE OF PROJECT" />
          <input name="message" placeholder="MESSAGE" />

          <button className="btn-submit" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
