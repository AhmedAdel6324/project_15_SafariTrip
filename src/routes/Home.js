import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assest/home.avif";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="https://www.skyscanner.com.eg/?previousCultureSource=GEO_LOCATION&redirectedFrom=www.skyscanner.net"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
