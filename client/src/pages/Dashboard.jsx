import React from "react";
import axios from "axios";
import { context } from "../components/Context";

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
    }
  }
  console.log(selectedUser);
  // console.log(data);

  React.useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="dashboardContainer">
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
    </div>
  );
}

export default Dashboard;
