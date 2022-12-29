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
  if (action.type === "HAMBURGER") {
    return { ...state, display: !state.display };
  }
  if (action.type === "blood-taking") {
    return { ...state, defaultPicture: blood, defaultVideo: bloodtestKey };
  }
  if (action.type === "mri") {
    return { ...state, defaultPicture: mri, defaultVideo: mriKey };
  }
  if (action.type === "wards") {
    return { ...state, defaultPicture: ward, defaultVideo: wardKey };
  }
  if (action.type === "surgery") {
    return { ...state, defaultPicture: surgery, defaultVideo: surgeryKey };
  }
  return state;
}

export default reducer;
