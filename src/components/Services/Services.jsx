import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import { servicesData } from "../../data/servicesData.js";

import "./Services.css";

const Catalog = () => {
  const scrollRef = useRef(null);
  const serviceCardRef = useRef([]);
  const intervalRef = useRef();

  const autoScroll = () => {
    intervalRef.current = setInterval(() => {
      const elem = scrollRef.current;
      if (elem && serviceCardRef.current[0]) {
        elem.scrollLeft + elem.clientWidth >= elem.scrollWidth
          ? scroll.scrollTo(0, {
              container: scrollRef.current,
              smooth: true,
              horizontal: true,
            })
          : scroll.scrollMore(serviceCardRef.current[0].offsetWidth + 8, {
              container: scrollRef.current,
              smooth: true,
              horizontal: true,
            });
      }
    }, 2500);
  };

  const handleLeftArrowClick = () => {
    clearInterval(intervalRef.current);
    scroll.scrollMore(-serviceCardRef.current[0].offsetWidth + 8, {
      container: scrollRef.current,
      smooth: true,
      horizontal: true,
    });
    autoScroll();
  };

  const handleRightArrowClick = () => {
    clearInterval(intervalRef.current);
    scroll.scrollMore(serviceCardRef.current[0].offsetWidth + 8, {
      container: scrollRef.current,
      smooth: true,
      horizontal: true,
    });
    autoScroll();
  };

  useEffect(() => {
    autoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  // const handleLeftArrowClick = () => {
  //   scrollRef.current.scrollLeft -= serviceCardRef.current[0].offsetWidth + 8;
  // };

  // const handleRightArrowClick = () => {
  //   scrollRef.current.scrollLeft += serviceCardRef.current[0].offsetWidth + 8;
  // };

  // useEffect(() => {
  //   const interval = setInterval( {
  //     if (elem && serviceCardRef.current[0]) {
  //       elem.scrollLeft =
  //       elem.scrollLeft + elem.clientWidth >= elem.scrollWidth
  //         ? 0
  //         : elem.scrollLeft + serviceCardRef.current[0].offsetWidth + 8;
  //     }
  //   }, 2500);
  //   return () => clearInterval(interval);
  // }, []);

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
                <div className="service-card-icon">
                  <img src={service.icon} alt="" />
                </div>
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
