import React, { useState, useEffect, ReactPropTypes } from 'react';

import Reading from '../reading/Reading';
import Responsorial from '../responsorial/Responsorial';
import Footer from '../footer/Footer';
import Header from '../header/Header';

import '../../commons/Commons.css';

import fetchData from './OrderFetch';
import Options from '../options/Options';

function Order(props) {
  const { date } = props;

  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(date || new Date());
  const [selectedRegion, setSelectedRegion] = useState('asia.singapore');
  useEffect(() => {
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
        date={date}
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
  date: ReactPropTypes.date.isRequired,
};

export default Order;
