import React from 'react';
import { Tab } from 'semantic-ui-react';

import Schedule from './tabs/Schedule';
import Teachers from './tabs/Teachers';
import Marks from './tabs/Marks'

const panes = [
  { menuItem: 'Schedule', render: () => <Tab.Pane><Schedule /></Tab.Pane> },
  { menuItem: 'Teachers', render: () => <Tab.Pane><Teachers /></Tab.Pane> },
  { menuItem: 'Marks', render: () => <Tab.Pane><Marks /></Tab.Pane> }
]
const StudentPage = () => {
  return (
    <div>
      <Tab panes={panes} />
    </div>
  )
}

export default StudentPage;
