import React from 'react'
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Overview from '../components/Overview';

const Home = () => {
  return (
      <div>
        <NavBar/>
        <Slider/>
        <Overview/>
      </div>
  );
}

export default Home;
