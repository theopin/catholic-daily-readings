import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Reading from '../reading/Reading';
import Responsorial from '../responsorial/Responsorial';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Options from '../options/Options';

import fetchData from './OrderFetch';

function Order(props) {
  const {
    date, isSundayMode, setSelectedFeature, selectedRegion,
  } = props;

  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(date);

  useEffect(() => {
    console.log(selectedRegion);
    setSelectedFeature('Readings');
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
      <br />
      <Options
        isSundayMode={isSundayMode}
        selectedRegion={selectedRegion}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <br />
      <Header title={data.day} date={data.date} />
      <br />
      <Reading
        title="First Reading"
        verse={data.Mass_R1.source}
        summary={data.Mass_R1.heading}
        text={data.Mass_R1.text}
      />
      <br />
      <Responsorial
        title="Responsorial Psalm"
        verse={data.Mass_Ps.source}
        text={data.Mass_Ps.text ? data.Mass_Ps.text : ''}
      />
      <br />
      {data.Mass_R2 && (
        <>
          <Reading
            title="Second Reading"
            verse={data.Mass_R2.source}
            summary={data.Mass_R2.heading}
            text={data.Mass_R2.text}
          />
          <br />

        </>
      )}
      <Responsorial
        title="Gospel Acclamation"
        verse={data.Mass_GA.source}
        text={data.Mass_GA.text}
      />
      <br />
      <Reading
        title="Gospel"
        verse={data.Mass_G.source}
        summary={data.Mass_G.heading}
        text={data.Mass_G.text}
      />
      <br />
      <Footer />
    </div>
  );
}

Order.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  isSundayMode: PropTypes.bool.isRequired,
  setSelectedFeature: PropTypes.func.isRequired,
  selectedRegion: PropTypes.string.isRequired,
};

export default Order;
