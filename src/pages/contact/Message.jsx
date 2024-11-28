import React from "react";
import toast from "react-hot-toast";

const Message = () => {
   const [result, setResult] = React.useState("");

   const handleSubmit = async (event) => {
     event.preventDefault();
     setResult("Sending....");
     const formData = new FormData(event.target);
 
     formData.append("access_key", "ab27b3c3-3482-47df-89b9-f3cd8eeed071");
 
     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       body: formData
     });
 
     const data = await response.json();
 
     if (data.success) {
       setResult("Form Submitted Successfully");
       toast.success(result)
       event.target.reset();
     } else {
       console.log("Error", data);
       setResult(data.message);
     }
   }


   return (
      <div className="bg-gradient-to-r from-[#0a0009] to-[#0b1800] rounded-xl shadow-[0px_0px_10px_0] shadow-[#211229] p-6 border border-blue-950">
         <h1 className="text-2xl sm:text-4xl">Let's Work <span className="text-[#06b1b1] font-semibold">Together</span></h1>
         <form onSubmit={handleSubmit} className="space-y-6 pt-12 pb-6">
            <input type="text" name="name" id="" placeholder="Your Name" className="bg-transparent outline-none border border-[#06b1b1] p-2.5 rounded-md font-semibold text-[#06b1b1] w-full" required />
            <input type="email" name="email" id="" placeholder="Your Email" className="bg-transparent outline-none border border-[#06b1b1] p-2.5 rounded-md font-semibold text-[#06b1b1] w-full" required />

            <textarea rows={3} type="email" name="comment" id="" placeholder="Your Message" className="bg-transparent outline-none border border-[#06b1b1] p-2.5 rounded-md font-semibold text-[#06b1b1] w-full" required></textarea>
            <input type="submit" value="Submit" className="outline-none border border-[#06b1b1] p-2.5 rounded-md font-semibold bg-[#06b1b1] w-full cursor-pointer hover:bg-[#06aaaa]" />
         </form>

      </div>
   );
};

export default Message;