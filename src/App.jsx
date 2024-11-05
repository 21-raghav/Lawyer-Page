import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import Catalog from './components/Catalog/Catalog';
import QuantifyBanner from './components/QuantifyBanner/QuantifyBanner';
import BookingButton from './components/BookingButton/BookingButton';
import Footer from './components/Footer/Footer';

import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Catalog />
      <QuantifyBanner />
      <BookingButton />
      <Footer />
    </>
  )
}

export default App
