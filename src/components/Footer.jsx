import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
const Footer = () => {
   return (
      <div className='mb-24 sm:mb-0'>
         <p className='border-t border-[#06b1b1]'></p>
         <div>
            <div className='flex items-center justify-center py-6'>
               <img src={logo} alt="" className='w-12' />
            </div>
            <ul className="text-[15px] space-x-6 text-[#d3d1e7] font-bold flex items-center justify-center">
               <NavLink to='/'>Home</NavLink>
               <NavLink to='/projects'>Projects</NavLink>
               <NavLink to='/contact'>Contact</NavLink>
            </ul>
            <p className='text-center text-[12px] py-4'>© 2025 - Arman. All rights reserved.</p>
         </div>

      </div>
   );
};

export default Footer;