

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import History from "@/components/History";
import Ceremony from "@/components/Ceremony";

function App() {
  
  return (
    <>
      <Navbar  />
      <HeroSection  />
      <Services />
      <Contact />
      <Portfolio />
      <History />
      <Ceremony />
    </>
  );
}

export default App;
