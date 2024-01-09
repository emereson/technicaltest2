import React from 'react';
import './details.css';

const Details = ({ crud, selectDay, selectEvent, setCrud }) => {
  const mapMonthToEnglish = {
    En: 'Jan',
    Feb: 'Feb',
    Mar: 'Mar',
    Abr: 'Apr',
    May: 'May',
    Jun: 'Jun',
    Jul: 'Jul',
    Agto: 'Aug',
    Sep: 'Sep',
    Oct: 'Oct',
    Nov: 'Nov',
    Dic: 'Dec',
  };

  const formatDate = (id) => {
    if (id) {
      const [day, month, year] = id?.split('-');
      const englishMonth = mapMonthToEnglish[month];
      const formattedDate = `
        ${englishMonth}
       ${day}, ${year}`;
      const date = new Date(formattedDate);

      if (date.toString() === 'Invalid Date') {
        return 'Fecha inválida';
      }

      const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };
      return date.toLocaleDateString('es-ES', options);
    }
  };

  const formatDateWithoutYear = (id) => {
    if (id) {
      const [day, month, year] = id?.split('-');
      const englishMonth = mapMonthToEnglish[month];
      const formattedDate = `${englishMonth} ${day}, ${year}`;
      const date = new Date(formattedDate);

      if (date.toString() === 'Invalid Date') {
        return 'Fecha inválida';
      }

      const options = {
        day: 'numeric',
        month: 'long',
      };
      return date.toLocaleDateString('es-ES', options);
    }
  };

  return (
    <div
      className={`details__fixed ${
        crud === 'viewDetails' ? 'openDetails' : ''
      }`}
    >
      <div className="details__container">
        <section className="details__title">
          <i className="bx bx-restaurant"></i>
          <article>
            <h2>Cena Chef</h2>
            <p>Presencial</p>
          </article>
        </section>
        <section className="details__date">
          <i className="bx bxs-calendar"></i>
          <p>
            {formatDate(selectDay?.id)}, {selectEvent?.hour}:
            {selectEvent?.minute} {selectEvent?.extraHour}
          </p>
        </section>
        <section className="details__data">
          <article>
            <div className="detailsData__divOne">
              <i className="bx bx-restaurant"></i>
              <div className="detailsData__name">
                <h3>Carlos Perez</h3>
                <p>6 sibaritas</p>
              </div>
            </div>
            <div className="detailsData__divTwo">
              <ul>
                <li>$600</li>
                <li>
                  {selectEvent?.hour}:{selectEvent?.minute}{' '}
                  {selectEvent?.extraHour},{' '}
                  {formatDateWithoutYear(selectDay?.id)}
                </li>
                <li>{selectEvent?.numberPeople} personas</li>
                <li>Extra</li>
              </ul>
              <button className="detailsData__divTwo__buttonView">Ver</button>
              <button className="detailsData__divTwo__approved">
                Aprobado <span></span>
              </button>
            </div>
          </article>
        </section>

        <button className="details__close" onClick={() => setCrud('')}>
          cerrar
        </button>
      </div>
    </div>
  );
};

export default Details;
