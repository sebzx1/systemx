/**
 * Configuración EmailJS — crea tu cuenta en https://www.emailjs.com/
 * y copia las claves en un archivo .env.local (ver .env.example)
 */
export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

export const isEmailJsConfigured = () =>
  Boolean(
    emailJsConfig.serviceId &&
      emailJsConfig.templateId &&
      emailJsConfig.publicKey
  );
