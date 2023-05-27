import axios from "axios";
import "../ContactUs/contact.css";
import contactimg from "../images/contact-img.jpg";
import { useState } from "react";

function ContactForm() {
  const [fullname, setFullName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");


  const handleSubmit = async () => {
    const data = {
      fullname: fullname,
      email: email,
      phonenumber: phonenumber,
      message: message,
    };
    const send = await axios.post("http://localhost:2000/contactus/", data);
    const res = send.data.data;
    console.log(send.data);
  };

  return (
    <div>
      <div className="Contact-header-img">
        <div>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contactus-form-background">
        <div>
          <div className="contactus-form">
            <div>
              <img className="contactimg" src={contactimg}></img>
            </div>
            <div className="contactus-form-inputs">
              <h5>Send us a message</h5>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor</p>
              <form onSubmit={handleSubmit}>
                <input
                  className="cont-inputs"
                  type="text"
                  required
                  placeholder="Name"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                ></input>
                <input
                  className="cont-inputs"
                  type="number"
                  required
                  value={phonenumber}
                  placeholder="Phone"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
                <input
                  className="cont-inputs"
                  type="email"
                  required
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                  className="cont-inputs message"
                  type="text"
                  required
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  placeholder="Your Message"
                />

                <button type="Submit" className="Contact-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
