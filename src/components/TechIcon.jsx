import { useState } from "react";

const TechIcon = ({ name, icon }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="tech-icon-card w-[5rem] h-[5rem] rounded-2xl bg-tertiary/80 border border-white/10 flex items-center justify-center p-3 hover:border-[#03C4EB]/40 hover:shadow-lg hover:shadow-[#03C4EB]/10 transition-all duration-300"
      title={name}
    >
      {!failed ? (
        <img
          src={icon}
          alt={name}
          className="w-10 h-10 object-contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-[#03C4EB] font-bold text-xl" aria-hidden>
          {name.charAt(0)}
        </span>
      )}
    </div>
  );
};

export default TechIcon;
