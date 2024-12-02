import { useParams } from "react-router-dom";

import { servicesData } from "../../data/servicesData";

import BannerBooking from "../../components/BannerBooking/BannerBooking"; 

import "./ServicesPage.css";

const ServicesPage = () => {
  const { serviceName } = useParams();

  const data = servicesData.find((item) => item.title === serviceName);

  console.log(data);
  let optionalData = null;

  if ("optionalInfo" in data.detailInfo) {
    optionalData = <>
    <h4>{data.detailInfo.optionalInfo.para}</h4>
    <ul className="content-info-list">
      {data.detailInfo.optionalInfo.list.map((item, index) => (
        <li key={index}>{<span className="bold-text">{item.split(':').at(0)}</span>}{item.split(':').at(1)}</li>
      ))}
    </ul>
  </>
  }

  return (
    <>
      <div className="service__heading__wrapper">
        <h2 className="service__heading">{data.title}</h2>
      </div>
      <div className="service-page-box">
      <div className="service__content_wrapper">
        <p>{data.detailInfo.introPara}</p>
        <h4>{data.title} related laws in India</h4>
        <ul className="content-info-list">
          {data.detailInfo.lawsList.map((item, index) => (
            <li key={index}>{<span className="bold-text">{item.split(':').at(0)}</span>}{item.split(':').at(1)}</li>
          ))}
        </ul>
        {optionalData}
      </div>
      <BannerBooking />
    </div>
    </>
  );
};

export default ServicesPage;
