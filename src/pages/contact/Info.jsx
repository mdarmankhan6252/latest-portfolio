import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn, CiMobile4 } from "react-icons/ci";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Info = () => {
   return (
      <div className="bg-gradient-to-r from-[#0a0009] to-[#0b1800] rounded-xl shadow-[0px_0px_10px_0] shadow-[#211229] p-9 border border-blue-950">

         <h2 className="text-xl font-semibold">Contact Info</h2>

         <div className="space-y-6 py-6">
            <div className="flex items-center space-x-3 ">
               <div className="text-3xl bg-gradient-to-r from-[#0b1800] to-[#0a0009] rounded-md p-3 border border-blue-950">
                  <AiOutlineMail />
               </div>
               <div>
                  <h4 className="font-semibold text-[#06b1b1] uppercase">Email :</h4>
                  <h4 className="text-[15px] font-semibold ">mdarmankhan6252@gmail.com</h4>
               </div>
            </div>
            <div className="flex items-center space-x-3 ">
               <div className="text-3xl bg-gradient-to-r from-[#0b1800] to-[#0a0009] rounded-md p-3 border border-blue-950">
                  <CiMobile4 />
               </div>
               <div>
                  <h4 className="font-semibold text-[#06b1b1] uppercase">Mobile :</h4>
                  <h4 className="text-[15px] font-semibold ">+8801875778050</h4>
               </div>
            </div>
            <div className="flex items-center space-x-3 ">
               <div className="text-3xl bg-gradient-to-r from-[#0b1800] to-[#0a0009] rounded-md p-3 border border-blue-950">
                  <CiLocationOn />
               </div>
               <div>
                  <h4 className="font-semibold text-[#06b1b1] uppercase">location :</h4>
                  <h4 className="text-[15px] font-semibold ">Barishal, Bangladesh.</h4>
               </div>
            </div>
         </div>

         <h2 className="text-xl font-semibold py-6">Social Media</h2>


         <div className='text-center flex items-center justify-between *:text-3xl hover:*:text-[#4fd4d4]'>
            <Link target='_blank' to='https://www.facebook.com/mdarmankhan6252'><FaFacebookSquare /></Link>
            <Link target='_blank' to='https://www.linkedin.com/in/mdarmankhan6252'><FaLinkedin /></Link>
            <Link target='_blank' to='https://github.com/mdarmankhan6252'><FaGithub /></Link>
            <Link target='_blank' to='https://www.instagram.com/mdarmankhan6252'><FaSquareInstagram /></Link>
            <Link target='_blank' to='https://x.com/mdarmankhan6252'><FaSquareXTwitter /></Link>
         </div>

      </div>
   );
};

export default Info;