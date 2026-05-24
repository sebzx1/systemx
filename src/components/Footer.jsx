import React from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineFacebook } from "react-icons/ai";
import { WHATSAPP_URL } from "../constants/whatsapp";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div>
            <h3 className="text-white font-bold text-xl mb-3">SystemX FutureTech</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Soluciones digitales para negocios: desarrollo web, automatización con IA
              y presencia profesional en internet.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-secondary text-sm">
              <li>Desarrollo Web Profesional</li>
              <li>Automatizaciones con IA</li>
              <li>Presencia Digital para Negocios</li>
              <li>Sistemas y Backend</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <a
              href="mailto:systemx218@gmail.com"
              className="block text-secondary text-sm hover:text-white transition-colors mb-2"
            >
              systemx218@gmail.com
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block blue-text-gradient text-sm font-medium mb-4"
            >
              +57 300 475 5765
            </a>
            <div className="flex gap-4 text-2xl">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <AiOutlineWhatsApp />
              </a>
              <a
                href="https://www.instagram.com/systemx_218?igsh=MW5zM21hZmVrdHVlYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <AiOutlineInstagram />
              </a>
              <a
                href="https://www.facebook.com/people/SystemX/61557114293325/?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <AiOutlineFacebook />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-secondary text-sm">
            © {year} SystemX FutureTech. Todos los derechos reservados.
          </p>
          <p className="text-secondary text-xs mt-2 opacity-70">
            Desarrollo web · Automatización · Soluciones digitales para negocios
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
