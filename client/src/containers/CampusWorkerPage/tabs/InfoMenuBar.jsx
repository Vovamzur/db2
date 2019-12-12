import React from 'react';
import { Tab } from 'semantic-ui-react'

import HostelInfo from './infoElements/HostelInfo';
import HostelResidentInfo from './infoElements/HostelResidentInfo';
import ShowInventory from './infoElements/ShowInventory';
import ShowChecks from './infoElements/ShowChecks';
import CountPayments from './infoElements/CountPayments';
import AddHostelResident from './actionElements/AddHostelResident'

const panes = [
    { menuItem: 'Hostel info', render: () => <Tab.Pane><HostelInfo /></Tab.Pane> },
    { menuItem: 'Hostel residents info', render: () => <Tab.Pane><HostelResidentInfo /></Tab.Pane> },
    { menuItem: 'Inventories', render: () => <Tab.Pane><ShowInventory /></Tab.Pane> },
    { menuItem: 'Cheques', render: () => <Tab.Pane><ShowChecks /></Tab.Pane> },
    { menuItem: 'Payments', render: () => <Tab.Pane><CountPayments /></Tab.Pane> },
    { menuItem: 'Add hostel resident', render: () => <Tab.Pane><AddHostelResident /></Tab.Pane> },
]

export default () => <Tab panes={panes} />;
