import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import Navbar from '../navbar/Navbar';

function AppLayout() {
  const [selectedRegion, setSelectedRegion] = useState(localStorage.getItem('region') || 'asia.singapore');
  const [selectedFeature, setSelectedFeature] = useState('');
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar
          selectedFeature={selectedFeature}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <Outlet setSelectedFeature={setSelectedFeature} />
        </div>
      </div>
    </div>

  );
}

export default AppLayout;
