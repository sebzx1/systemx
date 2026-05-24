import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import TechIcon from "./TechIcon";

const Tech = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Stack moderno</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tecnologías
        </h2>
        <p className="mt-4 text-secondary text-center max-w-2xl mx-auto text-sm sm:text-base">
          Herramientas actuales para construir soluciones rápidas, escalables y
          profesionales.
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-8 mt-16">
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            whileHover={{ scale: 1.06, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center gap-2"
          >
            <TechIcon name={technology.name} icon={technology.icon} />
            <span className="text-secondary text-xs text-center max-w-[88px] leading-tight">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
