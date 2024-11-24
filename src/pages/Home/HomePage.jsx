import HeroNew from "../../components/HeroNew/HeroNew";
import BannerBooking from "../../components/BannerBooking/BannerBooking";
import Profile from "../../components/Profile/Profile";
import Services from "../../components/Services/Services";
import BannerMilestone from "../../components/BannerMilestone/BannerMilestone";

import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <section>
        <HeroNew />
      </section>
      <section className="section--bg-color-light-grey">
        <BannerBooking />
      </section>
      <Profile />
      <Services />
      <BannerMilestone />
    </>
  );
};

export default HomePage;
