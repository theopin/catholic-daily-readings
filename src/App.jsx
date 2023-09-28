import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Order from './components/order/Order';

function App() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilSunday = 7 - dayOfWeek;
  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + daysUntilSunday);

  const [selectedRegion, setSelectedRegion] = useState('asia.singapore');
  console.log(selectedRegion);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={(
          <Order
            date={today}
            isSundayMode={false}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        )}
      />
      <Route
        exact
        path="/sunday"
        element={(
          <Order
            date={nextSunday}
            isSundayMode
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        )}
      />
    </Routes>
  );
}

export default App;
