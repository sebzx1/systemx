import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { services } from "../constants";
import CTAButton from "./CTAButton";
import { WHATSAPP_URL } from "../constants/whatsapp";

const ServiceCard = ({ service, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="service-card group relative p-8 rounded-3xl bg-tertiary/60 border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden"
  >
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: `radial-gradient(600px circle at 50% 0%, ${service.accent}15, transparent 70%)`,
      }}
    />
    <div className="relative z-10">
      <img
        src={service.icon}
        alt={service.title}
        className="w-16 h-16 mb-6"
      />
      <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
      <p className="text-[#03C4EB] text-sm font-medium mb-6">{service.subtitle}</p>
      <ul className="space-y-3">
        {service.points.map((point) => (
          <li
            key={point}
            className="text-white-100 text-sm flex items-start gap-3"
          >
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: service.accent }}
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Services = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>Lo que ofrezco</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Servicios</h2>
    </motion.div>

    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </div>

    <motion.div
      variants={fadeIn("up", "tween", 0.5, 0.8)}
      className="mt-12 flex justify-center"
    >
      <CTAButton href={WHATSAPP_URL} variant="whatsapp">
        Solicitar información
      </CTAButton>
    </motion.div>
  </>
);

export default SectionWrapper(Services, "services");
