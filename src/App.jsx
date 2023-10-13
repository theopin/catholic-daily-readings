import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.css';
import Main from './components/main/Main';
import Order from './components/readings/order/Order';
import Navbar from './components/navbar/Navbar';

function App() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilSunday = 7 - dayOfWeek;
  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + daysUntilSunday);

  const [selectedRegion, setSelectedRegion] = useState(localStorage.getItem('region') || 'asia.singapore');
  const [selectedFeature, setSelectedFeature] = useState('');
  return (
    <div>
      <Navbar
        selectedFeature={selectedFeature}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <Main />
          )}
        />
        <Route
          exact
          path="/readings"
          element={(
            <Order
              date={today}
              isSundayMode={false}
              setSelectedFeature={setSelectedFeature}
              selectedRegion={selectedRegion}
            />
          )}
        />
        <Route
          exact
          path="/readings/sunday"
          element={(
            <Order
              date={nextSunday}
              isSundayMode
              setSelectedFeature={setSelectedFeature}
              selectedRegion={selectedRegion}
            />
          )}
        />
      </Routes>
    </div>

  );
}

export default App;
