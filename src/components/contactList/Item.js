import React, {Component} from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import { selectContact } from '../../actions/selectContact';

class Item extends Component{
    render(){
        let contact = this.props.contact;
        let name = contact.general.firstName + " " + contact.general.lastName;
        return(
            <ListItem key={contact.id} onClick={this.props.onContactClick} className={this.props.classes.itemHover}>
                <Avatar alt={name} src={contact.general.avatar} />
                <ListItemText primary={name} secondary={contact.job.title} />
            </ListItem>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onContactClick :() => {
            dispatch(
                selectContact({id: ownProps.contact.id})
            );
        }
    };
}
const styles = {
    itemHover : {
        cursor: "pointer"
    }
}
export default connect(null, mapDispatchToProps)(withStyles(styles)(Item));