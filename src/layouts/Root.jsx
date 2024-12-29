import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import light_1 from '../assets/light-1.png'
import light_2 from '../assets/light-2.png'

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

         <img src={light_1} alt="" className="absolute left-0 top-0 opacity-50 w-[400px] hidden 2xl:inline-block" />
         <img src={light_2} alt="" className="absolute right-0 top-0 opacity-50 w-[400px] hidden 2xl:inline-block" />
      </div>
   );
};

export default Root;