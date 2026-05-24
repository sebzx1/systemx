import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { businessProblems } from "../constants";
import CTAButton from "./CTAButton";
import { WHATSAPP_URL_PROJECT } from "../constants/whatsapp";

const ProblemCard = ({ item, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.08, 0.6)}
    className="problem-card p-6 sm:p-8 rounded-2xl bg-black-100 border border-white/5 hover:border-[#03C4EB]/25 transition-all duration-300 hover:-translate-y-1"
  >
    <span className="text-3xl mb-4 block" role="img" aria-hidden>
      {item.icon}
    </span>
    <h3 className="text-white text-lg font-bold mb-2">{item.problem}</h3>
    <p className="text-secondary text-sm mb-4">{item.description}</p>
    <div className="pt-4 border-t border-white/5">
      <p className="text-xs uppercase tracking-wider text-[#03C4EB] mb-2">Solución</p>
      <p className="text-white-100 text-sm leading-relaxed">{item.solution}</p>
    </div>
  </motion.div>
);

const BusinessHelp = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>Enfocado en resultados</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        ¿Cómo puedo ayudar a tu negocio?
      </h2>
      <p className="mt-4 text-secondary text-center max-w-2xl mx-auto text-sm sm:text-base">
        Identifico los problemas reales de tu negocio y los resuelvo con tecnología moderna,
        diseño profesional y automatización inteligente.
      </p>
    </motion.div>

    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {businessProblems.map((item, index) => (
        <ProblemCard key={item.problem} item={item} index={index} />
      ))}
    </div>

    <motion.div
      variants={fadeIn("up", "tween", 0.4, 0.8)}
      className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      <CTAButton href={WHATSAPP_URL_PROJECT}>Trabajemos juntos</CTAButton>
      <CTAButton href={WHATSAPP_URL_PROJECT} variant="secondary">
        Hablemos de tu proyecto
      </CTAButton>
    </motion.div>
  </>
);

export default SectionWrapper(BusinessHelp, "business");
