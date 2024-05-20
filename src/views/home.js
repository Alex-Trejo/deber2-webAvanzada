import React from 'react';

import AppHero from '../components/home/hero';
import AppWorks from '../components/home/works';


function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppWorks/>
    </div>
  );
}

export default AppHome;