import React from "react";
import axios from "axios";
import { context } from "../components/Context";
import { BsPenFill } from "react-icons/bs";
import ModalDash from "../components/dash/ModalDash";
import User from "../components/Profile/User";

function Dashboard() {
  const { dispatch, state } = React.useContext(context);
  // state for storing data from the server
  const [data, setData] = React.useState("");
  // state for loaded data
  const [loading, setLoading] = React.useState(false);
  //state for selecting user
  const [selectedUser, setSelectedUser] = React.useState("");
  const [selected, setSelected] = React.useState(false);

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
      // send the email to the global reducer function
      dispatch({ type: "SECELTED_EMAIL", email: selectedEmail });
      dispatch({ type: "SECELTED_USER", user: selectedUser });
      setSelected(true);
    }
  }
  console.log(state.selectedEmail);
  React.useEffect(() => {
    fetch();
  }, [state.dashModal]);

  return (
    <React.Fragment>
      {loading ? (
        <ModalDash setSelectedUser={setSelectedUser} select={selectedUser} />
      ) : null}
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
          {loading && selected
            ? selectedUser.map((user) => {
                return (
                  <div key={user.email}>
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
        {loading && selected
          ? selectedUser.map((user) => {
              return <User user={user} />;
            })
          : null}
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
