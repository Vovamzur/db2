import React from 'react';

import { 
  examData,
  subjectTeachingData,
  auditoriumData,
  disciplineData,
  cathedraData,
  academicData,
  groupData,
  controlTypeData,
  cathedraEmployeeData
} from './../../../db/database'

const schedule = examData.map(({ id, mark, studentId, subjectTeachingId, auditoriumId }) => {
  const { disciplineId, cathedraEmployeeId, classId, controlTypeId } = subjectTeachingData.find(({ id }) => id === subjectTeachingId);
  const { title: subjectName } = disciplineData.find(({ id }) => id === disciplineId);
  const { academicId, cathedraId } = cathedraEmployeeData.find(({ id }) => id === cathedraEmployeeId);
  const { title: groupName } = groupData.find(({ id }) => id === classId);
  const { type: examName } = controlTypeData.find(({ id }) => id === controlTypeId);
  const { firstname, lastname } = academicData.find(({ id }) => id === academicId);
  const { title: cathedra } = cathedraData.find(({ id }) => id === cathedraId);
  const { number: auditorium } = auditoriumData.find(({ id }) => id === auditoriumId);

  return { id, cathedra, subjectName, auditorium, groupName, examName, teacher: firstname + ' ' +lastname }
})

const SessionSchedule = () => {
  const renderSchdule = () => {
    return (
      <table className="ui celled structured table">
				<thead>
					<tr>
						<th rowSpan="2">Cathedra</th>
						<th rowSpan="2">Subject</th>
						<th rowSpan="2">Auditorium</th>
						<th rowSpan="2">Group</th>
            <th rowSpan="2">Type</th>
            <th rowSpan="2">Teacher</th>
					</tr>
				</thead>
				<tbody>
					{schedule.map(({ id, cathedra, subjectName, auditorium, groupName, examName, teacher }) => {
						return (
							<tr key={Math.random() + id}>
								<td>{cathedra}</td>
								<td>{subjectName}</td>
								<td>{auditorium}</td>
								<td>{groupName}</td>
                <td>{examName}</td>
                <td>{teacher}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
    )
  }
  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      {renderSchdule()}
    </div>
  )
}

export default SessionSchedule;
