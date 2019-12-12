import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import { Hostel, Cheque, HostelResident, Student } from '../../../../db/db';

class ShowChecks extends Component {
    constructor() {
        super();
        this.state = {
            cheque: undefined,
        }
    }

    componentDidMount() {
        this.setState({  cheque:Cheque });
    }

    render() {

        const { cheque } = this.state;
        return (
            <div>
                <Table unstackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Payment date #</Table.HeaderCell>
                            <Table.HeaderCell>Sum</Table.HeaderCell>
                            <Table.HeaderCell>Start date</Table.HeaderCell>
                            <Table.HeaderCell>End date</Table.HeaderCell>
                            <Table.HeaderCell>Hostel resident</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {cheque && cheque.map(cheque => {
                            const resident_id = HostelResident.filter(item => item.id === cheque.hostelresident_id)[0].student_id;
                            const student = Student.filter(item => item.id === resident_id)[0];
                            return (
                                <Table.Row>
                                    <Table.Cell>{cheque.payment_date}</Table.Cell>
                                    <Table.Cell>{cheque.sum}</Table.Cell>
                                    <Table.Cell>{cheque.start_date}</Table.Cell>
                                    <Table.Cell>{cheque.end_date}</Table.Cell>
                                    <Table.Cell>{student.firstname} {student.lastname}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default ShowChecks;