import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './addEvent.css';

const UpdateEvent = ({ daysData, selectDay, crud, setCrud, selectEvent }) => {
  const [counter, setCounter] = useState();
  const [dataCreate, setDataCreate] = useState({
    id: '',
    mode: '',
    numberPeople: '',
    hour: '',
    minute: '',
    extraHour: '',
  });

  useEffect(() => {
    setDataCreate({
      id: selectEvent?.id,
      mode: selectEvent?.mode,
      numberPeople: Number(counter),
      hour: selectEvent?.hour,
      minute: selectEvent?.minute,
      extraHour: selectEvent?.extraHour,
    });
    setCounter(Number(selectEvent?.numberPeople));
  }, [selectEvent]);

  useEffect(() => {
    setDataCreate({
      ...dataCreate,
      numberPeople: counter,
    });
  }, [counter]);

  const formatDay = (day) => {
    if (day) {
      const [dayOfMonth, month] = day?.split('-');
      return `${dayOfMonth} ${month}`;
    }
  };

  const handleHourChange = (e) => {
    let value = e.target.value;

    value = isNaN(value) ? 0 : parseInt(value, 10);

    value = Math.max(0, Math.min(value, 12));

    value = value.toString().padStart(2, '0');

    setDataCreate({
      ...dataCreate,
      hour: value,
    });
  };

  const handleMinuteChange = (e) => {
    let value = e.target.value;

    value = isNaN(value) ? 0 : parseInt(value, 10);

    value = Math.max(0, Math.min(value, 59));

    value = value.toString().padStart(2, '0');

    setDataCreate({
      ...dataCreate,
      minute: value,
    });
  };

  const updatedCalendarData = () => {
    return {
      daysData: daysData.map((entry) => {
        // Verifica si el id existe en la entrada actual
        if (entry.Presencial.find((event) => event.id === dataCreate.id)) {
          // Actualiza los datos del evento específico
          entry.Presencial = entry.Presencial.map((event) =>
            event.id === dataCreate.id ? { ...event, ...dataCreate } : event
          );
        }

        setCrud('');
        return entry;
      }),
    };
  };

  return (
    <div
      className={`addEvent__fixed ${
        crud === 'updateEvent' ? 'openAddEvent' : ''
      }`}
    >
      <div className="addEvent__container">
        <section className="addEvent__title">
          <h3>Editar Evento</h3>
          <p>
            <i className="bx bxs-calendar"></i>
            {formatDay(selectDay?.id)}
          </p>
        </section>
        <section className="addEvent__chef">
          <div className="addEvent__cardChef">
            <article className="cardChef__iconName">
              <h4 className="cardChef__iconNameH4">
                <i className="bx bxs-shopping-bag"></i>
                Cena Chef
              </h4>
              <p>
                <i className="bx bx-minus"></i>
              </p>
            </article>
            <article className="cardChef__Buttons">
              <p
                style={
                  dataCreate.mode === 'Presencial'
                    ? { backgroundColor: 'rgb(68, 37, 83)' }
                    : null
                }
                onClick={() =>
                  setDataCreate({ ...dataCreate, mode: 'Presencial' })
                }
              >
                <i className="bx bx-restaurant"></i>
                Presencial
              </p>
              <p
                style={
                  dataCreate.mode === 'Pickup'
                    ? { backgroundColor: 'rgb(68, 37, 83)' }
                    : null
                }
                onClick={() => setDataCreate({ ...dataCreate, mode: 'Pickup' })}
              >
                <i className="bx bxs-shopping-bag"></i>
                Pickup{' '}
              </p>
            </article>
          </div>
          <article className="addEvent__counterPeoples">
            <p>N° de personas</p>
            <button
              className="counterPeoples__buttonMinus"
              onClick={() => setCounter(counter > 1 ? counter - 1 : 1)}
            >
              <i className="bx bx-minus"></i>
            </button>
            <span>{counter}</span>
            <button
              className="counterPeoples__buttonPlus"
              onClick={() => setCounter(counter + 1)}
            >
              <i className="bx bx-plus"></i>
            </button>
          </article>
        </section>
        <section className="addEvent__time">
          <div className="time__divInputLabel">
            <input
              type="text"
              onChange={handleHourChange}
              value={dataCreate.hour || '00'}
            />
            <label htmlFor="hour">Hora</label>
          </div>
          <p className="time__twoPoints">:</p>
          <div className="time__divInputLabel">
            <input
              type="text"
              onChange={handleMinuteChange}
              value={dataCreate.minute || '00'}
            />
            <label htmlFor="minute">Minutos</label>
          </div>
          <div className="addEvent__buttons">
            <p
              style={
                dataCreate.extraHour === 'am'
                  ? { backgroundColor: 'orange', color: 'black' }
                  : null
              }
              onClick={() => setDataCreate({ ...dataCreate, extraHour: 'am' })}
            >
              AM
            </p>
            <p
              style={
                dataCreate.extraHour === 'pm'
                  ? { backgroundColor: 'orange', color: 'black' }
                  : null
              }
              onClick={() => setDataCreate({ ...dataCreate, extraHour: 'pm' })}
            >
              PM
            </p>
          </div>
        </section>
        <section className="addEvent__saveCancel">
          <button
            onClick={() => {
              setCrud('');
            }}
          >
            Descartar Cambios
          </button>
          <button
            className="saveCancel__buttonSave"
            onClick={() => updatedCalendarData()}
          >
            Guardar
          </button>
        </section>
      </div>
    </div>
  );
};

export default UpdateEvent;
