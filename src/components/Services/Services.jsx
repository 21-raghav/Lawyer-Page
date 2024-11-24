import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import smoothscroll from 'smoothscroll-polyfill'; 



import { servicesData } from "../../data/servicesData.js";

import "./Services.css";

const Catalog = () => {
  const scrollRef = useRef(null);
  const serviceCardRef = useRef([]);

  const handleLeftArrowClick = () => {
    scrollRef.current.scrollLeft -= serviceCardRef.current[0].offsetWidth + 8;
  };

  const handleRightArrowClick = () => {
    scrollRef.current.scrollLeft += serviceCardRef.current[0].offsetWidth + 8;
  };


  useEffect(() => {
    smoothscroll.polyfill();
    const interval = setInterval(() => {
      const elem = scrollRef.current;
      if (elem && serviceCardRef.current[0]) {
        if (elem && serviceCardRef.current[0]) {
          elem.scrollLeft =
            elem.scrollLeft + elem.clientWidth >= elem.scrollWidth
              ? 0
              : elem.scrollLeft + serviceCardRef.current[0].offsetWidth + 8;
        }
      }
     
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="services">
        <h2 className="services-heading">
          We offer services across various <br /> legal domains
        </h2>
        <div className="services-card-list-wrapper">
          <div ref={scrollRef} className="services-card-list">
            {servicesData.map((service, index) => (
              <div
                key={index}
                ref={(el) => (serviceCardRef.current[index] = el)}
                className="service-card"
              >
                <h4 className="service-card-heading">{service.title}</h4>
                <p>{service.description}</p>
                <Link to={`services/${service.title}`}>Read More</Link>
              </div>
            ))}
          </div>
          <button className="services-arrow-btn" onClick={handleLeftArrowClick}>
            {"<"}
          </button>
          <button
            className="services-arrow-btn arrow-btn-right"
            onClick={handleRightArrowClick}
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
