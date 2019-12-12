import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import { Inventory } from '../../../../db/db';

class ShowInventory extends Component {
    constructor() {
        super();
        this.state = {
            inventory: undefined,
        }
    }

    componentDidMount() {
        this.setState({  inventory:Inventory });
    }

    render() {

        const { inventory } = this.state;
        return (
            <div>
                <Table unstackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Count</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {inventory && inventory.map(item => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>{item.count}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default ShowInventory;