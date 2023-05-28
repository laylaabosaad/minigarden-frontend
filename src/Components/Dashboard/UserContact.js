import { useState, useEffect } from "react";
import axios from "axios";
import "../Dashboard/contactadmin.css"

function UserContact() {
  const [userContact, setUserContact] = useState([]);
  const getmessages = async () => {
    const find = await axios.get("http://localhost:2000/contactus/", {});
    const res = find.data.data;
    setUserContact(find.data.data);
  };

  const deletemessage = async (_id) => {
    const remove = await axios.delete(`http://localhost:2000/contactus/${_id}`);
    getmessages();
  };

  useEffect(() => {
    getmessages();
  }, []);

  return (
    <div>
      <div className="backgrnd">
        <h1 className="prodtitle-admin">Messages</h1>
      </div>
      <div className="usercontact-admin">
        {userContact.map((msg, index) => (
          <div className="all-usercontact-admin" key={index}>
            <div className="roworders">
              <label>
                <strong> Name:</strong>
              </label>
              <p>{msg.fullname}</p>
            </div>
            <div className="roworders">
              <label>
                <strong> Phone Number:</strong>
              </label>
              <p>{msg.phonenumber}</p>
            </div>
            <div className="roworders">
              <label>
                <strong> Email:</strong>
              </label>
              <p>{msg.email}</p>
            </div>
            <div className="roworders">
              <label>
                <strong>Message:</strong>
              </label>
              <p>{msg.message}</p>
            </div>
            <button
              className="submit-btn"
              onClick={() => deletemessage(msg._id)}
            >
              Delete
            </button>
            {console.log(msg._id)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserContact;
