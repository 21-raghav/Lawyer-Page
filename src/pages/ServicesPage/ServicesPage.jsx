import { useParams } from "react-router-dom";

import { servicesData } from "../../data/servicesData";

import "./ServicesPage.css";

const ServicesPage = () => {

  const { serviceName } = useParams(); 

  const data = servicesData.find(item => item.title === serviceName);
 
  console.log(data);

  return (
    <>
      <div className="service__heading__wrapper">
        <h2 className="service__heading">{data.title}</h2>
      </div>
      <div className="service__para_wrapper">
        {data.detailInfo.map((item, index) => (
          <p key={index} className="service__para">{item}</p>
        ))}
      </div>
    </>
  );
};

export default ServicesPage;



