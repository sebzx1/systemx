import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { impactQuotes } from "../constants";
import CTAButton from "./CTAButton";
import { WHATSAPP_URL_PROJECT } from "../constants/whatsapp";

const Impact = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>Soluciones digitales</p>
      <h2 className={`${styles.sectionHeadText} text-center leading-tight`}>
        Más que páginas web
      </h2>
    </motion.div>

    <motion.blockquote
      variants={fadeIn("up", "spring", 0.2, 0.8)}
      className="mt-10 max-w-4xl mx-auto text-center"
    >
      <p className="text-white-100 text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
        No solo desarrollo páginas web.{" "}
        <span className="blue-text-gradient font-medium">
          Creo soluciones digitales que ayudan a negocios a crecer, automatizar procesos y verse profesionales en internet.
        </span>
      </p>
    </motion.blockquote>

    <motion.div
      variants={fadeIn("up", "tween", 0.4, 0.8)}
      className="mt-10 flex flex-wrap justify-center gap-4"
    >
      <CTAButton href={WHATSAPP_URL_PROJECT}>Hablemos de tu proyecto</CTAButton>
      <CTAButton href={WHATSAPP_URL_PROJECT} variant="secondary">
        Impulsa tu negocio
      </CTAButton>
    </motion.div>

    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {impactQuotes.map((quote, index) => (
        <motion.div
          key={quote}
          variants={fadeIn(index % 2 === 0 ? "left" : "right", "spring", 0.1 * index, 0.6)}
          className="quote-card px-6 py-5 rounded-2xl border border-white/5 bg-tertiary/40 backdrop-blur-sm hover:border-[#03C4EB]/30 transition-colors duration-300"
        >
          <p className="text-secondary text-sm sm:text-base italic">&ldquo;{quote}&rdquo;</p>
        </motion.div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Impact, "impact");
