import { BrowserRouter } from "react-router-dom";

import {
  Contact,
  Achievement,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
  Content,
  Footer,
  Impact,
  Services,
  BusinessHelp,
  Education,
  WhatsAppFloat,
} from "./components";

const routerBasename =
  import.meta.env.BASE_URL === "/"
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => {
  return (
    <div>
      <BrowserRouter basename={routerBasename}>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Content />
          <div className="section-divider" />
          <Education />
          <div className="section-divider" />
          <Impact />
          <div className="section-divider" />
          <Services />
          <div className="section-divider" />
          <BusinessHelp />
          <div className="section-divider" />
          <Tech />
          <div className="section-divider" />
          <Achievement />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
          <WhatsAppFloat />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
