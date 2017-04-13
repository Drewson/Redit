import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {data} from '../../mock-data';
import Week from './../../components/Week';


class Categories extends Component {

  render() {
    return ( 
      <Drawer>
        <AppBar 
          title='RED it' 
          iconElementLeft={<IconButton><SiteIcon/></IconButton>} 
        />
        <Week />
        
    </Drawer>
    )
  }
};

export default Categories;