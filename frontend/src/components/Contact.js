//Contact.js
import React from 'react';
import './Contact.css';
import './Common.css'

function Contact() {
    return (
        <div>
            <section id='contact'>
      <h2>CONTACT</h2>
      <div className="about-divider"></div>
      <form method="post" action="/api/contact" enctype="multipart/form-data">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <label htmlFor="myfile">Select files:</label>
        <input type="file" id="myfile" name="myfile" multiple /><br /><br />

        <button type="submit">Submit</button>
      </form>
      </section>
    </div>
    );
}

export default Contact;