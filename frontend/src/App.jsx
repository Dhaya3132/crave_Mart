import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Login from "./components/LoginPopup/Login";

function App() {
  const [showLogin , setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
