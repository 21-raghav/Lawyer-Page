import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import "./Catalog.css";

const services = [
  {
    id: "s01",
    title: "Divorce Petition",
    description:
      "Drafting a divorce petition is the initial step, and these petitions are essential for facilitating settlements and agreements.",
  },
  {
    id: "s02",
    title: "Divorce Resolution",
    description:
      "Fair Divorce Settlement is necessary for the satisfaction or dignity of both parties.",
  },
  {
    id: "s03",
    title: "Conflict Resolution & Guidance",
    description:
      "We explore various ideologies and thoroughly understand the foundations to effectively practice counseling and mediation.",
  },
  {
    id: "s04",
    title: "Legal Separation",
    description:
      "Legal separation, established by law, allows couples to reflect and consider their options before making a decision on permanent separation.",
  },
  {
    id: "s05",
    title: "Domestic Violence",
    description:
      "Assist victims in overcoming their suffering, ensuring that perpetrators are held accountable and justice is served.",
  },
  {
    id: "s06",
    title: "Mutual Consent Divorce",
    description:
      "Concerned to mutual agreement and cooperation between both parties to dissolve the marriage.",
  },
  {
    id: "s07",
    title: "Maintenance",
    description:
      "The demand for maintenance is typically made by partners who lack the assets and resources to support themselves.",
  },
  {
    id: "s08",
    title: "Child Custody",
    description:
      "Ensures that arrangements are made with the best interests of the child in mind.",
  },
];

const Catalog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => Math.round(((prevIndex + 1) % services.length).toFixed(2)));
    }, 3000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth / services.length;
      sliderRef.current.scrollTo({
        left: slideWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="catalog">
      <h2 className="catalog__heading">Our Expertise</h2>
      <div ref={sliderRef} className="catalog__list">
        {services.map((service, index) => (
          <div ref={slideRef} key={index} className="catalog__card">
            <h4 className="catalog__card__heading">{service.title}</h4>
            <p>{service.description}</p>
            <Link to={`services/${service.title}`} state={service}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
