import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { IoHome } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";

const Nav = () => {
   return (
      <nav className="relative z-10">         
         
         {/* top side nav bar */}
         <div className="items-center justify-between p-6 border border-blue-950 rounded-xl bg-gradient-to-l from-[#22001f] via-[#081200] to-[#0b0120] flex">
            <Link to='/'><img src={logo} alt="logo" className="w-10" /></Link>
            <ul className="text-[15px] space-x-6 text-[#d3d1e7] font-bold hidden sm:block">
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/projects'>Projects</NavLink>
               <NavLink to='/contact'>Contact</NavLink>
            </ul>
            <Link target="_blank" to='https://drive.google.com/file/d/1KYJlY_AYlomo2eyHTsyUvfV-1OhlDf7r/view?usp=sharing' className="text-[#06b1b1] font-semibold text-lg border border-blue-950 px-4 py-1 rounded-xl hover:bg-[#06b1b1] hover:text-white duration-300">Resume</Link>

         </div>

         {/* bottom side nav bar */}

         <div className="w-full fixed left-0 bottom-0 right-0 sm:hidden bg-gradient-to-r from-[#2b0e28] to-[#162e02] border-t-4 border-[#06B1B1] py-4 px-3 z-50">
            <div className="flex items-center justify-around">

               <NavLink to='/' className="text-center flex flex-col justify-center items-center space-y-1">
                  <p><IoHome className="text-2xl" /></p>
                  <p className="font-semibold text-[17px]">Home</p>
               </NavLink>

               <NavLink to='/projects' className="text-center flex flex-col justify-center items-center space-y-1">
                  <p><SlNotebook className="text-2xl" /></p>
                  <p className="font-semibold text-[17px]">Projects</p>
               </NavLink>

               <NavLink to='/contact' className="text-center flex flex-col justify-center items-center space-y-1">
                  <p><FaMobileAlt className="text-2xl" /></p>
                  <p className="font-semibold text-[17px]">Contact</p>
               </NavLink>


            </div>
         </div>
      </nav>
   );
};

export default Nav;