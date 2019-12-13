// import React, { useState } from 'react';
// import { Input } from 'semantic-ui-react';

// const teachers = [
//   { key: 1, fullFIO: 'Лісовиченко О.І.', subject: 'Основи права\nОснови радіотехніки', position: 'страший викладач' },
//   { key: 2, fullFIO: 'Рябцев Г.В.', subject: 'Українська мова\nОснови радіотехніки', position: 'аспірант' },
//   { key: 3, fullFIO: 'Заворикін А.П.', subject: 'Основи менеджменту\nБази даних', position: 'доцент' },
//   { key: 4, fullFIO: 'Корнага Я.І.', subject: 'Основи права\nОснови радіотехніки', position: 'страший викладач' },
//   { key: 5, fullFIO: 'Корнієнко Н.С.', subject: 'Основи права\nОснови програмування', position: 'страший викладач' },
//   { key: 6, fullFIO: 'Мамедов В.О.', subject: 'Бази даних\nОснови радіотехніки', position: 'доцент' },
// ]
// const Teachers = () => {
//   const [filter, setFilter] = useState('')

//   const renderTable = () => {
//     return (
//       <table className="ui celled structured table">
//         <thead>
//           <tr>
//             <th rowSpan="2">Surname and initials</th>
//             <th rowSpan="2">Subjectd</th>
//             <th rowSpan="2">Position</th>
//           </tr>
//         </thead>
//         <tbody>
//           {teachers
//             .filter(t => filter !== '' ? t.fullFIO.includes(filter) : true)
//             .map(({ key, fullFIO, subject, position }) => {
//               return (
//                 <tr key={key}>
//                   <td>{fullFIO}</td>
//                   <td>{subject}</td>
//                   <td>{position}</td>
//                 </tr>
//               )
//             })}
//         </tbody>
//       </table>
//     )
//   }

//   return (
//     <div className="ui middle aligned center aligned grid">
//       <div className="column">
//       <Input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Teacher name filter..."/>
//         {renderTable()}
//       </div>
//     </div>
//   )
// }

// export default Teachers;


import React, { Component } from 'react';
import { Table, Input, Dropdown } from 'semantic-ui-react'

import {
  academicData,
  groupData,
  cathedraData,
  cathedraEmployeeData,
  departmentData
} from '../../../db/database';

class Teachers extends Component {
  constructor() {
    super();
    this.state = {
      type: '',
      query: ''
    }
  }

  matches = (firstname, lastname) => {
    const { query } = this.state;
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

  render() {

    const renderAcademicTable = () => {
      return (
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Firstname</Table.HeaderCell>
              <Table.HeaderCell>Lastname</Table.HeaderCell>
              <Table.HeaderCell>Cathedra</Table.HeaderCell>
              <Table.HeaderCell>Group curator</Table.HeaderCell>
              <Table.HeaderCell>Faculty head</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {academicData.filter(academic => this.matches(academic.firstname, academic.lastname)).map(academic => {
              const cathedraEmployee = cathedraEmployeeData.filter(item => item.academicId === academic.id)[0];
              const cathedra = cathedraData.filter(item => item.id === cathedraEmployee.cathedraId)[0];
              const groups = groupData.filter(item => item.curatorId === academic.id);
              const groupCurator = groups.length === 0 ? null : groups[0].title;
              const faculties = departmentData.filter(item => item.headId === academic.id);
              const facultyHead = faculties.length === 0 ? null : faculties[0].title;
              return (
                <Table.Row>
                  <Table.Cell>{academic.firstname}</Table.Cell>
                  <Table.Cell>{academic.lastname}</Table.Cell>
                  <Table.Cell>{cathedra.title}</Table.Cell>
                  <Table.Cell>{groupCurator}</Table.Cell>
                  <Table.Cell>{facultyHead}</Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      )
    }

    return (
      <div>
        <Input type="text" onChange={e => this.setState({ query: e.target.value })} placeholder="academic name" />
        {renderAcademicTable()}
      </div>
    )
  }
}

export default Teachers;