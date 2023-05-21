import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function DatePickerContainer() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="App">
      <h1>Date Picker</h1>
      <div
        className="date-picker"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // padding : '10px'
        }}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          // minDate={new Date()}
          maxDate={new Date()}
          filterDate={(date) => date.getDay() != 6 && date.getDay() != 0}
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
        />
      </div>
    </div>
  );
}

export default DatePickerContainer;
