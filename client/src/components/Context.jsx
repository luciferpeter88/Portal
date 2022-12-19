import React from "react";
import reducer from "./functions/reducer";
import initialState from "./functions/initalstate";
const context = React.createContext();

function AppContext({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
}

export { context, AppContext };
