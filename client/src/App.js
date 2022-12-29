import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Department from "./pages/Department";
import Register from "./pages/Register";
import Story from "./pages/Story";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="department" element={<Department />} />
            <Route path="department/:storyName" element={<Story />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
