import BannerBooking from "../BannerBooking/BannerBooking";

import lawyerImg from "../../images/self.jpg";

import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about_text_wrapper">
          <h2 className="about__heading">About Us</h2>
          <p className="about__para">
            We are a legal firm based in New Delhi, specializing in a wide range
            of legal services. Our expertise covers all matters related to
            divorce, child custody, alimony, maintenance, and other related
            issues.
          </p>
          <p className="about__para">
            Our strengths lies in the depths of our knowledge, strong client
            relationships, industry-specific specialization, and the
            availability of highly qualified and well-prepared experts. We pride
            ourselves on our innovative approach to providing quick and
            efficient legal services.
          </p>
          <p className="about__para">
            Feel free to call us to book an appointment for a face-to-face
            consultation. We ensure the utmost security in our services and
            strive to meet all our clients needs promptly.
          </p>
          <p className="about__para">
            We are confident in our ability to provide you with the solutions
            you seek. Our legal firm is dedicated to addressing every issue our
            clients face, allowing us to delve deeply into each case and
            strengthen it significantly.
          </p>
          <p className="about__para">
            Our approach is unique; we take issues seriously and employ
            strategic counterattacks to bolster our clients cases, empowering
            the judge to make the right decision.
          </p>
          <p className="about__para">
            We are here not just to help you through tough times but to offer
            the best consultation and make you aware of what is best for you,
            what you truly want, and what matters most.
          </p>
          <p className="about__para">
            We understand that the legal process is not as straightforward as it
            may seem, but we are here to provide the best consultancy and the
            most suitable options. Sometimes, reaching an agreement can take
            years due to pragmatic factors. However, we are here to help you
            navigate any and every situation.
          </p>
          <p className="about__para">
            Feel free to reach out to us for any legal assistance you may need.
            We are committed to providing exceptional service and ensuring your
            needs are met with the highest level of professionalism.
          </p>
        </div>
        <div className="about_img_wrapper">
          <img
            src={lawyerImg}
            alt="A lawyer dressed in formal attire, standing in a well-lit chamber."
            loading="lazy"
          />
        </div>
      </div>
      <BannerBooking />
    </>
  );
};

export default About;
