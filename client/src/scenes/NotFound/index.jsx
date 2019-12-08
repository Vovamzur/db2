import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">Not Founded</h2>
        <Link to="/">Take me back</Link>
      </div>
    </div>
  )
};

export default NotFound;