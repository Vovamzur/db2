import React, { Component } from 'react';
import { Table} from 'semantic-ui-react'

import { hostelResidentData, studentData, groupData, hostelData, roomData, privelegeData } from '../../../../db/database';

class HostelResidentInfo extends Component {
    constructor() {
        super();
        this.state = {
            hostelResident: undefined,
        }
    }

    componentDidMount() {
        this.setState({  hostelResident:hostelResidentData });
    }

    render() {

        const { hostelResident } = this.state;
        return (
            <div>
                <Table unstackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Student firstname</Table.HeaderCell>
                            <Table.HeaderCell>Student lasname</Table.HeaderCell>
                            <Table.HeaderCell>Student class</Table.HeaderCell>
                            <Table.HeaderCell>Hostel #</Table.HeaderCell>
                            <Table.HeaderCell>Room #</Table.HeaderCell>
                            <Table.HeaderCell>Privelege %</Table.HeaderCell>
                            <Table.HeaderCell>Privelege type</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {hostelResident && hostelResident.map(resident => {
                            const firstname = studentData.filter(item => item.id === resident.studentId)[0].firstname;
                            const lastname = studentData.filter(item => item.id === resident.studentId)[0].lastname;
                            const class_id = studentData.filter(item => item.id === resident.studentId)[0].classId;
                            const class_title = groupData.filter(item => item.id === class_id)[0].title;
                            const hostel_id = roomData.filter(item => item.id === resident.roomId)[0].hostelId;
                            const hostel_no = hostelData.filter(item => item.id === hostel_id)[0].number;
                            const room_no = roomData.filter(item => item.id === resident.roomId)[0].number;
                            const priv = privelegeData.filter(item => item.id === resident.privelegeId)[0]
                            const privelege_per = (priv ? priv.discount : "null");
                            const privelege_type = (priv ? priv.name : "null");

                            return (
                                    <Table.Row>
                                        <Table.Cell>{firstname}</Table.Cell>
                                        <Table.Cell>{lastname}</Table.Cell>
                                        <Table.Cell>{class_title}</Table.Cell>
                                        <Table.Cell>{hostel_no}</Table.Cell>
                                        <Table.Cell>{room_no}</Table.Cell>
                                        <Table.Cell>{privelege_per}</Table.Cell>
                                        <Table.Cell>{privelege_type}</Table.Cell>
                                    </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default HostelResidentInfo;