import React from 'react';

import {
  lessonData,
  subjectTeachingData,
  auditoriumData,
  disciplineData,
  cathedraEmployeeData,
  groupData,
  academicData
} from './../../../db/database'

const schedule = lessonData.map(({ id, subjectTeachingId, day, time, auditoriumId }) => {
  const { disciplineId, cathedraEmployeeId, classId } = subjectTeachingData.find(({ id }) => id === subjectTeachingId);
  const { number: auditorium } = auditoriumData.find(({ id }) => id === auditoriumId);
  const { title: subjectName } = disciplineData.find(({ id }) => id === disciplineId);
  const { academicId } = cathedraEmployeeData.find(({ id }) => id === cathedraEmployeeId);
  const { title: groupName } = groupData.find(({ id }) => id === classId);
  const { firstname, lastname } = academicData.find(({ id }) => id === academicId);

  return { id, subjectName, auditorium, groupName, teacher: firstname + ' ' + lastname, day, time }
})
const LessonSchedule = () => {
  const renderSchedule = () => {
    return (
      <table className="ui celled structured table">
				<thead>
					<tr>
						<th rowSpan="2">Subject</th>
						<th rowSpan="2">Auditorium</th>
						<th rowSpan="2">Group</th>
            <th rowSpan="2">Teacher</th>
            <th rowSpan="2">Date</th>
					</tr>
				</thead>
				<tbody>
					{schedule.map(({ id, subjectName, auditorium, groupName, teacher, day, time }) => {
						return (
							<tr key={Math.random() + id}>
								<td>{subjectName}</td>
								<td>{auditorium}</td>
								<td>{groupName}</td>
                <td>{teacher}</td>
                <td>{time + ' ' + day}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
    )
  }
  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      {renderSchedule()}
    </div>
  )
}

export default LessonSchedule;