import Hero from "../components/Hero";
import TrendingDestinations from "../components/TrendingDestinations";
import TravelShowcase from "../components/TravelShowcase";
import SmartTools from "../components/SmartTools";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <TrendingDestinations />
      <TravelShowcase />
      <SmartTools />
      <Footer />
    </>
  );
}

export default Home;