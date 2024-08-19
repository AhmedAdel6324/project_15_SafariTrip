import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServicesImg from "../assest/services.avif";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServicesImg}
        title="Services"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Services;
