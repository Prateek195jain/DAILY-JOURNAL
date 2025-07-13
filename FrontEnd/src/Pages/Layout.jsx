import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex mt-5 mb-5 mx-auto px-5 md:px-20">
        <div className="">
          {/* {The <Outlet> component from react-router-dom is used to render the child routes within the layout.} */}
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
      </>
  );
}
