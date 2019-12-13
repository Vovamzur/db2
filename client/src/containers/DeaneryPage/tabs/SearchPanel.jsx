import React, { Component } from 'react';
import { Table, Input, Dropdown } from 'semantic-ui-react'

import {
  academicData,
  studentData,
  groupData,
  scientificProposalData,
  specialtyData,
  cathedraData,
  hostelData,
  hostelResidentData,
  roomData, 
  cathedraEmployeeData,
  departmentData
} from '../../../db/database';

class SearchPanel extends Component {
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

    const renderStudentTable = () => {
      return (
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Firstname</Table.HeaderCell>
              <Table.HeaderCell>Lastname</Table.HeaderCell>
              <Table.HeaderCell>Class</Table.HeaderCell>
              <Table.HeaderCell>Cathedra</Table.HeaderCell>
              <Table.HeaderCell>Specialty</Table.HeaderCell>
              <Table.HeaderCell>Hostel</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {studentData.filter(student => this.matches(student.firstname, student.lastname)).map(student => {
              const group = groupData.filter(item => item.id === student.classId)[0];
              const scientificProposal = scientificProposalData.filter(item => item.id === group.scientificProposalId)[0];
              const specialty = specialtyData.filter(item => item.id === scientificProposal.specialtyId)[0];
              const cathedra = cathedraData.filter(item => item.id === scientificProposal.cathedraId)[0];
              const hostelResident = hostelResidentData.filter(item => item.studentId === student.id);
              const room = hostelResident.length === 0 ? null : roomData.filter(item => item.id === hostelResident[0].roomId);
              const hostel = !room ? room : hostelData.filter(item => item.id === room[0].hostelId)[0].number;
              return (
                <Table.Row>
                  <Table.Cell>{student.firstname}</Table.Cell>
                  <Table.Cell>{student.lastname}</Table.Cell>
                  <Table.Cell>{group.title}</Table.Cell>
                  <Table.Cell>{cathedra.title}</Table.Cell>
                  <Table.Cell>{specialty.title}</Table.Cell>
                  <Table.Cell>{hostel}</Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      )
    }

    return (
      <div>
        <Input type="text" onChange={e => this.setState({ query: e.target.value })} placeholder="academic or student name" />
        <Dropdown
          placeholder="student/academic"
          selection
          options={[
            {key:0, text:"student", value:"student"},
            {key:1, text:"academic", value:"academic"},
          ]}
          onChange={(e, value) => this.setState({ type: value })}
        />
        {renderStudentTable()}
        {renderAcademicTable()}
      </div>
    )
  }
}

export default SearchPanel;