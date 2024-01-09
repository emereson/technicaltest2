import { useState } from 'react';
import './App.css';
import Calendar from './Components/Calendar';
import dataCalendar from './json/dataCalendar.json';
import ListEvents from './Components/ListEvents';
import AddEvent from './Components/AddEvent';
import Details from './Components/Details';
import UpdateEvent from './Components/UpdateEvent';

function App() {
  const [daysData, setDayData] = useState(dataCalendar.calendarData);
  const [selectDay, setSelectDay] = useState();
  const [selectEvent, setSelectEvent] = useState();
  const [crud, setCrud] = useState('');

  return (
    <div className="app__contaier">
      <h1>Prueba Tecnica</h1>
      <div className="pageCalendar__container">
        <Calendar
          daysData={daysData}
          setDayData={setDayData}
          selectDay={selectDay}
          setSelectDay={setSelectDay}
        />

        <ListEvents
          selectDay={selectDay}
          setCrud={setCrud}
          setSelectEvent={setSelectEvent}
        />
        <AddEvent
          daysData={daysData}
          setDayData={setDayData}
          selectDay={selectDay}
          setSelectDay={setSelectDay}
          crud={crud}
          setCrud={setCrud}
        />
        <UpdateEvent
          daysData={daysData}
          selectEvent={selectEvent}
          setDayData={setDayData}
          selectDay={selectDay}
          setSelectDay={setSelectDay}
          crud={crud}
          setCrud={setCrud}
        />
        <Details
          crud={crud}
          selectEvent={selectEvent}
          setCrud={setCrud}
          selectDay={selectDay}
        />
      </div>
    </div>
  );
}

export default App;
