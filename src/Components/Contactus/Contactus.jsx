import './Contactus.css'
function Contact(){
  
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
              <form>
                <div className="form-inner1 flex">
                  <div className="custom-col">
                    <label htmlFor="fullName" className="form-label">Full Name </label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter name" />
                  </div>
                  <div className="custom-col">
                    <label htmlFor="email" className="form-label email" > Email </label>
                    <div className="input-group">
                      <span className="input-group-text"> <i className="fas fa-envelope"></i></span>
                      <input type="email" className="form-control" id="email" placeholder="olivia@untitledui.com" />
                    </div>
                  </div>
                  <div className="custom-col">
                    <label htmlFor="phone" className="form-label">Phone number</label> 
                    <input type="tel" className="form-control" id="phone" placeholder="+91 123XXXXXXXX" />
                  </div>
                  <div className="custom-col">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="" />
                  </div>
                  <div className="custom-col message">
                    <label htmlFor="message" className="form-label " id='msg'>Your Message</label>
                    <textarea className="form-control textarea-message" id="message" placeholder="Type your message here"></textarea>
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