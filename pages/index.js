import React,{useEffect} from "react";
import Nav from './components/NavBar/LandingPage';
import { Footer } from "./components/componentindex";
// import Hero from "./components/NavBar/Hero';
import LandingPage from './components/NavBar/LandingPage'
import InfoCard from "./components/Card/InfoCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Index = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <LandingPage/>
      {/* <InfoCard/> */}
      {/* <Hero /> */}
      {/* <Nav /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
