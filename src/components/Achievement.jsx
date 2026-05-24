import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { achievements } from "../constants";
import CTAButton from "./CTAButton";
import { WHATSAPP_URL, WHATSAPP_URL_PROJECT } from "../constants/whatsapp";
import "./Achievement.scss";

const Achievement = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding}`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Trabajemos juntos</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            ¿Listo para impulsar tu negocio?
          </h2>
          <p className="mt-4 text-secondary text-center max-w-xl mx-auto text-sm sm:text-base">
            Cuéntame sobre tu proyecto y te ayudo a encontrar la mejor solución digital.
          </p>
        </motion.div>
      </div>

      <div className={`-mt-12 p-6 ${styles.paddingX}`}>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.li
              key={achievement.title}
              variants={fadeIn(index % 2 === 0 ? "left" : "right", "spring", index * 0.05, 0.5)}
              className="text-white-100 text-sm pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#03C4EB]"
            >
              {achievement.title}
            </motion.li>
          ))}
        </ul>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 0.8)}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <CTAButton href={WHATSAPP_URL_PROJECT}>Hablemos de tu proyecto</CTAButton>
          <CTAButton href={WHATSAPP_URL} variant="whatsapp">
            Solicitar información
          </CTAButton>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Achievement, "cta");
