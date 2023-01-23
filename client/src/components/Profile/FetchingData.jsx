import React from "react";
import { context } from "../Context";
import getCookie from "../functions/getCookie";
import axios from "axios";
// custom hook for fetching data
function useFetchingData() {
  // getting the initialstate
  const { state, dispatch } = React.useContext(context);
  // validating the user, if it is true then fetch the data from the server
  const validate = getCookie() || state.userLogin.isAuthenticated;
  // run the useeffect hook when the component is loaded
  React.useEffect(() => {
    async function fetch() {
      if (validate) {
        // fetching data from the server
        try {
          const get = await axios.get("http://localhost:4000/profile", {
            withCredentials: true,
          });
          // send to the reducer function and handle it there
          dispatch({ type: "USER_PROFILE", data: get.data });
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetch();
  }, []);

  //   console.log(userData);
  return null;
}

export default useFetchingData;
