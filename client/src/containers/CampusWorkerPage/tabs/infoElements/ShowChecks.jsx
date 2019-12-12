import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import { chequeData, hostelResidentData, studentData } from '../../../../db/database';

class ShowChecks extends Component {
    constructor() {
        super();
        this.state = {
            cheque: undefined,
        }
    }

    componentDidMount() {
        this.setState({  cheque:chequeData });
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
                        {cheque && chequeData.map(cheque => {
                            const resident_id = hostelResidentData.filter(item => item.id === cheque.hostelResidentId)[0].studentId;
                            const stud = studentData.filter(item => item.id === resident_id)[0];
                            return (
                                <Table.Row>
                                    <Table.Cell>{cheque.paymentDate}</Table.Cell>
                                    <Table.Cell>{cheque.sum}</Table.Cell>
                                    <Table.Cell>{cheque.startDate}</Table.Cell>
                                    <Table.Cell>{cheque.endDate}</Table.Cell>
                                    <Table.Cell>{stud.firstname} {stud.lastname}</Table.Cell>
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