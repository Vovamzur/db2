import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

const marks = [
  { key: 1, sem: '1', subject: 'Основи права', controlType: 'залік', mark: 96 },
  { key: 2, sem: '1', subject: 'Основи радіотехніки', controlType: 'екзамен', mark: 98 },
  { key: 3, sem: '2', subject: 'Бази даних', controlType: 'залік', mark: 100 },
  { key: 4, sem: '2', subject: 'Основи програмування', controlType: 'екзамен', mark: 95 },
  { key: 5, sem: '3', subject: 'Основи менеджменту', controlType: 'залік', mark: 98 },
  { key: 6, sem: '3', subject: 'Українська мова', controlType: 'екзамен', mark: 99 },
]

const semesters = [
  { key: 1, text: '1 semester', value: '1 semester' },
  { key: 2, text: '2 semester', value: '2 semester' },
  { key: 3, text: '3 semester', value: '3 semester' },
]

const Marks = () => {
  const [currentSemester, setCurrentSemester] = useState({ key: 1, text: '1 semester', value: '1 semester' })

  const getAvarageMark = () => {
    const currentMarks = marks
      .filter(m => currentSemester.value ? currentSemester.value.charAt(0) === m.sem : m)
      .map(m => m.mark)
    const sum = currentMarks.reduce((acc, cur) => acc + cur, 0);
    return sum / currentMarks.length;
  }

  const renderMarks = () => {
    return (
      <table className="ui celled structured table">
        <thead>
          <tr>
            <th rowSpan="2">Subject</th>
            <th rowSpan="2">Control type</th>
            <th rowSpan="2">Mark</th>
          </tr>
        </thead>
        <tbody>
          {marks
            .filter(m => currentSemester.value && currentSemester.value.charAt(0) === m.sem)
            .map(({ key, sem, subject, controlType, mark }) => {
              return (
                <tr key={key}>
                  <td>{subject}</td>
                  <td>{controlType}</td>
                  <td>{mark}</td>
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
        <Dropdown
          placeholder='Select semester'
          selection
          options={semesters}
          value={currentSemester.value}
          onChange={(e, value) => setCurrentSemester(value)}
        />
        <div style={{ marginTop: '20px' }}>
          {currentSemester.value ? renderMarks() : null}
          {currentSemester.value
            ? <div>
              <span>Avarage mark: </span>
              <span>{getAvarageMark()}</span>
            </div>
            : null}
        </div>
      </div>
    </div>
  )
}

export default Marks;
