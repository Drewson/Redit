import React from 'react';

import AppBar from 'material-ui/AppBar';

import FlatButton from 'material-ui/FlatButton';
import './styles.css';


const HeaderBar = () =>  ( 
  <AppBar 
  iconElementRight={<div>
    <FlatButton style={{color: 'white'}} title='Share New Link' />
    <FlatButton style={{color: 'white'}} title='Logout' />
  </div>}
  /> 
  );

export default HeaderBar;
