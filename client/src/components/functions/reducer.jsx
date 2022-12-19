function reducer(state, action) {
  if (action.type === "HAMBURGER") {
    return { ...state, display: !state.display };
  }
  return state;
}

export default reducer;
