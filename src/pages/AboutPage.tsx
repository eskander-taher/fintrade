import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutFounder from '../components/about/AboutFounder';
import CoreValues from '../components/about/CoreValues';
import WhoWeHelp from "../components/about/WhoWeHelp";
import Certificates from '../components/about/Certificates';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | FinTrade Master Academy';
    window.scrollTo(0, 0);
  }, []);

  return (
		<main>
			<AboutHero />
			<AboutFounder />
			<Certificates />
			<CoreValues />
			<WhoWeHelp />
		</main>
  );
};

export default AboutPage;