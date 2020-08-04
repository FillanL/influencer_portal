import React from 'react';
import Prices from './Container/Prices';
import Banner from './Container/Banner'
import AboutSection from './Container/AboutSection';

import './App.scss';
import Feature from './Container/Feature';
import EmailRequest from './Components/EmailRequest';

function Home() {
  return (
    <div className="App">
      <Banner/>
      <AboutSection/>
      <Feature/>
      <EmailRequest/>
      <Prices/>
    </div>
  );
}

export default Home;
