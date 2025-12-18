import "./App.css";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
    <NavItems />
    <div className="min-vh-100">
      <Outlet />
    </div>
      <Footer />
    </>
  )
}

export default App