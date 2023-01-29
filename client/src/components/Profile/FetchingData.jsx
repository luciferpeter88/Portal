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
      // onlly fetch the data from the server if the user is authenticated
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
    // every time when the user clicks on the save changes button, the useEffect hook is going to re-run again and the user can see the updated value from the server immediately!
  }, [state.fetch, state.modalIsopen, state.modalIsopenP]);

  //   console.log(userData);
  return null;
}

export default useFetchingData;
