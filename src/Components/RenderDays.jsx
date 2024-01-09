import React from 'react';
import './renderDays.css';
const RenderDays = ({ daysData, currentDate, monthNames, setSelectDay }) => {
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const startingDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const getDaysArray = () => {
    const daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }
    return daysArray;
  };

  const daysArray = getDaysArray();
  const firstDayOffset = startingDay === 0 ? 6 : startingDay - 1;
  const daysToShow = [...Array(firstDayOffset).fill(null), ...daysArray];

  return daysToShow.map((day, index) => {
    const oneDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const dataOneDay = {
      id: `${day}-${monthNames[oneDay.getMonth()]}-${oneDay.getFullYear()}`,
      number: day,
    };

    const clickSelectDay = () => {
      const selectedDay = daysData.find((datas) => datas.id === dataOneDay.id);
      setSelectDay(selectedDay || dataOneDay);
    };

    const existDataDay = daysData.find((datas) => datas.id === dataOneDay.id);

    return (
      <div
        key={index}
        className={`day  ${existDataDay ? 'existDataDay' : ''}`}
        onClick={() => {
          clickSelectDay();
        }}
      >
        <p className="numberDay">{dataOneDay.number}</p>
        {daysData?.map(
          (datas, index) =>
            datas.id === dataOneDay.id && (
              <article key={index} className="dayDatas__container">
                <div>
                  <p>{datas.Presencial.length}x</p>
                  <i className="bx bx-restaurant"></i>
                  {datas.Presencial.length > 0 && (
                    <span>
                      {datas.Presencial.reduce(
                        (total, data) => total + Number(data.numberPeople),
                        0
                      )}
                    </span>
                  )}
                </div>

                <div>
                  <p>{datas.Pickup.length}x</p>
                  <i className="bx bxs-shopping-bag"></i>
                  {datas.Pickup.length > 0 && (
                    <span>
                      {datas.Pickup.reduce(
                        (total, data) => total + Number(data.numberPeople),
                        0
                      )}
                    </span>
                  )}
                </div>
              </article>
            )
        )}
      </div>
    );
  });
};

export default RenderDays;
