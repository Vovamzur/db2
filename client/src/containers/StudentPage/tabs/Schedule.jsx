import React, { useState, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';

import * as studentService from './../../../services/students.service';

const Schedule = () => {
  const [classes, setClasses] = useState([]);
  const [currentClass, setCurrentClass] = useState(classes[0]);
  useEffect(() => {
    studentService.getClasses().then(setClasses);
  }, []);

  return (
    <div>
      <Dropdown 
        placeholder='Select your class'
        fluid
        selection
        options={classes}
        value={currentClass}
        onChange={(e, value) => setCurrentClass(value)}
      />
      <pre>{JSON.stringify(classes)}</pre>
    </div>
  )
}

export default Schedule;