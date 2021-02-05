import React from 'react';
import './App.css';

import AboutScreen from './screens/AboutScreen';
import FeatureScreen from './screens/FeatureScreen';
import AppScreen from './screens/AppScreen';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Arrow from './components/ArrowTop';
import TopScreen from './screens/TopScreen';

function App() {
  return (
    <>
      <div className="baseScreen">
        <NavigationBar />
        <main>
          <TopScreen />
          <AboutScreen />
          <FeatureScreen />
          <AppScreen />
        </main>
        <Arrow />
        <Footer style={{ color: 'black' }} />
      </div>
    </>
  );
}

export default App;
