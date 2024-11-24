import { Outlet, ScrollRestoration } from "react-router-dom";

import ContactBar from "../../components/ContactBar/ContactBar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <ContactBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Root;
