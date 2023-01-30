import {
  mri,
  surgery,
  blood,
  ward,
  mriKey,
  surgeryKey,
  bloodtestKey,
  wardKey,
} from "../data/variables";

function reducer(state, action) {
  // if the user clicks on the hamburger icon set the display property to opposite itself

  if (action.type === "HAMBURGER") {
    return { ...state, display: !state.display };
  }
  // if the action.type is blood taking than set the background picture to Blood taking and
  // fetch the blood testing vide0 from youtube
  if (action.type === "blood-taking") {
    return { ...state, defaultPicture: blood, defaultVideo: bloodtestKey };
  }
  // if the action.type is mri than set the background picture to mri and
  // fetch the mri video from youtube
  if (action.type === "mri") {
    return { ...state, defaultPicture: mri, defaultVideo: mriKey };
  }
  // if the action.type is wards than set the background picture to wards and
  // fetch the wards video from youtube
  if (action.type === "wards") {
    return { ...state, defaultPicture: ward, defaultVideo: wardKey };
  }
  // if the action.type is surgery than set the background picture to surgery and
  // fetch the surgery video from youtube
  if (action.type === "surgery") {
    return { ...state, defaultPicture: surgery, defaultVideo: surgeryKey };
  }
  // if the action is userinput than return the dafult state, but change the email and the password values to the user inputs
  if (action.type === "USERINPUT_LOGIN") {
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
        [action.input.type]: action.input.value,
      },
    };
  }
  if (action.type === "USER_AUTHENTICATION") {
    // authenticating the user based on the server response
    // if it is true, set the inputs to empty fields, but if its false, display the invalid message and keep the user inputs
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
        email: action.isAuthenticated ? "" : state.userLogin.email,
        password: action.isAuthenticated ? "" : state.userLogin.password,
        response: action.isAuthenticated ? "" : "Invalid email or password",
        isAuthenticated: action.isAuthenticated,
      },
    };
  }
  // set the user inputs value for the corresponding inputs type
  if (action.type === "USER_INPUT_REG") {
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
      },
      userRegistration: {
        ...state.userRegistration,
        [action.inputs.type]: action.inputs.value,
      },
    };
  }
  if (action.type === "EMPTY_INPUT_REG") {
    // getting those object keys that have no values and cut the last five elements off
    const key = Object.keys(state.userRegistration)
      .filter((key) => state.userRegistration[key] === "")
      .slice(0, -5);
    const newArray = key.map((element) => element + "Validation");
    // object to overwriting the empty fields
    let regObjectOverwriting = {};

    // looping through the new array and set the value inside of it as the regObjectOverwriting's object property and set it as a value to invalid input
    for (let i = 0; i < newArray.length; i++) {
      const output = "Please provide " + newArray[i].slice(0, -10);
      regObjectOverwriting[newArray[i]] = output.toLocaleLowerCase();
    }

    // finally return the state, and owerwriting the userRegistration with the regObjectOverwriting object!
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
      },
      userRegistration: {
        ...state.userRegistration,
        ...regObjectOverwriting,
      },
    };
  }
  if (action.type === "NOT_MATCHING_PASSWORD") {
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
      },
      userRegistration: {
        ...state.userRegistration,
        password: "",
        confirmPassword: "",
        passwordValidation: "Passwords are not matching",
        confirmPasswordValidation: "Passwords are not matching",
      },
    };
  }
  if (action.type === "NOT_VALID_EMAIL") {
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
      },
      userRegistration: {
        ...state.userRegistration,
        email: "",
        emailValidation: "Invalid email address",
      },
    };
  }

  if (action.type === "USER_REGITRATION") {
    const {
      userRegistration: {
        userName,
        email,
        phoneNumber,
        password,
        confirmPassword,
      },
    } = state;
    return {
      ...state,
      userLogin: {
        ...state.userLogin,
      },
      // if the response from the server is true, that means the email is already taken,so keep the user inputs, but if the email email is not taken,
      // then send the data to the server and delete the user inputs from the form
      userRegistration: {
        userName: action.isEmailReserved ? userName : "",
        email: action.isEmailReserved ? email : "",
        phoneNumber: action.isEmailReserved ? phoneNumber : "",
        password: action.isEmailReserved ? password : "",
        confirmPassword: action.isEmailReserved ? confirmPassword : "",
        isEmailReserved: action.isEmailReserved
          ? "The email is already taken"
          : "Succesful registration!",
      },
    };
  }
  if (action.type === "USER_PROFILE") {
    // console.log(action.data);
    return {
      ...state,
      profile: {
        ...action.data,
      },
    };
  }
  // function for hiding or appearing the modal component
  if (action.type === "MODAL") {
    return {
      ...state,
      modalIsopen: true,
    };
  }
  if (action.type === "MODAL_P") {
    return {
      ...state,
      modalIsopenP: true,
    };
  }
  // function for updating the user's details (name,age,location and phone)
  // re-fetch the data when the user make a request to the server(put request!)
  if (action.type === "UPDATE_DATA_USER_FIRST") {
    return {
      ...state,
      modalIsopenP: false,
      modalIsopen: false,
      fetch: !state.fetch,
    };
  }
  if (action.type === "DASH_MODAL") {
    return {
      ...state,
      dashModal: !state.dashModal,
    };
  }

  return state;
}

export default reducer;
