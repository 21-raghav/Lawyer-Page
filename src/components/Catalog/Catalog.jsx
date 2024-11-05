// import React from 'react';
import './Catalog.css'; // Import the CSS file

const Catalog = () => {
  const services = [
    {
      title: 'REDEVELOPMENT',
      icon: '🏗️', // Replace with actual icon
      description: 'Drafting of Development Agreements, POA, Consent Affidavits,',
      buttonText: 'READ MORE'
    },
    {
      title: 'CONVEYANCE',
      icon: '🏢', // Replace with actual icon
      description: 'Drafting of Conveyance Deed, Sale Deed, Transfer Deed, Release Deed, Gist Deed,',
      buttonText: 'READ MORE'
    },
    {
      title: 'PROPERTY LITIGATIONS',
      icon: '🏠', // Replace with actual icon
      description: 'Litigations of whatsoever nature before any court across India with reference to',
      buttonText: 'READ MORE'
    },
    {
      title: 'DIVORCE LITIGATION',
      icon: '👫', // Replace with actual icon
      description: 'Advises and Litigation relating to Divorce wedlock including counseling, Divorce,',
      buttonText: 'READ MORE'
    }
  ];

  return (
    <div className="legal-services">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button>{service.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
