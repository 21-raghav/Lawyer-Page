import { useState, useEffect } from "react";

import heroImg from "../../../public/images_hero/team_n.jpg";
import heroImg2 from "../../../public/images_hero/clarisse-meyer-unsplash_n.jpg";
import heroImg3 from "../../../public/images_hero/tingey-injury-law-firm-unsplash_n.jpg";

import "./HeroNew.css";

const HeroNew = () => {
  const DATA = [
    { img: heroImg, text: "Your Partners in Legal Success" },
    { img: heroImg2, text: "Empowering You with Legal Solutions" },
    { img: heroImg3, text: "Committed to Excellence in Legal Representation" },
  ];

  const [currHeroContentIndex, setCurrHeroContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrHeroContentIndex((prevIndex) =>
        Math.round(((prevIndex + 1) % DATA.length).toFixed(2))
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [DATA.length]);

  useEffect(() => { 
    const paraElement = document.querySelector('.Hero_Heading'); 
    paraElement.classList.remove('Heading--fade'); // Trigger reflow to restart the animation 
    void paraElement.offsetWidth; 
    paraElement.classList.add('Heading--fade'); 
  }, [currHeroContentIndex]);

  return (
    <div
      className="Hero"
      style={{ backgroundImage: `url(${DATA[currHeroContentIndex]["img"]})` }}
    >
      <h2 key={currHeroContentIndex} className="Hero_Heading">{DATA[currHeroContentIndex]["text"]}</h2>
    </div>
  );
};

export default HeroNew;