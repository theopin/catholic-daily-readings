import React, { useState, useEffect } from "react";
import Reading from "../reading/Reading";
import "../../commons/Commons.css"; // Common/shared CSS
import Responsorial from "../responsorial/Responsorial";
import Theme from "../theme/Theme";
import fetchData from "./OrderFetch";
// import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Order() {
  const [data, setData] = useState(null);
  // const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const selectedDate = new Date()
    fetchData(selectedDate)
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  //}, [selectedDate]);
    }, []);

  if (!data) {
    return <div></div>;
  } else if (!data.Mass_R2) {
    return (
      <div className="container">
        <h2>Daily Mass Reading</h2>
        {/* <div className="datepicker">
          <ReactDatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </div> */}
        <Theme title={null} date={data.date} />
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
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Daily Mass Reading</h2>
      {/* <div className="datepicker">
        <ReactDatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
      </div> */}
      <Theme title={null} date={data.date} />
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
      <Reading
        title="Second Reading"
        verse={data.Mass_R2.source}
        summary={data.Mass_R2.heading}
        text={data.Mass_R2.text}
      />
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
    </div>
  );
}

export default Order;
