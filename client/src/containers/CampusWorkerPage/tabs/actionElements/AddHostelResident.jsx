import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

import { Hostel, Cheque, HostelResident, Student, Room, RoomType, Class, Privelege } from '../../../../db/db';

class AddHostelResident extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        // this.setState({  cheque:Cheque, resident: HostelResident });
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

    render() {
        console.log(this.state);
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
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default AddHostelResident;