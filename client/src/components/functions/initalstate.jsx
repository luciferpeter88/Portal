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
  profile: {
    userName: "",
    email: "",
    phoneNumber: "",
    avatar: "",
    personalInfo: {
      age: "",
      location: "",
    },
    parentsInfo: {
      fatherName: "",
      fatherPhoneNum: "",
      motherName: "",
      motherPhoneNum: "",
    },
    medicalHistory: "",
    allergies: "",
    appointment: "",
    department: "",
  },
  modalIsopen: false,
  fetch: false,
  modalIsopenP: false,
  dashModal: false,
  selectedEmail: "",
  selectedUser: "",
};

export default initialState;
