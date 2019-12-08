import React from 'react';
import { Header as SHeader, Segment, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import { logout } from './../../containers/LoginPage/actions';

const Header = ({ username }) => {
  const dispatch = useDispatch();

  return (
    <Segment clearing>
      <SHeader as="h2" floated='right'>
        <Button onClick={e => {
          e.stopPropagation();
          dispatch(logout())
        }}>Logout</Button>
      </SHeader>
      <SHeader as="h2" floated='left'>
        { username }
      </SHeader>
    </Segment>
  )
}

export default Header;
