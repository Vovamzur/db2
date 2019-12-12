import React, { Component } from 'react';
import { Menu, Item } from 'semantic-ui-react'

import HostelInfo from './infoElements/HostelInfo';
import HostelResidentInfo from './infoElements/HostelResidentInfo';
import ShowInventory from './infoElements/ShowInventory';
import ShowChecks from './infoElements/ShowChecks';
import CountPayments from './infoElements/CountPayments';


class InfoMenuBar extends Component {
    constructor() {
        super();
        this.state = {
            activeItem: undefined
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
                            <Item.Header><h1>Info Menu</h1></Item.Header>
                        </Item.Content>
                    </Item>
                </Item.Group>
                <Menu>
                    <Menu.Item
                        name='hostelInfo'
                        active={activeItem === 'hostelInfo'}
                        onClick={this.onMenuClick}
                    >
                        <h2>Hostels Info</h2>
                    </Menu.Item>
                    <Menu.Item
                        name='hostelResidentInfo'
                        active={activeItem === 'hostelResidentInfo'}
                        onClick={this.onMenuClick}
                    >
                        <h2>Hostel Residents Info</h2>
                    </Menu.Item>
                    <Menu.Item
                        name='showInventory'
                        active={activeItem === 'showInventory'}
                        onClick={this.onMenuClick}
                    >
                        <h2>Show Inventory</h2>
                    </Menu.Item>
                    <Menu.Item
                        name='showChecks'
                        active={activeItem === 'showChecks'}
                        onClick={this.onMenuClick}
                    >
                        <h2>Show Checks</h2>
                    </Menu.Item>
                    <Menu.Item
                        name='countPayments'
                        active={activeItem === 'countPayments'}
                        onClick={this.onMenuClick}
                    >
                        <h2>Count Payments</h2>
                    </Menu.Item>
                </Menu>
                {activeItem === 'hostelInfo' ? <HostelInfo /> : null}
                {activeItem === 'hostelResidentInfo' ? <HostelResidentInfo /> : null}
                {activeItem === 'showInventory' ? <ShowInventory /> : null}
                {activeItem === 'showChecks' ? <ShowChecks /> : null}
                {activeItem === 'countPayments' ? <CountPayments /> : null}

            </div >
        )
    }
}

export default InfoMenuBar;