import React from "react";
import AboutUs from "../components/aboutUs/AboutUs";
import Clients from "../components/clients/Clients";
import Contact from "../components/Contact/Contact";
import FinishedProjects from "../components/finishedProjects/FinishedProjects";
import Header from "../components/header/Header";
import HeaderSlider from "../components/header/HeaderSlider";
import LatestNews from "../components/latestNews/LatestNews";
import Menu from "../components/menu/Menu";
import NewProject from "../components/newProject/NewProject";
import Prices from "../components/Prices/Prices";
import Services from "../components/services/Services";
import Statistics from "../components/statistics/Statistics";
import Team from "../components/team/Team";
import Testimonials from "../components/testimonials/Testimonials";
import WhatWeDo from "../components/whatWeDo/WhatWeDo";

const Home = () => {
  return (
    <>
      <HeaderSlider />
      <WhatWeDo />
      <AboutUs />
      <Services />
      <Statistics />
      <FinishedProjects />
      <Team />
      <Prices />
      <Testimonials />
      <Clients />
      <LatestNews />
      <Contact />
      <NewProject />
    </>
  );
};

export default Home;
