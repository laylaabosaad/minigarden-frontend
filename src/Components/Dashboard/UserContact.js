import { useState, useEffect } from "react";
import axios from "axios";

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
      <div className="all-usercontact-admin">
        {userContact.map((msg, index) => (
          <div key={index}>
            <h1>Hellooo</h1>
            <h1>Hellooo</h1>
            <h1>Hellooo</h1>
            <h1>Hellooo</h1>
            <h1>Hellooo</h1>
            <p>{msg.fullname}</p>
            <p>{msg.message}</p>
            <p>{msg.phonenumber}</p>
            <p>{msg.email}</p>
                <button onClick={() => deletemessage(msg._id)}>Delete</button>
                {console.log(msg._id)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserContact;
