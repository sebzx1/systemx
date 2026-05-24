import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import CTAButton from "./CTAButton";
import { WHATSAPP_URL } from "../constants/whatsapp";
import "./Education.scss";

const Education = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[280px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Quién soy</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Sobre SystemX</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.8)}
          className="mt-8 max-w-3xl mx-auto space-y-5 text-secondary text-sm sm:text-base leading-relaxed text-center"
        >
          <p>
            Soy un desarrollador especializado en{" "}
            <span className="text-white">soluciones digitales para negocios</span>.
            No vendo solo páginas web: construyo herramientas que te ayudan a
            verte profesional, automatizar procesos y conseguir más clientes en
            internet.
          </p>
          <p>
            Trabajo con tecnologías modernas — React, Ruby on Rails, Python, APIs
            e integraciones con IA — para crear sitios empresariales, landing pages,
            sistemas personalizados y automatizaciones que ahorran tiempo real a tu
            negocio.
          </p>
          <p className="text-white-100">
            Mi enfoque es simple: entender tu negocio, resolver problemas concretos
            y entregarte una presencia digital que genere confianza desde el primer
            clic.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.4, 0.8)}
          className="mt-8 flex justify-center"
        >
          <CTAButton href={WHATSAPP_URL} variant="whatsapp">
            Trabajemos juntos
          </CTAButton>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
