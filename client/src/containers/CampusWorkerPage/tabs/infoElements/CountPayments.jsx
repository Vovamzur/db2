import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import { Hostel, Cheque, HostelResident, Student, Room, RoomType } from '../../../../db/db';

class CountPayments extends Component {
    constructor() {
        super();
        this.state = {
            resident: undefined
        }
    }

    componentDidMount() {
        this.setState({  cheque:Cheque, resident: HostelResident });
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
                            const student = Student.filter(item => item.id === res.id)[0];
                            const residentChecks = Cheque.filter(item => item.hostelresident_id === res.id);
                            const sums = residentChecks.map(item => item.sum);
                            const sum = sums.length === 0 ? 0 : this.sumArray(sums);
                            const roomTypeId = Room.filter(item => item.id === res.room_id)[0].roomtype_id;
                            const roomPrice = RoomType.filter(item => item.id === roomTypeId)[0].price;
                            const totalSum = roomPrice * 4;
                            return (
                                <Table.Row>
                                    <Table.Cell>{student.firstname} {student.lastname}</Table.Cell>
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