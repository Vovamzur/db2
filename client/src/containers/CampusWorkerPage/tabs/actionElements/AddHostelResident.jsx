import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react'

import { Hostel, Cheque, HostelResident, Student, Room, RoomType, Class, Privelege } from '../../../../db/db';

class AddHostelResident extends Component {
    constructor() {
        super();
        this.state = {
            error: undefined
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

    onSubmit = e => {
        const { firstname, lastname, group, privelege, hostel, room, abilities } = this.state;
        console.log(this.state);
        console.log(firstname);
        if (!firstname || !lastname || !group || ! privelege || !hostel || !room || !abilities) {
            this.setState({ error: 'empty fields' });
        } else if (firstname === "" || lastname === "" || abilities === "") {
            this.setState({ error: 'empty fields' });
        } else {
            this.setState({ error: undefined });
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