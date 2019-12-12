import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

import { hostelData, hostelResidentData, studentData, roomData, groupData, privelegeData } from '../../../../db/database';

class AddHostelResident extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            group: '',
            privelege: null,
            hostel: '',
            room: '',
            abilities: null
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onGroupChange = (e, { value }) => {
        this.setState({ group: value });
    }

    onPrivelegeChange = (e, { value }) => {
        this.setState({ privelege: value });
    }

    onHostelChange = (e, { value }) => {
        this.setState({ hostel: value });
    }

    onRoomChange = (e, { value }) => {
        this.setState({ room: value });
    }

    getId = (arr) => {
        const allId = arr.map(item => item.id);
        for (let i = 0; i < allId.length + 1; i++) {
            if (!allId.includes(i)) {
                return i;
            }
        }
        return null;
    }

    onSubmit = e => {
        const { firstname, lastname, group, privelege, hostel, room, abilities } = this.state;
        if (firstname === "" || lastname === "" || lastname === "" || group === "" || hostel === "" || room === "") {
            alert('empty fields');
        } else {
            const privelegeId = !privelege ? privelege : privelegeData.filter(item => item.id === privelege)[0].id;
            const selectedRoom = roomData.filter(item => item.id === room)[0]
            const roomId = selectedRoom.id;
            const roomCapacity = selectedRoom.capacity;
            const roomResidentsNumber = hostelResidentData.filter(item => item.roomId === roomId).length;
            const student = studentData.filter(item => item.firstname === firstname && item.lastname === lastname && item.classId === group);
            if (student.length === 0) {
                alert('no student with such parameters');
            } else if (hostelResidentData.filter(item => item.studentId === student[0].id).length > 0) {
                alert('this student already lives in a hostel');
            } else if (roomResidentsNumber >= roomCapacity) {
                alert('room is full');
            } else {
                const id = this.getId(hostelResidentData);
                hostelResidentData.push(new Object({
                    id: id,
                    abilities: abilities,
                    studentId: student[0].id,
                    roomId: roomId,
                    privelegeId: privelegeId
                }))
            }
        }
    }

    render() {
        const groups = groupData.map(item => new Object({
            key: item.title,
            text: item.title,
            value: item.id
        }));

        const priveleges = privelegeData.map(item => new Object({
            key: item.name,
            text: item.name,
            value: item.id
        }));

        const hostels = hostelData.map(item => new Object({
            key: item.number,
            text: item.number,
            value: item.id
        }));

        const hostelRooms = roomData.filter(item => item.hostelId === this.state.hostel)
        const rooms = hostelRooms.map(item => new Object({
            key: item.number,
            text: item.number,
            value: item.id
        }))

        return (
            <div>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            id='firstname'
                            placeholder='student firstname'
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            id='lastname'
                            placeholder='student lastname'
                            onChange={this.onChange}
                        />
                        <Form.Select
                            fluid
                            id='group'
                            options={groups}
                            placeholder='group'
                            onChange={this.onGroupChange}
                        />
                        <Form.Select
                            fluid
                            id='privelege'
                            options={priveleges}
                            placeholder='privelege'
                            onChange={this.onPrivelegeChange}
                        />
                        <Form.Select
                            fluid
                            id='hostel'
                            options={hostels}
                            placeholder='hostel'
                            onChange={this.onHostelChange}
                        />
                        <Form.Select
                            fluid
                            id='room'
                            options={rooms}
                            placeholder='room'
                            onChange={this.onRoomChange}
                        />
                        <Form.TextArea
                            id='abilities'
                            placeholder='new hostel resident abilities'
                            onChange={this.onChange}
                        />
                        <Form.Button onClick={this.onSubmit}>
                            Submit
                        </Form.Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default AddHostelResident;