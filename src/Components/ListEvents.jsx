import React from 'react';
import './listEvents.css';

const ListEvents = ({ selectDay, setCrud, setSelectEvent }) => {
  const formatDay = (day) => {
    if (day) {
      const [dayOfMonth, month] = day?.split('-');
      return `${dayOfMonth} ${month}`;
    }
  };

  return (
    <div className="listEvents__container">
      <section className="listEvents__title">
        <h3>Lista de eventos</h3>
        <p>
          <i className="bx bxs-calendar"></i>
          {formatDay(selectDay?.id)}
        </p>
      </section>
      <section className="listEvents__dataEvents">
        {selectDay?.Presencial?.map((dataPresencial, index) => (
          <article key={index}>
            {' '}
            <i className="bx bx-restaurant"></i>
            <div className="listEvents__dataOneEvent">
              <p className="dataOneEvent__hour">
                {dataPresencial.hour}:{dataPresencial.minute}
                {dataPresencial.extraHour}
              </p>
              <div className="dataOneEvent__peopleButton">
                <div className="dataOneEvent__people">
                  {dataPresencial.numberPeople}/10
                  <i className="bx bxs-user"></i>
                  <i
                    className="bx bxs-edit peopleEdit"
                    onClick={() => {
                      setSelectEvent(dataPresencial);
                      setCrud('updateEvent');
                    }}
                  ></i>
                </div>
                <button
                  onClick={() => {
                    setSelectEvent(dataPresencial);
                    setCrud('viewDetails');
                  }}
                >
                  Detalle
                </button>
              </div>
            </div>
          </article>
        ))}
        {selectDay?.Pickup?.map((dataPickup, index) => (
          <article key={index}>
            <i className="bx bxs-shopping-bag"></i>
            <div className="listEvents__dataOneEvent">
              <p className="dataOneEvent__hour">
                {dataPickup.hour}:{dataPickup.minute}
                {dataPickup.extraHour}
              </p>
              <div className="dataOneEvent__peopleButton">
                <div className="dataOneEvent__people">
                  {dataPickup.numberPeople}/10<i className="bx bxs-user"></i>
                  <i
                    className="bx bxs-edit peopleEdit"
                    onClick={() => {
                      setSelectEvent(dataPickup);
                      setCrud('updateEvent');
                    }}
                  ></i>
                </div>
                <button
                  onClick={() => {
                    setSelectEvent(dataPickup);
                    setCrud('viewDetails');
                  }}
                >
                  Detalle
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
      <button
        className="listEvents__addEvent"
        onClick={() => setCrud('addEvent')}
      >
        +Agregar evento
      </button>
    </div>
  );
};

export default ListEvents;
