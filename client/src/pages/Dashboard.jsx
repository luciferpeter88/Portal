import React from "react";
import axios from "axios";
import { context } from "../components/Context";
import { BsPenFill } from "react-icons/bs";
import ModalDash from "../components/dash/ModalDash";

function Dashboard() {
  const { dispatch } = React.useContext(context);
  // state for storing data from the server
  const [data, setData] = React.useState("");
  // state for loaded data
  const [loading, setLoading] = React.useState(false);
  //state for selecting user
  const [selectedUser, setSelectedUser] = React.useState("");

  // make a request to dashboard.js route
  async function fetch() {
    // fetching data from the server
    try {
      const get = await axios.get("http://localhost:4000/dashboard", {
        withCredentials: true,
      });
      // store the data in the usestate
      setData(get.data);
      // display the first patient what we got from the database
      setSelectedUser([get.data[0]]);
      // set the loading satet to true if we got the data from the server
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(data);

  function select(e) {
    // targetting the value, which is the email address.
    const selectedEmail = e.target.value;

    if (loading) {
      // returning the selected user only
      const selectedUser = data.filter((user) => user.email === selectedEmail);
      // set the selcted user
      setSelectedUser(selectedUser);

      console.log(selectedUser);
    }
  }

  // console.log(data);

  React.useEffect(() => {
    fetch();
  }, []);

  return (
    <React.Fragment>
      <ModalDash selectedUser={selectedUser} />
      <div className="dashboardContainer">
        <div className="da">
          <h2>Select Patient</h2>
          <select onChange={select}>
            {loading
              ? data.map((user) => (
                  // set the key and value to email,because the email address is the only unique value
                  <option key={user.email} value={user.email}>
                    {/* display the username of the email address */}
                    {user.userName}
                  </option>
                ))
              : null}
          </select>
          {loading
            ? selectedUser.map((user) => {
                return (
                  <div>
                    <img
                      className="picture"
                      src={user.avatar}
                      alt={user.userName}
                    />
                  </div>
                );
              })
            : null}
          <BsPenFill
            style={{ cursor: "pointer" }}
            color="rgb(237, 181, 7)"
            onClick={() => dispatch({ type: "DASH_MODAL" })}
          />
        </div>
        {loading
          ? selectedUser.map((user) => {
              return (
                <div>
                  <div className="dashboardCon">
                    <div className="dashSub">
                      <div>
                        <h3>Name</h3>
                        <p>{user.userName}</p>
                      </div>
                      <div>
                        <h3>Email</h3>
                        <p>{user.email}</p>
                      </div>
                      <div>
                        <h3>Phone Number</h3>
                        <p>{user.phoneNumber}</p>
                      </div>
                      <div>
                        <h3>Age</h3>
                        <p>{user.personalInfo.age}</p>
                      </div>
                      <div>
                        <h3>Location</h3>
                        <p>{user.personalInfo.location}</p>
                      </div>
                      <div>
                        <h3>Father's Name</h3>
                        <p>{user.parentsInfo.fatherName}</p>
                      </div>
                      <div>
                        <h3>Father's Phone Number</h3>
                        <p>{user.parentsInfo.fatherPhoneNum}</p>
                      </div>
                      <div>
                        <h3>Mother's Name</h3>
                        <p>{user.parentsInfo.motherName}</p>
                      </div>
                      <div>
                        <h3>Mother's Phone Number</h3>
                        <p>{user.parentsInfo.motherPhoneNum}</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h3>Medical History</h3>
                        <p>{user.medicalHistory}</p>
                      </div>
                      <div>
                        <h3>Allergies</h3>
                        <p>{user.allergies}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
