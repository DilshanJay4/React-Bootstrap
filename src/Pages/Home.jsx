import React from 'react'
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Overview from '../components/Overview';
import CardSection from '../components/CardSection';
import FaqSection from '../components/FaqSection';


const Home = () => {
  return (
      <div>
        <NavBar/>
        <Slider/>
        <Overview/>
        <CardSection/>
        <FaqSection/>
      </div>
  );
}

export default Home;
