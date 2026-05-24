import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import CTAButton from "./CTAButton";
import { WHATSAPP_URL_PROJECT } from "../constants/whatsapp";
import { emailJsConfig, isEmailJsConfigured } from "../config/emailjs";
import "./Contact.scss";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (isEmailJsConfigured()) {
      emailjs.init(emailJsConfig.publicKey);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (feedback) setFeedback(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(null);

    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      setFeedback({
        type: "error",
        text: "Por favor, completa todos los campos.",
      });
      return;
    }

    if (!EMAIL_REGEX.test(trimmed.email)) {
      setFeedback({
        type: "error",
        text: "Introduce un correo electrónico válido.",
      });
      return;
    }

    if (!isEmailJsConfigured()) {
      setFeedback({
        type: "error",
        text: "El formulario aún no está configurado. Usa WhatsApp o correo mientras tanto.",
      });
      return;
    }

    setLoading(true);

    try {
      const params = {
        from_name: trimmed.name,
        user_name: trimmed.name,
        to_name: "SystemX",
        from_email: trimmed.email,
        user_email: trimmed.email,
        reply_to: trimmed.email,
        message: trimmed.message,
      };

      const response = await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        params,
        emailJsConfig.publicKey
      );

      if (response.status !== 200) {
        throw new Error(`EmailJS respondió con estado ${response.status}`);
      }

      setFeedback({
        type: "success",
        text: "¡Mensaje enviado! Te responderé lo antes posible.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      const detail =
        error?.text ||
        error?.message ||
        "Revisa tu conexión o la configuración de EmailJS.";
      setFeedback({
        type: "error",
        text: `No se pudo enviar el mensaje. ${detail}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Ponte en contacto</p>
        <h3 className={styles.sectionHeadText}>Contacto</h3>
        <p className="mt-3 text-secondary text-sm">
          Cuéntame sobre tu negocio y te respondo lo antes posible.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <CTAButton href={WHATSAPP_URL_PROJECT} variant="whatsapp">
            Hablemos por WhatsApp
          </CTAButton>
        </div>

        {!isEmailJsConfigured() && (
          <p className="mt-4 text-amber-400/90 text-sm rounded-lg bg-amber-400/10 px-4 py-3 border border-amber-400/20">
            Para activar el envío por correo, configura EmailJS en un archivo{" "}
            <code className="text-amber-200">.env.local</code> (mira{" "}
            <code className="text-amber-200">.env.example</code> en el proyecto).
          </p>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-3 flex flex-col gap-8"
          noValidate
        >
          <label className="flex flex-col" htmlFor="name">
            <span className="text-white font-medium mb-3">Nombre</span>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cuál es tu nombre?"
              className="bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium"
              disabled={loading}
              autoComplete="name"
            />
          </label>
          <label className="flex flex-col" htmlFor="email">
            <span className="text-white font-medium mb-3">Correo electrónico</span>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cuál es tu correo?"
              className="bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium"
              disabled={loading}
              autoComplete="email"
            />
          </label>
          <label className="flex flex-col" htmlFor="message">
            <span className="text-white font-medium mb-3">Mensaje</span>
            <textarea
              id="message"
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿Qué te gustaría contarme?"
              className="bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium resize-y min-h-[120px]"
              disabled={loading}
            />
          </label>

          {feedback && (
            <p
              role="alert"
              className={`text-sm rounded-lg px-4 py-3 ${
                feedback.type === "success"
                  ? "text-green-300 bg-green-500/10 border border-green-500/30"
                  : "text-red-300 bg-red-500/10 border border-red-500/30"
              }`}
            >
              {feedback.text}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#03C4EB] to-[#2f80ed] py-3 px-8 rounded-full outline-none w-fit text-white font-bold shadow-lg shadow-[#03C4EB]/20 hover:shadow-[#03C4EB]/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>

        <div className="mt-5 contact__options">
          <article className="contact__option">
            <MdEmail />
            <a
              href="mailto:systemx218@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="blue-text-gradient"
            >
              systemx218@gmail.com
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <a
              href="https://api.whatsapp.com/send/?phone=573004755765&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="blue-text-gradient"
            >
              +57 3004755765
            </a>
          </article>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
