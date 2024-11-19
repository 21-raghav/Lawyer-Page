import HeroNew from "../../components/HeroNew/HeroNew";
import BannerBooking from "../../components/BannerBooking/BannerBooking";
import Profile from "../../components/Profile/Profile";
import Catalog from "../../components/Catalog/Catalog";
import QuantifyBanner from "../../components/QuantifyBanner/QuantifyBanner";

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
      <section>
        <Profile />
      </section>
      <section className="section--bg-color-light-grey">
        <Catalog />
      </section>
      <section>
        <QuantifyBanner />
      </section>
    </>
  );
};

export default HomePage;
