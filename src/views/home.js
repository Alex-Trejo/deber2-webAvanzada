import React from 'react';

import AppHero from '../components/home/hero.js';
import AppAbout from '../components/Information/about.js';
import AppFeature from '../components/home/feature.js';
import AppWorks from '../components/home/works.js';
import AppFaq from '../components/home/faq.js';
import AppPricing from '../components/home/pricing.js';
import AppContact from '../components/home/contact.js';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppFeature/>
      <AppWorks/>
      <AppFaq/>
      <AppPricing/>
      <AppContact/>
    </div>
  );
}

export default AppHome;