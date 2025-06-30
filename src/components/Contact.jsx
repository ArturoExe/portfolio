import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-text-container">
        <h2>Contact Information</h2>
        <p>Stay connected with me for any inquieries or collaborations</p>
      </div>

      <div className="contact-container">
        <div className="contact-titles">
          <h1>PROJECT INQUIRY</h1>
          <h1>EMPLOYEMENT</h1>
          <h1>REQUEST</h1>
          <h1>OTHER</h1>
        </div>

        <form>
          <h2>Leave your contact information here </h2>
          <input placeholder="NAME" />
          <div className="input-container">
            <input placeholder="EMAIL" />
            <input placeholder="PHONE" />
          </div>

          <input placeholder="TYPE OF PROJECT" />
          <input placeholder="MESSAGE" />
        </form>
      </div>
      <button className="btn-submit">SUBMIT</button>
    </div>
  );
};

export default Contact;
