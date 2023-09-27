import React, { useState, useEffect } from "react";

import Reading from "../reading/Reading";
import Responsorial from "../responsorial/Responsorial";
import Theme from "../theme/Theme";
import Footer from "../footer/Footer";
import DatePicker from "../datePicker/DatePicker";

import "../../commons/Commons.css";

import fetchData from "./OrderFetch";

function Order(props) {
  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(props.date || new Date());
  console.log(props);

  useEffect(() => {
    fetchData(selectedDate)
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedDate]);

  if (!data) {
    return <div></div>;
  }

  return (
    <div className="container">
      <h2>Daily Mass Reading</h2>

      <Theme title={data.day} date={data.date} />
      { props.date && (
        <DatePicker selected={selectedDate} setSelectedDate={setSelectedDate} />
      )}
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
      { data.Mass_R2 && (
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

export default Order;
