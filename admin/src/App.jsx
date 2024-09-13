import Navbar from "./components/Navbar/Navbar";
import Sidebar from './components/Sidebar/Sidebar';
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div>
        <ToastContainer />
        <Navbar />
        <div id="app-content" className="w-full flex gap-2">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
