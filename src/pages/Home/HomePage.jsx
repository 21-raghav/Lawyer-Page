// import ContactBar from '../../components/ContactBar/ContactBar';
// import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
// import Introduction from '../../components/Introduction/Introduction';
import Catalog from '../../components/Catalog/Catalog';
import QuantifyBanner from '../../components/QuantifyBanner/QuantifyBanner';
import BannerBooking from '../../components/BannerBooking/BannerBooking';
// import Footer from '../../components/Footer/Footer';

const HomePage = () => {

    return (
      <>
        <BannerBooking />
        <Hero />
        <Catalog />
        <QuantifyBanner />
      </>
    )
  }
  
  export default HomePage;