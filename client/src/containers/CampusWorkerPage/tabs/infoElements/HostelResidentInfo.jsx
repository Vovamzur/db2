import React, { Component } from 'react';
import { Image, Item, Grid, Menu , Table} from 'semantic-ui-react'

import { HostelResident, Student, Class, Hostel, Room, Privelege } from '../../../../db/db';

class HostelResidentInfo extends Component {
    constructor() {
        super();
        this.state = {
            hostelResident: undefined,
        }
    }

    componentDidMount() {
        this.setState({  hostelResident:HostelResident });
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
                            const firstname = Student.filter(item => item.id === resident.student_id)[0].firstname;
                            const lastname = Student.filter(item => item.id === resident.student_id)[0].lastname;
                            const class_id = Student.filter(item => item.id === resident.student_id)[0].class_id;
                            const class_title = Class.filter(item => item.id === class_id)[0].title;
                            const hostel_id = Room.filter(item => item.id === resident.room_id)[0].hostel_id;
                            const hostel_no = Hostel.filter(item => item.id === hostel_id)[0].number;
                            const room_no = Room.filter(item => item.id === resident.room_id)[0].number;
                            const privelege = Privelege.filter(item => item.id === resident.privelege_id)[0]
                            const privelege_per = (privelege ? privelege.discount : "null");
                            const privelege_type = (privelege ? privelege.name : "null");

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