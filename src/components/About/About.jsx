import BannerBooking from "../BannerBooking/BannerBooking";

import "./About.css";

const About = () => {
  return (
    <div className="about_wrapper">
    <div className="about">
      <div className="about_text_wrapper">
        <h2>About Us</h2>
        <p>
          We are a comprehensive legal firm based in New Delhi, specializing in
          a wide range of legal services. Our expertise covers all matters
          related to divorce, child custody, alimony, maintenance, and other
          related issues.
        </p>
        <p>
          Our strengths lie in the depth of our knowledge, strong client
          relationships, industry-specific specialization, and the availability
          of highly qualified and well-prepared experts. We pride ourselves on
          our innovative approach to providing quick and efficient legal
          services.
        </p>
        <p>
          Located exclusively in New Delhi, all the information you need to find
          us is available on our website. Feel free to call us anytime to book
          an appointment for a face-to-face consultation. We ensure the utmost
          security in our services and strive to meet all our clients needs
          promptly.
        </p>
        <p>
          We are confident in our ability to provide you with the solutions you
          seek. Our legal firm is dedicated to addressing every issue our
          clients face, allowing us to delve deeply into each case and
          strengthen it significantly.
        </p>
        <p>
          Our approach is unique; we take issues seriously and employ strategic
          counterattacks to bolster our clients cases, empowering the judge to
          make the right decision.
        </p>
        <p>
          We are here not just to help you through tough times but to offer the
          best consultation and make you aware of what is best for you, what you
          truly want, and what matters most. Whether you decide on a resolution
          or divorce, we are here to support you until the end.
        </p>
        <p>
          We understand that this process is not as straightforward as it may
          seem, but we are here to provide the best consultancy and the most
          suitable options. Sometimes, reaching an agreement can take years due
          to pragmatic factors in the lives of both parties. However, we are
          here to help you navigate any and every situation.
        </p>
        <p>
          Feel free to reach out to us for any legal assistance you may need. We
          are committed to providing exceptional service and ensuring your needs
          are met with the highest level of professionalism.
        </p>
      </div>
      <div className="about_img_wrapper">
        <img src="./images/self.jpg" />
      </div>
    </div>
    <BannerBooking />
    </div>
  );
};

export default About;
