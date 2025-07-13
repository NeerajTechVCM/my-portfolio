import React, { useRef } from "react";
import ModelViewer from "../component/ModelViewer";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bq2851p",     
        "template_i0xie5a",  
        form.current,
        "boI85egqDlcQ6UpPe"    
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(" Message sent successfully!")
         
          e.target.reset(); // Clear form
        },
        (error) => {
          console.log(error.text);
          toast.error(" Something went wrong. Try again.");
        }
      );
  };

  return (
    <>
    <Toaster/>
       <section id="contactus" className=" text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12 text-center drop-shadow-md">
        Contact Me
      </h2>

      <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-between">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-[#1e293b] p-6 rounded-xl border border-cyan-700 shadow-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="text-cyan-300 block mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded bg-[#0f172a] text-white border border-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="text-cyan-300 block mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded bg-[#0f172a] text-white border border-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="text-cyan-300 block mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your message"
                required
                className="w-full px-4 py-3 rounded bg-[#0f172a] text-white border border-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-600 transition duration-300 shadow-md hover:shadow-cyan-400"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 3D Model */}
        <div className="w-full md:w-1/2 h-[450px]">
          <ModelViewer path="/models/earth.glb" />
        </div>
      </div>
    </section>
    </>
 
  );
}
