import tailwind from '../../assets/photo/tailwind.png'
import nextjs from '../../assets/photo/nextjs.png'
import react from '../../assets/photo/react.png'
import express from '../../assets/photo/express.png'
import js from '../../assets/photo/js.jpg'
import nodejs from '../../assets/photo/nodejs.png'
import mongodb from '../../assets/photo/mongodb.png'
import firebase from '../../assets/photo/firebase.svg'
import tanstack from '../../assets/photo/tanstack.png'
import axios from '../../assets/photo/axios.svg'
import { Link } from 'react-router-dom'
import { GiSoundOff, GiSoundOn } from 'react-icons/gi'
import { useState } from 'react'


const About = () => {

   const aboutMeText = "Hi, I am MD Arman Khan, a junior MERN stack web developer with a strong foundation in React js. I have beginner-level experience with MongoDB, Express js, and Node js, enabling me to build and manage RESTful APIs and perform CRUD operations. I can implement role-based authentication and use tools like JWT for secure user management. Additionally, I am proficient in Tailwind CSS, TanStack Query, and Axios, which help me create efficient and visually appealing web applications. I am passionate about learning and continuously improving my skills to grow as a full-stack developer.";

   const [isSpeaking, setIsSpeaking] = useState(false);

   const handleSpeak = () => {
      if (isSpeaking) {
         // Stop the speech
         window.speechSynthesis.cancel();
         setIsSpeaking(false);
      } else {
         // Start the speech
         if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(aboutMeText);

            // Get available voices
            window.speechSynthesis.getVoices();

            utterance.pitch = 1; // Normal pitch
            utterance.rate = 1;  // Normal speed

            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);

            utterance.onend = () => {
               setIsSpeaking(false);
            };
         } else {
            alert('Speech Synthesis is not supported in your browser.');
         }
      }
   };

   return (
      <div className="space-y-6">
         <div className="bg-gradient-to-l from-[#11000f] via-[#060c00] to-[#03000a] rounded-xl shadow-[0px_0px_10px_0] shadow-[#211229] p-6 border border-blue-950">
            <div>
               <div className='flex items-center space-x-2'>
                  <h2 className="text-2xl font-semibold text-[#06b1b1]">About Me</h2>
                  <div onClick={handleSpeak} className='text-3xl cursor-pointer text-[#06b1b1]'>
                     {
                        isSpeaking ? <GiSoundOn /> : <GiSoundOff />
                     }

                  </div>
               </div>
               <p className="text-[15px] font-semibold leading-7 pt-5 text-gray-300 text-justify">I am MD Arman Khan, a junior MERN stack web developer with a strong foundation in React.js. I have beginner-level experience with MongoDB, Express.js, and Node.js, enabling me to build and manage RESTful APIs and perform CRUD operations. I can implement role-based authentication and use tools like JWT for secure user management. Additionally, I am proficient in Tailwind CSS, TanStack Query, and Axios, which help me create efficient and visually appealing web applications. I am passionate about learning and continuously improving my skills to grow as a full-stack developer.</p>

            </div>

         </div>

         {/* languages skills */}

         <div className="bg-gradient-to-l from-[#11000f] via-[#060c00] to-[#03000a] rounded-xl shadow-[0px_0px_10px_0] shadow-[#211229] p-6 border border-blue-950">
            <h2 className="text-2xl font-semibold text-[#06b1b1] pb-6">Language Skills</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
               
               <div>
                  <div className='flex items-center space-x-3 bg-gradient-to-r from-[#025353] to-[#057575] p-2 justify-center rounded-xl border border-[#06b1b1]'>
                     <img src={js} alt="" className='w-16' />
                     <div>
                        <h4 className='text-[17px] font-semibold '>JavaScript</h4>
                        <h4 className='text-gray-200 font-semibold'>Expert</h4>
                     </div>
                  </div>
               </div>
               <div>
                  <div className='flex items-center space-x-3 bg-gradient-to-r from-[#025353] to-[#057575] p-2 justify-center rounded-xl border border-[#06b1b1]'>
                     <img src={react} alt="" className='w-16' />
                     <div>
                        <h4 className='text-[17px] font-semibold '>React JS</h4>
                        <h4 className='text-gray-200 font-semibold'>Expert</h4>
                     </div>
                  </div>
               </div>
               <div>
                  <div className='flex items-center space-x-3 bg-gradient-to-r from-[#025353] to-[#057575] p-2 justify-center rounded-xl border border-[#06b1b1]'>
                     <img src={express} alt="" className='w-16' />
                     <div>
                        <h4 className='text-[17px] font-semibold '>Express Js</h4>
                        <h4 className='text-gray-200 font-semibold'>Beginner</h4>
                     </div>
                  </div>
               </div>
               <div>
                  <div className='flex items-center space-x-3 bg-gradient-to-r from-[#025353] to-[#057575] p-2 justify-center rounded-xl border border-[#06b1b1]'>
                     <img src={mongodb} alt="" className='w-16' />
                     <div>
                        <h4 className='text-[17px] font-semibold '>Mongo DB</h4>
                        <h4 className='text-gray-200 font-semibold'>Beginner</h4>
                     </div>
                  </div>
               </div>
               <div>
                  <div className='flex items-center space-x-3 bg-gradient-to-r from-[#025353] to-[#057575] p-2 justify-center rounded-xl border border-[#06b1b1]'>
                     <img src={nodejs} alt="" className='w-14' />
                     <div>
                        <h4 className='text-[17px] font-semibold '>Node JS</h4>
                        <h4 className='text-gray-200 font-semibold'>Beginner</h4>
                     </div>
                  </div>
               </div>
               <div>
                  <div className='flex items-center space-x-3 bg-gradient-to-r from-[#025353] to-[#057575] p-2 justify-center rounded-xl border border-[#06b1b1]'>
                     <img src={tailwind} alt="" className='w-16' />
                     <div>
                        <h4 className='text-[17px] font-semibold '>Tailwind CSS</h4>
                        <h4 className='text-gray-200 font-semibold'>Expert</h4>
                     </div>
                  </div>
               </div>
               <div>
                  <div className='flex items-center space-x-3 bg-gradient-to-r from-[#025353] to-[#057575] p-2 justify-center rounded-xl border border-[#06b1b1]'>
                     <img src={firebase} alt="" className='w-16' />
                     <div>
                        <h4 className='text-[17px] font-semibold '>Firebase</h4>
                        <h4 className='text-gray-200 font-semibold'>Expert</h4>
                     </div>
                  </div>
               </div>
               <div>
                  <div className='flex items-center space-x-3 bg-gradient-to-r from-[#025353] to-[#057575] py-3.5 px-2 justify-center rounded-xl border border-[#06b1b1]'>
                     <img src={axios} alt="" className='w-16' />
                     <div>
                        <h4 className='text-[17px] font-semibold '>Axios</h4>
                        <h4 className='text-gray-200 font-semibold'>Expert</h4>
                     </div>
                  </div>
               </div>
               <div className='col-span-2 lg:col-span-1'>
                  <div className='flex items-center space-x-3 bg-gradient-to-r from-[#025353] to-[#057575] p-2 justify-center rounded-xl border border-[#06b1b1]'>
                     <img src={tanstack} alt="" className='w-16' />
                     <div>
                        <h4 className='text-[17px] font-semibold '>Tanstack Query</h4>
                        <h4 className='text-gray-200 font-semibold'>Expert</h4>
                     </div>
                  </div>
               </div>
            </div>
            <div className='w-full my-6'>
               <div className='flex items-center space-x-3 bg-gradient-to-r from-[#025353] to-[#057575] p-2 justify-center rounded-xl border border-[#06b1b1]'>
                  <img src={nextjs} alt="" className='w-16' />
                  <div>
                     <h4 className='text-[17px] font-semibold '>Next JS</h4>
                     <h4 className='text-gray-200 font-semibold'>Beginner</h4>
                  </div>
               </div>
            </div>

         </div>

         {/* educational
          skills */}

         <div className="bg-gradient-to-l from-[#11000f] via-[#060c00] to-[#03000a] rounded-xl shadow-[0px_0px_10px_0] shadow-[#211229] p-6 border border-blue-950">
            <div className='space-y-3'>
               <h2 className="text-2xl font-semibold text-[#06b1b1]">Educational Qualification</h2>
               <p className="text-[15px] font-semibold leading-7  text-gray-300 ">2023 - Running</p>
               <p className="text-[15px] font-semibold leading-7  ">Bachelor of Business Administration</p>
               <p className="text-[15px] font-semibold leading-7  text-gray-300">University Of Barishal</p>

            </div>

         </div>

         {/* Certification*/}

         <div className="bg-gradient-to-l from-[#11000f] via-[#060c00] to-[#03000a] rounded-xl shadow-[0px_0px_10px_0] shadow-[#211229] p-6 border border-blue-950">
            <div className=''>
               <h2 className="text-2xl font-semibold text-[#06b1b1] pb-4">Certification</h2>
               <div>
                  <p className="text-[15px] font-semibold leading-7  text-gray-300 ">2024 - 2024</p>
                  <p className="text-[15px] font-semibold leading-7 py-1 ">Full Stack Web Development.</p>
                  <Link to='/' className="text-[15px] font-semibold leading-7  text-[#1ac8c8] hover:underline">See Certificate</Link>
               </div>
               <hr className='my-4 bg-[#1ac8c8]' />
               <div className='mt-5'>
                  <p className="text-[15px] font-semibold leading-7  text-gray-300 ">2024 - 2024</p>
                  <p className="text-[15px] font-semibold leading-7 py-1 ">Advance Front End Web Design.</p>
                  <Link to='/' className="text-[15px] font-semibold leading-7  text-[#1ac8c8] hover:underline">See Certificate</Link>
               </div>
               <hr className='my-4 bg-[#1ac8c8]' />
               <div className='mt-5'>
                  <p className="text-[15px] font-semibold leading-7  text-gray-300 ">2024 - 2024</p>
                  <p className="text-[15px] font-semibold leading-7 py-1 ">Web Design BootCamp.</p>
                  <Link to='/' className="text-[15px] font-semibold leading-7  text-[#1ac8c8] hover:underline">See Certificate</Link>
               </div>

            </div>

         </div>

      </div>
   );
};

export default About;