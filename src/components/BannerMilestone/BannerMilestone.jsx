import { useState, useEffect, useRef } from "react";

import "./BannerMilestone.css";

const BannerMilestone = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (inView) {
      const counters = document.querySelectorAll(".count");
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const increment = target / 200;
          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    }
  }, [inView]);

  return (
    <section>
    <div className="banner-milestone-showcase" ref={sectionRef}>
      <h2 className="milestone-showcase-heading">
        You can always count on our <br/>expert guidance
      </h2>
      <div className="milestone-showcase-box">
        <div>
          <h4 className="count" data-target="1000">
            0
          </h4>
          <p className="milestone-name">Faithful Clients</p>
        </div>
        <div>
          <h4 className="count" data-target="1000">
            0
          </h4>
          <p className="milestone-name">Advisories & Consultations</p>
        </div>
        <div>
          <h4 className="count" data-target="1000">
            0
          </h4>
          <p className="milestone-name">Legal Documentations</p>
        </div>
        <div>
          <h4 className="count" data-target="1000">
            0
          </h4>
          <p className="milestone-name">Court Hearings</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default BannerMilestone;
