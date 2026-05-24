import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-[#03C4EB] to-[#2f80ed] text-white shadow-lg shadow-[#03C4EB]/20 hover:shadow-[#03C4EB]/40",
  secondary:
    "bg-transparent border border-[#03C4EB]/60 text-white hover:bg-[#03C4EB]/10",
  whatsapp:
    "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/45",
};

const CTAButton = ({
  href,
  children,
  variant = "primary",
  className = "",
  target = "_blank",
  rel = target === "_blank" ? "noopener noreferrer" : undefined,
}) => (
  <motion.a
    href={href}
    target={target}
    rel={rel}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.98 }}
    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${variants[variant]} ${className}`}
  >
    {children}
  </motion.a>
);

export default CTAButton;
