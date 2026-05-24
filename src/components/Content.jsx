import { React, useState } from "react";
import "./Content.scss";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { BsPersonWorkspace, BsRocketTakeoff } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

const Content = () => {
  const [activeNav, setActiveNav] = useState("#");

  const links = [
    { href: "#", icon: <AiOutlineHome />, id: "#" },
    { href: "#education", icon: <BiBook />, id: "#education" },
    { href: "#impact", icon: <HiOutlineLightBulb />, id: "#impact" },
    { href: "#services", icon: <BsPersonWorkspace />, id: "#services" },
    { href: "#business", icon: <BsRocketTakeoff />, id: "#business" },
    { href: "#tech", icon: <AiOutlineFundProjectionScreen />, id: "#tech" },
    { href: "#contact", icon: <MdMessage />, id: "#contact" },
  ];

  return (
    <div className="nav">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          onClick={() => setActiveNav(link.id)}
          className={activeNav === link.id ? "active" : ""}
          title={link.href}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Content;
