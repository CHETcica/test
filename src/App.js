import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Menubar from "./component/Menubar";
import Footer from "./component/Footer";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Chatpage from "./pages/Chatpage"
import Regispage from "./pages/Regispage"
import Login from "./pages/Login"

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Menubar />
          <Routes>
            {/* <Route path="/" element={<Homepage />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chatpage />} />
            <Route path="/register" element={<Regispage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        <Footer/>
    </BrowserRouter>
  );
};

export default App;
