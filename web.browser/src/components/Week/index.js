import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {data} from '../../mock-data';

class Week extends Component {

    buildCategoryListItem(category, i){
        return <ListItem primaryText={category} key={i} />
    }

    createList(week, i){
        return (
            
        <List key={i} >
            <Subheader>{ week.title }</Subheader>
            
            {week.categories.map( this.buildCategoryListItem )}

            <Divider />    
        </List>
        )
    }

    render(){
        return(
            <div>
            { data.weeks.map( (week, i) => this.createList(week, i) )}
            </div>
        )
        
    }
    
}

export default Week;
