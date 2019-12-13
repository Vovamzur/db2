import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

import { examData, disciplineData, controlTypeData, studentData, subjectTeachingData } from '../../../db/database';


const Marks = () => {
  const [query, setQuery] = useState('');

  const matches = (firstname, lastname) => {
    const queryParts = query.split(/ +/);
    if (query === "") {
      return true;
    } else {
      for (const part of queryParts) {
        if ((firstname + " " + lastname).includes(part)) {
          return true;
        }
      }
      return false;
    }
  }

  const renderMarks = () => {
    return (
      <table className="ui celled structured table">
        <thead>
          <tr>
            <th rowSpan="2">Student</th>
            <th rowSpan="2">Subject</th>
            <th rowSpan="2">Control type</th>
            <th rowSpan="2">Mark</th>
          </tr>
        </thead>
        <tbody>
          {studentData
            .filter(student => matches(student.firstname, student.lastname))
            .map(student => {
              const exam = examData.filter(item => item.studentId === student.id);
              for (const ex of exam) {
                const subjectTeaching = subjectTeachingData.filter(item => item.id === ex.subjectTeachingId)[0];
                const controlType = controlTypeData.filter(item => item.id === subjectTeaching.controlTypeId)[0];
                const discipline = disciplineData.filter(item => item.id === subjectTeaching.disciplineId)[0];
                return (
                  <div>
                    <tr key={student.id}>
                      <td>{student.firstname} {student.lastname}</td>
                      <td>{discipline.title}</td>
                      <td>{controlType.type}</td>
                      <td>{ex.mark}</td>
                    </tr>
                  </div>
                )
              }
            })}
        </tbody>
      </table>
    )
  }

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <Input type="text" onChange={e => setQuery(e.target.value)} placeholder="name" />
        <div style={{ marginTop: '20px' }}>
          {query ? renderMarks() : null}
        </div>
      </div>
    </div>
  )
}

export default Marks;
