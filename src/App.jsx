import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Order from './components/order/Order';

function App() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilSunday = 7 - dayOfWeek;
  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + daysUntilSunday);

  return (
    <Routes>
      <Route exact path="/" element={<Order />} />
      <Route exact path="/sunday" element={<Order date={nextSunday} />} />
    </Routes>
  );
}

export default App;
