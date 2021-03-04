import React from 'react';
import '../App.css';

import Footer from '../components/Footer';
import NavigationBarDefault from '../components/NavigationBarDefault';
import AboutScreen from './AboutScreen';
import AppScreen from './AppScreen';
import FeatureScreen from './FeatureScreen';
import TopScreen from './TopScreen';

export default function DefaultScreen() {
  return (
    <>
      <div className="baseScreen">
        <NavigationBarDefault />
        <main>
          <TopScreen />
          <AboutScreen />
          <FeatureScreen />
          <AppScreen />
        </main>
        {/* <Arrow /> */}
        <Footer style={{ color: 'black' }} />
      </div>
    </>

  );
}
