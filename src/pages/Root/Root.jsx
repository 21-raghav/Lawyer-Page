import { Outlet } from "react-router-dom";

import ContactBar from "../../components/ContactBar/ContactBar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Root.css";

const Root = () => {
  return (
    <>
      <ContactBar />
      <Navbar />
      <Outlet />
      <footer className="footer--bg-color">
      <Footer />
      </footer>
    </>
  );
};

export default Root;
