import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import Reading from '../reading/Reading';
import Responsorial from '../responsorial/Responsorial';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Options from '../options/Options';

import fetchData from './OrderFetch';

function Order(props) {
  const {
    isSundayMode,
  } = props;

  const [data, setData] = useState(null);

  const selectedRegion = useSelector((state) => state.region.value);
  const selectedDate = useSelector((state) => state.pickedDate.value);

  useEffect(() => {
    fetchData(selectedRegion, selectedDate)
      .then((response) => {
        setData(response);
      });
  }, [selectedRegion, selectedDate]);

  if (!data) {
    return <div />;
  }

  return (
    <div className="container">
      <br className="d-print-none" />
      <Options
        isSundayMode={isSundayMode}
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
        verse={data.Mass_Ps.source ? data.Mass_Ps.source : ''}
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
        verse={data.Mass_GA.source ? data.Mass_GA.source : ''}
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
  isSundayMode: PropTypes.bool.isRequired,
};

export default Order;
