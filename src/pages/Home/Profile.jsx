import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../../assets/profile.jpg'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
const Profile = () => {

return (
   <div className='bg-gradient-to-l from-[#0a0009] via-[#0b1800] to-[#03000a] rounded-xl shadow-[0px_0px_10px_0] shadow-[#211229] border border-blue-950'>
      <div className='flex items-center justify-center py-4 '>
         <img src={profile} alt="profile_img" className='w-32 h-32 rounded-full object-cover m-4 p-0.5 from-pink-800 via-purple-700 to-green-700 bg-gradient-to-r' />
      </div>
      <div className='text-center space-y-2 '>
         <h2 className='text-2xl font-serif'>MD Arman Khan</h2>
         <p className='text-gray-300 font-semibold'>mdarmankhan6252@gmail.com</p>
      </div>
      <div className='bg-black py-1 text-center my-4 text-[#06b1b1] text-lg font-semibold'>
         <h1 style={{ margin: 'auto 0', fontWeight: 'inherit' }}>
            I am a {' '}
            <span style={{ color: '#06b1b1', }}>
               <Typewriter
                  words={['Full Stack Developer', 'MERN Stack Developer', 'Next.js Developer', 'Node.js Developer']}
                  loop={5}
                  cursor
                  cursorStyle='|'
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
               />
            </span>
         </h1>
      </div>

      <div className='text-center flex items-center justify-center space-x-3 *:text-2xl pb-6 hover:*:text-[#4fd4d4]'>
         <Link target='_blank' to='https://www.facebook.com/mdarmankhan6252'><FaFacebookSquare /></Link>
         <Link target='_blank' to='https://www.linkedin.com/in/mdarmankhan6252'><FaLinkedin /></Link>
         <Link target='_blank' to='https://github.com/mdarmankhan6252'><FaGithub /></Link>
      </div>


   </div>
);
};

export default Profile;