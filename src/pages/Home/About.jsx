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
import postgresql from '../../assets/photo/postgresql.png'
import prisma from '../../assets/photo/prisma.png'
import redux from '../../assets/photo/redux.png'
import shadcn from '../../assets/photo/shadcn.png'
import { Link } from 'react-router-dom'
import { GiSoundOff, GiSoundOn } from 'react-icons/gi'
import { useState } from 'react'

const About = () => {

   const aboutMeText = "Hi, I am a Full Stack Web Developer. I have two years of web development experience. I have a clear understanding of React, Next JS, Express, Node, MongoDB, PostgreSQL, AWS, HTML, CSS3, JavaScript, Typescript, TailwindCSS, Firebase & OAuth authentication, Figma, Tanstack query, Axios, Git, Github & npm packages, and many more.";

   const [isSpeaking, setIsSpeaking] = useState(false);

   const handleSpeak = () => {
      if (isSpeaking) {
         window.speechSynthesis.cancel();
         setIsSpeaking(false);
      } else {
         if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(aboutMeText);
            window.speechSynthesis.getVoices();
            utterance.pitch = 1;
            utterance.rate = 1;
            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
         } else {
            alert('Speech Synthesis is not supported in your browser.');
         }
      }
   };

   // ✅ Language skills data
   const skills = [
      { name: 'JavaScript', level: 'Expert', img: js },
      { name: 'React JS', level: 'Expert', img: react },
      { name: 'Next JS', level: 'Beginner', img: nextjs },
      { name: 'Express JS', level: 'Expert', img: express },
      { name: 'Node JS', level: 'Expert', img: nodejs },
      { name: 'MongoDB', level: 'Expert', img: mongodb },
      { name: 'PostgreSQL', level: 'Intermediate', img: postgresql },
      { name: 'Prisma ORM', level: 'Intermediate', img: prisma },
      { name: 'Redux', level: 'Intermediate', img: redux },
      { name: 'Tailwind CSS', level: 'Expert', img: tailwind },
      { name: 'ShadCn', level: 'Expert', img: shadcn },
      { name: 'Firebase', level: 'Expert', img: firebase },
      { name: 'Axios', level: 'Expert', img: axios },
      { name: 'Tanstack Query', level: 'Expert', img: tanstack },
   ];

   return (
      <div className="space-y-6">
         {/* About Me */}
         <div className="bg-gradient-to-l from-[#11000f] via-[#060c00] to-[#03000a] rounded-xl shadow-[0px_0px_10px_0] shadow-[#211229] p-6 border border-blue-950">
            <div>
               <div className='flex items-center space-x-2'>
                  <h2 className="text-2xl font-semibold text-[#06b1b1]">About Me</h2>
                  <div onClick={handleSpeak} className='text-3xl cursor-pointer text-[#06b1b1]'>
                     {isSpeaking ? <GiSoundOn /> : <GiSoundOff />}
                  </div>
               </div>
               <p className="text-[15px] font-semibold leading-7 pt-5 text-gray-300 text-justify">
                  {aboutMeText}
               </p>
            </div>
         </div>

         {/* ✅ Language Skills */}
         <div className="bg-gradient-to-l from-[#11000f] via-[#060c00] to-[#03000a] rounded-xl shadow-[0px_0px_10px_0] shadow-[#211229] p-6 border border-blue-950">
            <h2 className="text-2xl font-semibold text-[#06b1b1] pb-6">Language Skills</h2>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
               {skills.map((skill, index) => (
                  <div key={index} className='flex items-center space-x-3 bg-gradient-to-r from-[#025353] to-[#057575] p-2 justify-center rounded-xl border border-[#06b1b1]'>
                     <img src={skill.img} alt={skill.name} className='w-16' />
                     <div>
                        <h4 className='text-[17px] font-semibold'>{skill.name}</h4>
                        <h4 className='text-gray-200 font-semibold'>{skill.level}</h4>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Educational Qualification */}
         <div className="bg-gradient-to-l from-[#11000f] via-[#060c00] to-[#03000a] rounded-xl shadow-[0px_0px_10px_0] shadow-[#211229] p-6 border border-blue-950">
            <div className='space-y-3'>
               <h2 className="text-2xl font-semibold text-[#06b1b1]">Educational Qualification</h2>
               <p className="text-[15px] font-semibold leading-7 text-gray-300">2023 - Running</p>
               <p className="text-[15px] font-semibold leading-7">Management Studies, BBA</p>
               <p className="text-[15px] font-semibold leading-7 text-gray-300">
                  <Link to='https://bu.ac.bd'>University Of Barishal</Link>
               </p>
            </div>
         </div>

         {/* Certification */}
         <div className="bg-gradient-to-l from-[#11000f] via-[#060c00] to-[#03000a] rounded-xl shadow-[0px_0px_10px_0] shadow-[#211229] p-6 border border-blue-950">
            <h2 className="text-2xl font-semibold text-[#06b1b1] pb-4">Certification</h2>
            
            <div>
               <p className="text-[15px] font-semibold leading-7 text-gray-300">2025 - Running</p>
               <p className="text-[15px] font-semibold leading-7 py-1">Next Level Web Development</p>
               <Link to={"/"} className="text-[15px] font-semibold leading-7 text-[#1ac8c8] hover:underline">
                  See Certificate
               </Link>
            </div>

            <hr className='my-4 border-blue-950' />


            <div>
               <p className="text-[15px] font-semibold leading-7 text-gray-300">2024 - 2024</p>
               <p className="text-[15px] font-semibold leading-7 py-1">Full Stack Web Development.</p>
               <Link target='_blank' to='https://drive.google.com/file/d/1vpxFgLb-danhz9d5igho96PXIEjVCi6W/view?usp=sharing' className="text-[15px] font-semibold leading-7 text-[#1ac8c8] hover:underline">
                  See Certificate
               </Link>
            </div>

            <hr className='my-4 border-blue-950' />

            <div className='mt-5'>
               <p className="text-[15px] font-semibold leading-7 text-gray-300">2024 - 2024</p>
               <p className="text-[15px] font-semibold leading-7 py-1">Web Design BootCamp.</p>
               <Link target='_blank' to='https://drive.google.com/file/d/1Joko70Psp1YMKRlskcr1N0nJaH4D1IWR/view?usp=sharing' className="text-[15px] font-semibold leading-7 text-[#1ac8c8] hover:underline">
                  See Certificate
               </Link>
            </div>
         </div>
      </div>
   );
};

export default About;
