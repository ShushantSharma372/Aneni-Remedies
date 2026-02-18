import React from "react";
import "./whatsapp.css";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=919350822880"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppFloat;