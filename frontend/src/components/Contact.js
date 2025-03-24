import React, { useState } from 'react';
import './Contact.css';
import './Common.css';

function Contact() {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    myfile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
  
    // ⚠️ Add empty file object if file is missing — to ensure key is present
    data.append("myfile", formData.myfile ?? new Blob([], { type: 'application/octet-stream' }));
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
  
      if (response.ok) {
        setMessage("✅ Form submitted successfully!");
        setFormData({ name: "", email: "", subject: "", message: "", myfile: null });
      } else {
        const errorData = await response.json();
        setMessage(`❌ Error: ${errorData.error || "Submission failed."}`);
      }
    } catch (err) {
      setMessage("❌ Something went wrong.");
    }
  };
  

  return (
    <section id='contact'>
      <h2>Contact Us</h2>
      {message && <div className="form-response">{message}</div>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

        <label htmlFor="myfile">Select a file (optional):</label>
        <input type="file" id="myfile" name="myfile" onChange={handleChange} /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
