import Community from "./components/Community";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Feedback from "./components/Feedback";
import PopularTravelers from "./components/PopularTravelers";
import PricingTable from "./components/PricingTable";
import Footer from "./components/Footer";

function App() {
    return (
      <div>
        <Header />
        <Hero />
        <Community />
        <Feedback />
        <PopularTravelers />
        <PricingTable/>
        <Footer/>
      </div>
    );
  }  

export default App;
