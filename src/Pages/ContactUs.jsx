import React, { useRef, useState, useEffect } from "react";
import ModelViewer from "../component/ModelViewer";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import EarthPreview from "../assets/earth.png";

export default function Contact() {
  const form = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        () => {
          toast.success(" Message sent successfully!");
          e.target.reset();
        },
        () => {
          toast.error(" Something went wrong. Try again.");
        }
      );
  };

  return (
    <>
      <Toaster />
      <section
        id="contactus"
        className="text-white py-16 px-6 md:px-20 relative"
      >
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

          {/* Right: Model or Image */}
          <div className="relative flex p-5 justify-center items-center md:w-1/2 w-full h-[350px] md:h-[500px] rounded-lg overflow-hidden">
            {isMobile ? (
              <>
                <img
                  src={EarthPreview}
                  alt="Earth Model Preview"
                  className="w-full h-full object-contain"
                />
                {/* Permanent Floating Popup */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-bounce-slow">
                  <div className="relative bg-black/80 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                    💡 You can move the model on desktop/laptop
                    {/* Arrow */}
                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-black/80"></div>
                  </div>
                </div>
              </>
            ) : (
              <ModelViewer path="/models/earth2.glb" />
            )}
          </div>
        </div>

        {/* Custom animation */}
        <style>{`
          @keyframes bounceSlow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-6px);
            }
          }
          .animate-bounce-slow {
            animation: bounceSlow 2s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
}
