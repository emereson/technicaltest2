import React, { useState } from 'react';
import './Calendar.css'; // Asegúrate de tener un archivo CSS para este componente
import RenderDays from './RenderDays';

const Calendar = ({ daysData, setDayData, selectDay, setSelectDay }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    'En',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Agto',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ];

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar__header">
        <div className="calendar__headerName">
          <i className="bx bxs-calendar"></i>
          <h2>Calendario</h2>
        </div>
        <div className="calendar__headerButtons">
          <button onClick={goToPreviousMonth}>&lt;</button>
          <h3>
            {currentDate.toLocaleString('default', { month: 'long' })}{' '}
            {currentDate.getFullYear()}
          </h3>
          <button onClick={goToNextMonth}>&gt;</button>
        </div>
      </div>
      <div className="days-of-week__container">
        <div className="days-of-week">
          <span>Lunes</span>
          <span>Martes</span>
          <span>Miércoles</span>
          <span>Jueves</span>
          <span>Viernes</span>
          <span>Sábado</span>
          <span>Domingo</span>
        </div>
        <div className="days">
          <RenderDays
            daysData={daysData}
            currentDate={currentDate}
            monthNames={monthNames}
            setSelectDay={setSelectDay}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
