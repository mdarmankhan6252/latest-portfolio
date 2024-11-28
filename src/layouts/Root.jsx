import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
   return (
      <div className="bg-gradient-to-tr from-[#22001f] via-[#081200] to-[#0b0120] w-full min-h-screen text-white py-4">
         <div className="max-w-6xl mx-auto px-3 sm:px-5">
            <Nav />
            <div className="">
               <Outlet />
            </div>
            <Footer />
         </div>

      </div>
   );
};

export default Root;