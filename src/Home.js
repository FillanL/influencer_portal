import React from 'react';
// import { useDispatch} from 'react-redux'
// import {getAllRequest} from './Services/requestInfluencerService'
import Prices from './Container/Prices';
import Banner from './Container/Banner'
import AboutSection from './Container/AboutSection';

import './App.scss';
import Feature from './Container/Feature';
import EmailRequest from './Components/EmailRequest';

function Home() {
  // const dispatch = useDispatch()
  //   useEffect(() => {
  //       dispatch(getAllRequest())
  //   }, [dispatch])
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
