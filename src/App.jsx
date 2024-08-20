import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SubHeadLine from "./components/SubHeadLine/SubHeadLine";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Location from "./components/Location/Location";
import Brands from "./components/Brands";
// import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SubHeadLine />
        <Features />
        <Pricing />
        <Location />
        <Brands />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
