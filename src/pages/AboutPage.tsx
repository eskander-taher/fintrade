import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutFounder from '../components/about/AboutFounder';
import CoreValues from '../components/about/CoreValues';
import WhoWeHelp from '../components/about/WhoWeHelp';
import Company from '../components/about/Company';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | FinTrade Master Academy';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <AboutHero />
      <AboutFounder />
      <CoreValues />
      <WhoWeHelp />
      <Company />
    </main>
  );
};

export default AboutPage;