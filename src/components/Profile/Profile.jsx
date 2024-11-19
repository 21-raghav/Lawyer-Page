import { Link } from "react-router-dom";

import "./Profile.css";

const Profile = () => {
  return (
      <div className="profile">
        <div>
          <h2 className="profile__heading">Get to Know Us</h2>
          <p className="profile__para">
            We offer a comprehensive solution for those facing challenging and
            intricate cases. Our dedicated team is committed to assisting
            clients with every aspect of their legal journey, from filing
            petitions to contesting and managing cases.
          </p>
          <p className="profile__para">
            Our expertise ensures that your path to resolution is as smooth and
            efficient as possible. Expert legal services tailored to your needs.
            We specialize in civil, criminal, corporate, real estate, property,
            and family law. </p>
            <p className="profile__para">
            Our commitment is to deliver top-notch legal
            services, ensuring our clients receive swift and efficient
            pre-litigation and litigation support.
          </p>
          <Link className="profile__link__btn" to={"about"}>
            Read More
          </Link>
        </div>
        <div className="profile__img">
          <img
            src="./images/self-2.jpg"
            alt="A lawyer dressed in formal attire, sitting in a well-lit chamber."
          />
        </div>
      </div>

  );
};

export default Profile;
