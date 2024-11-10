// import React from 'react';
import "./Catalog.css";
const services = [
  {
    title: "Divorce Petition",
    description:
      "Drafting a divorce petition is the initial step, and these petitions are essential for facilitating settlements and agreements.",
  },
  {
    title: "Divorce Resolution",
    description:
      "Fair Divorce Settlement is necessary for the satisfaction or dignity of both parties.",
  },
  {
    title: "Conflict Resolution & Guidance",
    description:
      "We explore various ideologies and thoroughly understand the foundations to effectively practice counseling and mediation.",
  },
  {
    title: "Legal Separation",
    description:
      "Legal separation, established by law, allows couples to reflect and consider their options before making a decision on permanent separation.",
  },
  {
    title: "Domestic Violence(IPV)",
    description:
      "Assist victims in overcoming their suffering, ensuring that perpetrators are held accountable and justice is served.",
  },
  {
    title: "Mutual Consent Divorce",
    description:
      "Concerned to mutual agreement and cooperation between both parties to dissolve the marriage.",
  },
  {
    title: "Maintenance(Spousal Support)",
    description:
      "The demand for maintenance is typically made by partners who lack the assets and resources to support themselves.",
  },
  {
    title: "Child Custody",
    description:
      "Ensures that arrangements are made with the best interests of the child in mind.",
  },
];

const Catalog = () => {
  return (
    <section className="services_section">
      <div className="services">
        <h2 className="services_heading">Our Expertise</h2>
        <div className="services_list">
          {services.map((service, index) => (
            <div
              key={index}
              className="service_card"
            >
              <div style={{ fontSize: "40px" }}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
