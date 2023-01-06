import { mri, mriKey } from "../data/variables";

const initialState = {
  display: false,
  defaultPicture: mri,
  defaultVideo: mriKey,
  userLogin: {
    email: "",
    password: "",
    response: "",
    isAuthenticated: false,
  },
  userRegistration: {
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    userNameValidation: "",
    emailValidation: "",
    phoneNumberValidation: "",
    passwordValidation: "",
    confirmPasswordValidation: "",
    isEmailReserved: null,
  },
};

export default initialState;
