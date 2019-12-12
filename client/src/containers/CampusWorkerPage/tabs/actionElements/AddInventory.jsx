import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

import { inventoryData } from '../../../../db/database';

class AddInventory extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            count: ''
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
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
        const { name, count } = this.state;
        if (name === "" || count === "") {
            alert('empty fields');
        } else {
            const duplicate = inventoryData.filter(item => item.name === name);
            const re = /\D+/;

            if (duplicate.length > 0) {
                alert('such inventory already exists');
            } else if (re.exec(count)) {
                alert('count must be a number');
            } else {
                const id = this.getId(inventoryData);
                inventoryData.push(new Object({
                    id: id,
                    name: name,
                    count: count
                }))
            }
            console.log(inventoryData);
        }
    }

    render() {

        return (
            <div>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            id='name'
                            placeholder='name'
                            value={this.state.firstname}
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            id='count'
                            placeholder='count'
                            value={this.state.lastname}
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

export default AddInventory;