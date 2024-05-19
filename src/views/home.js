import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppWorks from '../components/home/works';
import AppFaq from '../components/contactUs/faq';
import AppPricing from '../components/categories/pricing';
import AppContact from '../components/contactUs/contact';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppWorks/>
    </div>
  );
}

export default AppHome;