import { useState } from 'react';
import project_1 from '../../assets/project/project_1.png';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

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
         title: "Global Vista",
         description: "Newspaper",
         link: "https://newspaper-9a908.web.app",
         clientRepo: "https://github.com/mdarmankhan6252/newspaper-client",
         serverRepo: "https://github.com/mdarmankhan6252/newspaper-server",
         image: project_1,
      },
      {
         id: 2,
         title: "Global Vista 2",
         description: "Newspaper 2",
         link: "https://newspaper-9a908.web.app",
         clientRepo: "https://github.com/mdarmankhan6252/newspaper-client",
         serverRepo: "https://github.com/mdarmankhan6252/newspaper-server",
         image: project_1,
      },
      {
         id: 3,
         title: "Global Vista 3",
         description: "Newspaper 3",
         link: "https://newspaper-9a908.web.app",
         clientRepo: "https://github.com/mdarmankhan6252/newspaper-client",
         serverRepo: "https://github.com/mdarmankhan6252/newspaper-server",
         image: project_1,
      },
      {
         id: 4,
         title: "Global Vista 4",
         description: "Newspaper 4",
         link: "https://newspaper-9a908.web.app",
         clientRepo: "https://github.com/mdarmankhan6252/newspaper-client",
         serverRepo: "https://github.com/mdarmankhan6252/newspaper-server",
         image: project_1,
      },
   ];

   return (
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
                     className={`w-full rounded-md transition-all duration-700 ease-linear ${
                        hoveredCard === project.id
                           ? "animate-scroll-down"
                           : "animate-scroll-up"
                     }`}
                     style={{
                        height: "1000px", // Simulate the long image height
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
                     transform: translateY(-940px); /* Scrolls the image completely */
                  }
               }

               @keyframes scroll-up {
                  0% {
                     transform: translateY(-940px);
                  }
                  100% {
                     transform: translateY(0);
                  }
               }

               .animate-scroll-down {
                  animation: scroll-down 10s linear infinite;
               }

               .animate-scroll-up {
                  animation: scroll-up 0.3s linear forwards;
               }
            `}
         </style>
      </div>
   );
};

export default Projects;
