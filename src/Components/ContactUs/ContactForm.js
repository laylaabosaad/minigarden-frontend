import axios from "axios";
import "../ContactUs/contact.css";
import contactimg from "../images/terr.png";
import { useState } from "react";
import swal from "sweetalert";

function ContactForm() {
  const [fullname, setFullName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  // const [refresh, setRefresh] = useReducer((x) => x + 1, 0);

  const handleSubmit = async () => {
    const data = {
      fullname: fullname,
      email: email,
      phonenumber: phonenumber,
      message: message,
    };
    if (!fullname || !email || !phonenumber || !message) {
      swal({
        title: "Please Fill all the fields",
        text: "For a better service fill the fields",
        icon: "error",
        button: "ok",
      });
    } else {
      swal({
        title: "Thank you for contacting us!",
        text: "Our team will get back to you soon",
        icon: "success",
        button: "ok",
      });

      const send = await axios.post(
        "https://mini-garden.onrender.com/contactus/",
        data
      );
      const res = send.data.data;
    }

    setmessage("");
    setEmail("");
    setFullName("");
    setPhoneNumber("");
  };

  return (
    <div>
      <div className="contact-header-all">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <h5>Feel free to contact us and Send us a message</h5>
        </div>
      </div>

      {/* <div className="contactus-form-background"> */}
      <div className="contact-imgwithform">
        <div className="image-contactus">
          <img className="contactimg" src={contactimg}></img>
        </div>
        <div className="contact-us-withinbox">
          <div className="contact-">
            <h5>Send us a message</h5>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor</p>
          </div>
          <div className="contact-us-form">
            <div className="contact-contantfit">
              <div className="contactus-inputs">
                <label>Full Name</label>
                <input
                  className="cont-inputs"
                  type="text"
                  required
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                ></input>
                <label>Phone Number</label>
                <input
                  className="cont-inputs"
                  type="tel"
                  required
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
                <label>Email</label>
                <input
                  className="cont-inputs"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label>Your message</label>
                <input
                  className="cont-inputs message"
                  type="text"
                  required
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                />

                <button onClick={() => handleSubmit()} className="submit-btn">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default ContactForm;
