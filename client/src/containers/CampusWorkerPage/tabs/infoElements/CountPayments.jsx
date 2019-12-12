import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import { chequeData, hostelResidentData, studentData, roomData, roomTypeData } from '../../../../db/database';

class CountPayments extends Component {
    constructor() {
        super();
        this.state = {
            resident: undefined
        }
    }

    componentDidMount() {
        this.setState({  cheque:chequeData, resident: hostelResidentData });
    }

    sumArray(arr) {
        const res = arr.reduce((acc, curr) => {
            return acc + curr;
        });
        return res;
    }

    render() {

        const { resident } = this.state;
        return (
            <div>
                <Table unstackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Hostel resident</Table.HeaderCell>
                            <Table.HeaderCell>General Sum</Table.HeaderCell>
                            <Table.HeaderCell>Payments amount</Table.HeaderCell>
                            <Table.HeaderCell>Current balance</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {resident && resident.map(res => {
                            const stud = studentData.filter(item => item.id === res.id)[0];
                            const residentChecks = chequeData.filter(item => item.hostelResidentId === res.id);
                            const sums = residentChecks.map(item => item.sum);
                            const sum = sums.length === 0 ? 0 : this.sumArray(sums);
                            const roomTypeId = roomData.filter(item => item.id === res.roomId)[0].roomTypeId;
                            const roomPrice = roomTypeData.filter(item => item.id === roomTypeId)[0].price;
                            const totalSum = roomPrice * 4;
                            return (
                                <Table.Row>
                                    <Table.Cell>{stud.firstname} {stud.lastname}</Table.Cell>
                                    <Table.Cell>{sum}</Table.Cell>
                                    <Table.Cell>{residentChecks.length}</Table.Cell>
                                    <Table.Cell>{sum - totalSum}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default CountPayments;