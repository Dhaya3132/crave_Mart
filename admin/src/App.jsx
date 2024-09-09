import Navbar from "./components/Navbar/Navbar";
import Sidebar from './components/Sidebar/Sidebar';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div>
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
