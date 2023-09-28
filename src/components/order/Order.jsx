import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Reading from '../reading/Reading';
import Responsorial from '../responsorial/Responsorial';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Options from '../options/Options';

import fetchData from './OrderFetch';
import '../../commons/Commons.css';

function Order(props) {
  const {
    date, isSundayMode, selectedRegion, setSelectedRegion,
  } = props;

  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(date);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const region = params.get('region');
    if (region) {
      setSelectedRegion(region);
    }

    fetchData(selectedRegion, selectedDate)
      .then((response) => {
        // console.log(response);
        setData(response);
      });
  }, [selectedRegion, selectedDate]);

  if (!data) {
    return <div />;
  }

  return (
    <div className="container">
      <Options
        isSundayMode={isSundayMode}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <h2>Daily Mass Reading</h2>

      <Header title={data.day} date={data.date} />

      <Reading
        title="First Reading"
        verse={data.Mass_R1.source}
        summary={data.Mass_R1.heading}
        text={data.Mass_R1.text}
      />
      <Responsorial
        title="Responsorial Psalm"
        verse={data.Mass_Ps.source}
        text={data.Mass_Ps.text}
      />
      {data.Mass_R2 && (
        <Reading
          title="Second Reading"
          verse={data.Mass_R2.source}
          summary={data.Mass_R2.heading}
          text={data.Mass_R2.text}
        />
      )}
      <Responsorial
        title="Gospel Acclamation"
        verse={data.Mass_GA.source}
        text={data.Mass_GA.text}
      />
      <Reading
        title="Gospel"
        verse={data.Mass_G.source}
        summary={data.Mass_G.heading}
        text={data.Mass_G.text}
      />
      <Footer />
    </div>
  );
}

Order.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  isSundayMode: PropTypes.bool.isRequired,
  selectedRegion: PropTypes.string.isRequired,
  setSelectedRegion: PropTypes.func.isRequired,
};

export default Order;
