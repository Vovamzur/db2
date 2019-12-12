import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react'

import { Hostel, Cheque, HostelResident, Student, Room, RoomType, Class, Privelege } from '../../../../db/db';

class AddHostelResident extends Component {
    constructor() {
        super();
        this.state = {
            firstname: 'Поліна',
            lastname: 'Сергієнко',
            group: '',
            privelege: null,
            hostel: '',
            room: '',
            abilities: null
        }
    }

    onChange = e => {
        console.log(e);
        this.setState({ [e.target.id]: e.target.value });
    }

    onGroupChange = (e, { value }) => {
        console.log(value);
        this.setState({ group: value });
    }

    onPrivelegeChange = (e, { value }) => {
        console.log(value);
        this.setState({ privelege: value });
    }

    onHostelChange = (e, { value }) => {
        console.log(value);
        this.setState({ hostel: value });
    }

    onRoomChange = (e, { value }) => {
        console.log(value);
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
            const privelegeId = Privelege.filter(item => item.id === privelege)[0].id;
            const selectedRoom = Room.filter(item => item.id === room)[0]
            const roomId = selectedRoom.id;
            const roomCapacity = selectedRoom.capacity;
            const roomResidentsNumber = HostelResident.filter(item => item.room_id === roomId).length;
            const student = Student.filter(item => item.firstname === firstname && item.lastname === lastname && item.class_id === group);
            if (student.length === 0) {
                alert('no student with such parameters');
            } else if (HostelResident.filter(item => item.student_id === student[0].id)) {
                alert('this student already lives in a hostel');
            } else if (roomResidentsNumber >= roomCapacity) {
                alert('room is full');
            } else {
                const id = this.getId(HostelResident);
                HostelResident.push(new Object({
                    id: id,
                    abilities: abilities,
                    student_id: student[0].id,
                    room_id: roomId,
                    privelege_id: privelegeId
                }))
            }
            console.log(HostelResident);
        }
    }

    render() {
        const groups = Class.map(item => new Object({
            key: item.title,
            text: item.title,
            value: item.id
        }));

        const priveleges = Privelege.map(item => new Object({
            key: item.name,
            text: item.name,
            value: item.id
        }));

        const hostels = Hostel.map(item => new Object({
            key: item.number,
            text: item.number,
            value: item.id
        }));

        const hostelRooms = Room.filter(item => item.hostel_id === this.state.hostel)
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
                            value={this.state.firstname}
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            id='lastname'
                            placeholder='student lastname'
                            value={this.state.lastname}
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
                        <Label style={this.state.error ? {} : {display: 'none'}}>
                            <h1 style={{color:'red'}}>{this.state.error}</h1>
                        </Label>
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