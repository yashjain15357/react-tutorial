import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  return (
    <div className="mt-8 p-4 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">Select a Date</h2>
      <div className="flex justify-center">
        <Calendar 
          onChange={handleDateChange} 
          value={date} 
          className="border border-gray-300 rounded-lg shadow-md p-4" 
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
