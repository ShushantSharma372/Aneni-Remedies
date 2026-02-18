import React from "react";
import manufacturing from '@/assets/manufacturing1.jpg';
import globalNetwork from '@/assets/global-network.jpg';
import qualityControl from '@/assets/quality-control.jpg';

const cards = [
  {
    title: "Product Range",
    text: `Our product range spans multiple dosage forms including injectibles, ampoules, vials, tablets, capsules, softgel capsules, syrups, and eye drops, catering to diverse therapeutic requirements across markets.`,
    image: manufacturing,
    layout: "right",
    bgColor: "#DBE9F4",
  },
   {
    title: "Quality Assurance",
    text: `ISO 9001:2015 and WHO-GMP certified manufacturing processes ensuring the highest quality standards and safety compliance.`,
    image: qualityControl,
    layout: "left",
    bgColor: "#fbf3f3",
  },
  {
    title: "Global Reach",
    text: `Strong presence across Central Asia with expanding distribution networks and international partnerships to deliver healthcare products reliably.`,
    image: globalNetwork,
    layout: "right",
    bgColor: "#e8e0f2",
  },
];

const MedicalCards: React.FC = () => {
  return (
    <div className="px-4 bg-white max-w-[1200px] mx-auto flex flex-col gap-[140px]">
      {cards.map((card, index) => (
        <section
          key={index}
          className={`relative w-full min-h-[500px] ${
            card.layout === "right" ? "flex justify-end" : "flex justify-start"
          }`}
        >
            
          {/* Teal background card */}
          <div className="absolute inset-0 rounded-[16px] z-0" style={{ backgroundColor: card.bgColor }}></div>

          {/* Text card */}
          <div
            className={`absolute w-[420px] rounded-[16px] bg-white p-[45px_40px] shadow-[0_25px_70px_rgba(0,0,0,0.2)] z-20
            ${
              card.layout === "right"
                ? "top-[60px] left-[120px]"
                : "top-[60px] right-[120px]"
            }`}
          >
            <h2 className="text-[36px] mb-[18px] font-serif">{card.title}</h2>
            <p className="text-[18px] leading-[1.7] text-[#444]">{card.text}</p>
          </div>

          {/* Image card */}
          <div
            className={`absolute w-[55%] h-[420px] overflow-hidden rounded-[16px] shadow-[0_25px_60px_rgba(0,0,0,0.18)] z-10
            ${
              card.layout === "right" ? "right-[40px] bottom-[-40px]" : "left-[40px] bottom-[-40px]"
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default MedicalCards;
