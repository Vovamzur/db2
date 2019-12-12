import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

const inClasses = [
  { key: 1, text: 'IT-71', value: 'IT-71' },
  { key: 2, text: 'IT-72', value: 'IT-72' },
  { key: 3, text: 'IT-73', value: 'IT-73' },
  { key: 4, text: 'IT-74', value: 'IT-74' },
  { key: 5, text: 'IP-71', value: 'IP-71' },
  { key: 6, text: 'IP-72', value: 'IP-72' },
]

const schedules = [
  { key: 1, title: 'Основи права', teacher: 'Лісовиченко О.І.', auditorium: '201-18' },
  { key: 1, title: 'Основи радіотехніки', teacher: 'Рябцев Г.В.', auditorium: '203-18' },
  { key: 1, title: 'Бази даних', teacher: 'Корнієнко Н.С.', auditorium: '301-18' },
  { key: 2, title: 'Основи програмування', teacher: 'Мамедов В.О.', auditorium: '232-18' },
  { key: 2, title: 'Основи менеджменту', teacher: 'Корнага Я.І.', auditorium: '222-18' },
  { key: 2, title: 'Основи права', teacher: 'Рябцев Г.В.', auditorium: '223-18' },
  { key: 3, title: 'Бази даних', teacher: 'Заворикін А.П.', auditorium: '212-18' },
  { key: 3, title: 'Основи програмування', teacher: 'Корнага Я.І.', auditorium: '311-18' },
  { key: 3, title: 'Бази даних', teacher: 'Лісовиченко О.І.', auditorium: '131-18' },
  { key: 4, title: 'Основи менеджменту', teacher: 'Заворикін А.П.', auditorium: '454-18' },
  { key: 4, title: 'Українська мова', teacher: 'Мамедов В.О.', auditorium: '234-18' },
  { key: 4, title: 'Бази даних', teacher: 'Рябцев Г.В.', auditorium: '455-18' },
  { key: 5, title: 'Основи програмування', teacher: 'Корнага Я.І.', auditorium: '566-18' },
  { key: 5, title: 'Бази даних', teacher: 'Корнієнко Н.С.', auditorium: '456-18' },
  { key: 5, title: 'Основи менеджменту', teacher: 'Лісовиченко О.І.', auditorium: '123-18' },
  { key: 6, title: 'Українська мова', teacher: 'Мамедов В.О.', auditorium: '121-18' },
  { key: 6, title: 'Основи права', teacher: 'Заворикін А.П.', auditorium: '231-18' },
  { key: 6, title: 'Основи радіотехніки', teacher: 'Корнієнко Н.С.', auditorium: '211-18' }
]

const Schedule = () => {
  const [classes, setClasses] = useState(inClasses);
  const [currentClass, setCurrentClass] = useState({ key: 6, text: 'IP-72' });

  const getRandomSchedule = () => {
    function randomScheduleItem() {
      return schedules[Math.floor(Math.random() * schedules.length)]
    }

    return Array(10).fill({}).map(o => randomScheduleItem())
  }
  
  const renderSchedule = () => {
    const schedule = getRandomSchedule();

    return (
      <table class="ui celled structured table">
        <thead>
          <tr>
            <th rowSpan="2">Day of the week</th>
            <th rowSpan="2">Subject</th>
            <th rowSpan="2">Teacher</th>
            <th rowSpan="2">Auditorium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="2">Monday</td>
            <td>{schedule[0].title}</td>
            <td>{schedule[0].teacher}</td>
            <td>{schedule[0].auditorium}</td>
          </tr>
          <tr>
            <td>{schedule[1].title}</td>
            <td>{schedule[1].teacher}</td>
            <td>{schedule[1].auditorium}</td>
          </tr>
          <tr>
            <td rowSpan="2">Tuesday</td>
            <td>{schedule[2].title}</td>
            <td>{schedule[2].teacher}</td>
            <td>{schedule[2].auditorium}</td>
          </tr>
          <tr>
            <td>{schedule[3].title}</td>
            <td>{schedule[3].teacher}</td>
            <td>{schedule[3].auditorium}</td>
          </tr>
          <tr>
            <td rowSpan="2">Wednesday</td>
            <td>{schedule[4].title}</td>
            <td>{schedule[4].teacher}</td>
            <td>{schedule[4].auditorium}</td>
          </tr>
          <tr>
            <td>{schedule[5].title}</td>
            <td>{schedule[5].teacher}</td>
            <td>{schedule[5].auditorium}</td>
          </tr>
          <tr>
            <td rowSpan="2">Thursday</td>
            <td>{schedule[6].title}</td>
            <td>{schedule[6].teacher}</td>
            <td>{schedule[6].auditorium}</td>
          </tr>
          <tr>
            <td>{schedule[7].title}</td>
            <td>{schedule[7].teacher}</td>
            <td>{schedule[7].auditorium}</td>
          </tr>
          <tr>
            <td rowSpan="2">Friday</td>
            <td>{schedule[8].title}</td>
            <td>{schedule[8].teacher}</td>
            <td>{schedule[8].auditorium}</td>
          </tr>
          <tr>
            <td>{schedule[9].title}</td>
            <td>{schedule[9].teacher}</td>
            <td>{schedule[9].auditorium}</td>
          </tr>
        </tbody>
      </table>
    )
  }
  
  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <Dropdown
          placeholder='Select your class'
          selection
          options={classes}
          value={currentClass.value}
          onChange={(e, value) => setCurrentClass(value)}
        />
        <div style={{ "width": "50%" }}>
          {currentClass.value ? renderSchedule() : null}
        </div>
      </div>
    </div>
  )
}

export default Schedule;