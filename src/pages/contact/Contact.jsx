import Info from "./Info";
import Message from "./Message";

const Contact = () => {
   return (
      <div className="flex gap-6 md:flex-row flex-col py-8 mb-16">
         <div className="md:w-1/3 w-full">
            <Info />
         </div>
         <div className="md:w-2/3 w-full ">
            <Message />
         </div>


      </div>
   );
};

export default Contact;