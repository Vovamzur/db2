import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const role = localStorage.getItem('role');
  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal" style={{ "fontSize": "2rem" }}>Not Founded</h2>
        <h1 className="ui huge label">
          <Link to={role}>Take me back</Link>
        </h1>
      </div>
    </div>
  )
};

export default NotFound;