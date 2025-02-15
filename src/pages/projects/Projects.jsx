import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import gu from '../../assets/project/gu.png';
import img_1 from '../../assets/project/foody.png';
import img_2 from '../../assets/project/car-hire.png';
import img_3 from '../../assets/project/vista.png';
import img_4 from '../../assets/project/sity.png';
import img_5 from '../../assets/project/img_5.png';

const Projects = () => {
   const [hoveredCard, setHoveredCard] = useState(null);

   const handleMouseEnter = (cardId) => {
      setHoveredCard(cardId);
   };

   const handleMouseLeave = () => {
      setHoveredCard(null);
   };

   const projects = [
      {
         id: 1,
         title: "Greenfield University",
         description: "University management website.",
         link: "https://greenfield-university.netlify.app/",
         clientRepo: "https://github.com/Yamin39/greenfield-university-client",
         serverRepo: "https://github.com/Yamin39/greenfield-university-server",
         image: gu,
      },
      {
         id: 2,
         title: "Foodie",
         description: "Restaurant",
         link: "https://foody-a1e92.web.app",
         clientRepo: "https://github.com/mdarmankhan6252/foody-restaurant-website-client",
         serverRepo: "https://github.com/mdarmankhan6252/foody-restaurant-website-server",
         image: img_1,
      },
      {
         id: 3,
         title: "Car-Hire",
         description: "Car-Hiring",
         link: "https://car-hire-3831c.web.app",
         clientRepo: "https://github.com/mdarmankhan6252/car-hiring-website-client",
         serverRepo: "https://github.com/mdarmankhan6252/car-hiring-website-server",
         image: img_2,
      },
      {
         id: 4,
         title: "Global Vista",
         description: "Newspaper",
         link: "https://newspaper-9a908.web.app",
         clientRepo: "https://github.com/mdarmankhan6252/newspaper-client",
         serverRepo: "https://github.com/mdarmankhan6252/newspaper-server",
         image: img_3,
      },
      {
         id: 5,
         title: "EduCity",
         description: "University management website.",
         link: "https://edusity-arman.netlify.app",
         clientRepo: "https://github.com/mdarmankhan6252/eduSity",
         serverRepo: "https://github.com/mdarmankhan6252/eduSity",
         image: img_4,
      },
      {
         id: 6,
         title: "Byte-blaze",
         description: "Blog Website",
         link: "https://byte-blaze.netlify.app",
         clientRepo: "https://github.com/mdarmankhan6252/ByteBlaze",
         serverRepo: "https://github.com/mdarmankhan6252/ByteBlaze",
         image: img_5,
      },
   ];

   return (
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {projects.map((project) => (
            <Link
               key={project.id}
               target="_blank"
               to={project.link}
               className="border border-blue-950 max-h-96 p-6 rounded-xl overflow-hidden relative bg-gradient-to-l from-[#22001f] via-[#081200] to-[#0b0120]"
               onMouseEnter={() => handleMouseEnter(project.id)}
               onMouseLeave={handleMouseLeave}
            >
               <div
                  className="h-60 overflow-hidden rounded-md"
                  style={{
                     position: "relative",
                     overflowY: "hidden",
                  }}
               >
                  <img
                     src={project.image}
                     alt={project.title}
                     className={`w-full rounded-md transition-all duration-700 ease-linear ${hoveredCard === project.id
                        ? "animate-scroll-down"
                        : ""
                        }`}
                     style={{
                        height: "auto", // Adjusted image height to fit within the container
                        transform: hoveredCard === project.id ? "translateY(0)" : "translateY(0)",
                     }}
                  />
               </div>
               <div className="flex items-center justify-between pt-4">
                  <div>
                     <h4 className="font-semibold text-gray-200 pb-1">{project.description}</h4>
                     <h2 className="text-xl font-bold">{project.title}</h2>
                  </div>
                  <div className="flex items-center">
                     <FaGithub className="text-2xl mr-3" />
                     <div className="flex flex-col">
                        <Link
                           target="_blank"
                           to={project.clientRepo}
                           className="text-sm font-semibold hover:underline hover:text-[#06d0eb]"
                        >
                           Client
                        </Link>
                        <Link
                           target="_blank"
                           to={project.serverRepo}
                           className="text-sm font-semibold hover:underline hover:text-[#06d0eb]"
                        >
                           Server
                        </Link>
                     </div>
                  </div>
               </div>
            </Link>
         ))}
         <style>
            {`
               @keyframes scroll-down {
                  0% {
                     transform: translateY(0);
                  }
                  100% {
                     transform: translateY(-100%);
                  }
               }

               .animate-scroll-down {
                  animation: scroll-down 10s linear infinite;
               }
            `}
         </style>
      </div>
   );
};

export default Projects;
