import React, { Component } from 'react';
import { Menu, Item } from 'semantic-ui-react'

import AddHostelResident from './actionElements/AddHostelResident';
import AddInventory from './actionElements/AddInventory';


class ActionMenuBar extends Component {
    constructor() {
        super();
        this.state = {
            activeItem: ''
        }
    }

    onMenuClick = (e, { name }) => {
        this.setState({ activeItem: name });
    }

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header><h1>Action Menu</h1></Item.Header>
                        </Item.Content>
                    </Item>
                </Item.Group>
                <Menu>
                    <Menu.Item
                        name='addHostelResident'
                        active={activeItem === 'addHostelResident'}
                        onClick={this.onMenuClick}
                    >
                        <h2>Add Hostel Resident</h2>
                    </Menu.Item>
                    <Menu.Item
                        name='addInventory'
                        active={activeItem === 'addInventory'}
                        onClick={this.onMenuClick}
                    >
                        <h2>Add Inventory</h2>
                    </Menu.Item>
                </Menu>
                {activeItem === 'addHostelResident' ? <AddHostelResident /> : null}
                {activeItem === 'addInventory' ? <AddInventory /> : null}
            </div >
        )
    }
}

export default ActionMenuBar;