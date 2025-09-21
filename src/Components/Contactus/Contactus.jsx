import { useState } from 'react';
import './Contactus.css';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      alert(data.message);

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });

    } catch (err) {
      console.error(err);
      alert('Error sending message');
    }
  };

  return (
    <>
      <section className="contact-section" id='contactus'>
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p>Have a question or want to book a table? Reach out to the Garam Dharam team — we're here to help and make your visit special!</p>
          <div className="contact-info">
            <i className="fas fa-envelope"></i>
            <span>garamdharamofficial@gmail.com</span>
          </div>
          <div className="contact-info">
            <i className="fas fa-phone-alt"></i>
            <span>Support: (+91) 12 5452 7784</span>
          </div>
        </div>

        <div className="contact-right">
          <h3>We’d love to hear from you!<br />Let’s get in touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-inner1 flex">
              <div className="custom-col">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="custom-col">
                <label htmlFor="email" className="form-label email">Email</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="olivia@untitledui.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="custom-col">
                <label htmlFor="phone" className="form-label">Phone number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="+91 123XXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="custom-col">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="custom-col message">
                <label htmlFor="message" className="form-label" id='msg'>Your Message</label>
                <textarea
                  className="form-control textarea-message"
                  id="message"
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-send">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
