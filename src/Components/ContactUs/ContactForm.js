import "../ContactUs/contact.css"
import contactimg from "../images/contact-img.jpg"


function ContactForm() {
  return (
    <div>
      <div className="Contact-header-img">
        <div>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contactus-form-background">
        <div className="contactus-form">
          <div>
            <img className="contactimg" src={contactimg}></img>
          </div>
          <div className="contactus-form-inputs">
            <h5>Send us a message</h5>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor</p>
            <input
              className="cont-inputs"
              type="text"
              required
              placeholder="Name"
            ></input>
            <input
              className="cont-inputs"
              type="number"
              required
              placeholder="Phone"
            ></input>
            <input
              className="cont-inputs"
              type="email"
              required
              placeholder="Email"
            ></input>
            <input
              className="cont-inputs"
              type="text"
              required
              placeholder="Your Message"
            />
           
            <button className="Contact-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm