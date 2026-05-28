import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {init} from 'ityped';
import React , { useEffect , useRef} from "react";
import {aarti} from "../assets";
import "./Hero.scss";

// Evita doble init con React 18 StrictMode (letras duplicadas)
let heroItypedStarted = false;

const TYPING_STRINGS = [
  "Soluciones Digitales ",
  "Desarrollo web ",
  "Automatización con IA ",
  "Presencia Digital ",
];

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el || heroItypedStarted) return;

    heroItypedStarted = true;
    el.textContent = "";

    init(el, {
      showCursor: true,
      strings: TYPING_STRINGS,
    });
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex">
      <div
        className={`head1 absolute  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#03C4EB]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-r from-blue-500 to-blue-300' />
        </div>


        <div className="head2">
          <h1 className={`${styles.heroHeadText} text-white`}>
            SystemX <p className='name text-[#03C4EB]'>FutureTech</p>
          </h1>
          <h3>
            <span ref={textRef} className={`${styles.heroSubText} mt-2 green-text-gradient`}></span>
          </h3>
      </div>
      </div>
      <div className="imgcontainer1 absolute bg-gradient-to-r from-blue-500 to-blue-300">
        <img src={aarti} alt="" className="object-contain"/>
      </div>
      </div>


      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-10 flex justify-end items-center'>
        <a href='#education'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
