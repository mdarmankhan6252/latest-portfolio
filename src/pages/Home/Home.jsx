import About from "./About";
import Profile from "./Profile";

const Home = () => {
   return (
      <div className="flex gap-6 md:flex-row flex-col py-8">
         <div className="md:w-1/3 w-full">
            <Profile />
         </div>
         <div className="md:w-2/3 w-full ">
            <About />

         </div>

      </div>
   );
};

export default Home;