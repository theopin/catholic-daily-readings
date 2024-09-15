import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Welcome from '../welcome/Welcome';
import Order from '../readings/order/Order';
import AppLayout from '../layout/AppLayout';

const today = new Date();
const dayOfWeek = today.getDay();
const daysUntilSunday = 7 - dayOfWeek;
const nextSunday = new Date(today);
nextSunday.setDate(today.getDate() + daysUntilSunday);

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        path: '/mass/readings',
        children: [
          {
            path: '',
            element: <Order
              date={today}
              isSundayMode={false}
            />,
          },
          {
            path: 'sunday',
            element: <Order
              date={nextSunday}
              isSundayMode
            />,
          },
        ],
      },
    ],
  },
]);

export default AppRouter;
