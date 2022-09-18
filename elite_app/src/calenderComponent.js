import {useState} from 'react';
import Calendar from 'react-calendar'; 
import './App.css';
import './calender.css';


const CalenderComponent = () => {
  const [date, setDate] = useState(new Date());

      
return (
  <div>
    <div className="calheader">
      <h1 className="header">Get a schedule date</h1>
    </div>

    <div className="calendar-container">
      <Calendar onChange={setDate} value={date} />
    </div>
  </div>
);

}
 
export default CalenderComponent;