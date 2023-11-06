import React from 'react'
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Overview from '../components/Overview';
import CardSection from '../components/CardSection';

const Home = () => {
  return (
      <div>
        <NavBar/>
        <Slider/>
        <Overview/>
        <CardSection/>
      </div>
  );
}

export default Home;
