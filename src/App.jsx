import About from "./Pages/About"
import Home from "./Pages/Home"
import { motion, useScroll } from "motion/react"
import Navbar from "./component/Navbar"
import Particle from "./component/Particle"
import Education from "./Pages/Education"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import ContactUs from "./Pages/ContactUs"
import Footer from "./Pages/Footer"
import { useEffect, useRef, useState } from "react"
import ScrollButton from "./component/ScrollButton"
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const { scrollYProgress } = useScroll()
 const topRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);
 useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };


    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    topRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
   <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 60,
                    left: 0,
                    right: 0,
                    height: 7,
                    zIndex:10,
                    originX: 0,
                    backgroundColor: "#74ff84",
                }}
            />
        <Particle/>
 
        <Navbar />
        <Home topRef={topRef} />
        <About />
        <Education/>
        <Skills/>
        <Projects/>
        <ContactUs/>
        <Footer/>
        <ScrollButton topRef={topRef} isAtTop={isAtTop} scrollToTop={scrollToTop} />
  
  

 

  
  </>
  )
}

export default App


