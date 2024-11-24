import { Link } from "react-router-dom";

import profileImg from "../../images/self-2.jpg";

import "./Profile.css";

const Profile = () => {
  return (
      <div className="profile">
        <div>
          <h2 className="profile__heading">Get to Know Us</h2>
          <p className="profile__para">
            We offer a comprehensive solution for those facing challenging and
            intricate cases. We are committed to assisting clients with every 
            aspect of their legal journey, from filing petitions to contesting 
            and managing cases.
          </p>
          <p className="profile__para">
            We ensures that your path to resolution is as smooth and
            efficient as possible. We provide expert legal services tailored to 
            your needs. We specialize in civil, criminal, corporate, real estate, 
            property and family law. </p>
            <p className="profile__para">
            We are committed to deliver top-notch legal
            services, ensuring our clients receive swift and efficient
            pre-litigation and litigation support.
          </p>
          <Link className="profile__link__btn" to={"about"}>
            Read More
          </Link>
        </div>
        <div className="profile__img">
          <img
            src={profileImg}
            alt="A lawyer dressed in formal attire, sitting in a well-lit chamber."
            loading="lazy"
          />
        </div>
      </div>

  );
};

export default Profile;
