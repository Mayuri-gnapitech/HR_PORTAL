import React, { useState, useEffect } from 'react';
 
const TimesheetApp = () => {
  const [selectedWeek, setSelectedWeek] = useState('');
  const [weekOptions, setWeekOptions] = useState([]);
 
  useEffect(() => {
    // Function to generate week options dynamically based on the current date
    const generateWeekOptions = () => {
      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - (today.getDay() + 1) % 7); // Set to the first day of the week (Saturday)
 
      const options = [];
 
      for (let i = 0; i < 7; i++) {
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // Set to the last day of the week (Friday)
       
        const weekRange = `${startOfWeek.toISOString().split('T')[0]} to ${endOfWeek.toISOString().split('T')[0]}`;
        options.push(weekRange);
 
        // Move to the next week
        startOfWeek.setDate(startOfWeek.getDate() - 7);
      }
 
      // Reverse the order to display the most recent week first
      return options.reverse();
    };
 
    const options = generateWeekOptions();
    setWeekOptions(options);
    setSelectedWeek(options[0]); // Set the default selected week
  }, []); // Run only once on component mount
 
  const handleWeekChange = (event) => {
    const selectedWeekValue = event.target.value;
    setSelectedWeek(selectedWeekValue);
    // Handle other actions related to timesheet entries here
  };
 
  return (
    <div className="App">
      {/* <h1>Timesheet Calendar</h1> */}
      <label htmlFor="weekSelector">Select Week:</label>
      <select
        id="weekSelector"
        value={selectedWeek}
        onChange={handleWeekChange}
      >
        {weekOptions.map((week, index) => (
          <option key={index} value={week}>
            {week}
          </option>
        ))}
      </select>
    </div>
  );
};
 
export default TimesheetApp;