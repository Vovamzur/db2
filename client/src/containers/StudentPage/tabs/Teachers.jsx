import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const teachers = [
  { key: 1, fullFIO: 'Лісовиченко О.І.', subject: 'Основи права\nОснови радіотехніки', position: 'страший викладач' },
  { key: 2, fullFIO: 'Рябцев Г.В.', subject: 'Українська мова\nОснови радіотехніки', position: 'аспірант' },
  { key: 3, fullFIO: 'Заворикін А.П.', subject: 'Основи менеджменту\nБази даних', position: 'доцент' },
  { key: 4, fullFIO: 'Корнага Я.І.', subject: 'Основи права\nОснови радіотехніки', position: 'страший викладач' },
  { key: 5, fullFIO: 'Корнієнко Н.С.', subject: 'Основи права\nОснови програмування', position: 'страший викладач' },
  { key: 6, fullFIO: 'Мамедов В.О.', subject: 'Бази даних\nОснови радіотехніки', position: 'доцент' },
]
const Teachers = () => {
  const [filter, setFilter] = useState('')

  const renderTable = () => {
    return (
      <table className="ui celled structured table">
        <thead>
          <tr>
            <th rowSpan="2">Surname and initials</th>
            <th rowSpan="2">Subjectd</th>
            <th rowSpan="2">Position</th>
          </tr>
        </thead>
        <tbody>
          {teachers
            .filter(t => filter !== '' ? t.fullFIO.includes(filter) : true)
            .map(({ key, fullFIO, subject, position }) => {
              return (
                <tr key={key}>
                  <td>{fullFIO}</td>
                  <td>{subject}</td>
                  <td>{position}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    )
  }

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
      <Input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Teacher name filter..."/>
        {renderTable()}
      </div>
    </div>
  )
}

export default Teachers;

