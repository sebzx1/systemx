import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { WHATSAPP_URL } from "../constants/whatsapp";

const WhatsAppFloat = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="whatsapp-float fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow"
  >
    <BsWhatsapp className="text-2xl sm:text-3xl" />
    <span className="whatsapp-float__pulse" aria-hidden />
  </motion.a>
);

export default WhatsAppFloat;
