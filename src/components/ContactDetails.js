import React, {Component} from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, CardHeader, IconButton } from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Location from '@material-ui/icons/LocationOnSharp';
import CloseIcon from '@material-ui/icons/Close';

import {hideContact} from '../actions/hideContact';

class ContactDetails extends Component{
    state = {
        showDetails : false
    }
    render(){
        let {contactList, selectedContactId} = this.props;
        let selectedContact = contactList.filter((contact)=>{
            return selectedContactId === contact.id
        });
        let fullName = "";
        if(selectedContact && selectedContact.length > 0){
            selectedContact = selectedContact[0];
            fullName = selectedContact.general.firstName + " " + selectedContact.general.lastName;
        }
        else
            selectedContact = null;
        
        return(
            <div style={{marginLeft: "5%", marginTop: "5%"}}>
                {
                    selectedContact && this.props.showContact?
                    <Card style={{width:"90%"}}>
                        <CardHeader action={ 
                            <IconButton onClick={this.props.onCloseClick}>
                                <CloseIcon/>
                            </IconButton>}/>
                        <CardContent>
                            <CardMedia style={{width:"128px", height:"128px"}} image={selectedContact.general.avatar} />
                        </CardContent>
                        <CardContent>
                            <Typography variant="headline" gutterBottom>{fullName}</Typography>
                            <Typography variant="title" gutterBottom>{selectedContact.job.title + " - " + selectedContact.job.company}</Typography>
                            <br/>
                            <Phone />
                            <a href={"tel:" + selectedContact.contact.phone} style={{textDecoration:"none"}}>
                                <Typography>{selectedContact.contact.phone}</Typography>
                            </a>
                            <br/>
                            <Email />
                            <a href={"mailto:" + selectedContact.contact.email} style={{textDecoration:"none"}}>
                                <Typography>{selectedContact.contact.email}</Typography>
                            </a>
                            <br/>
                            <Location />
                            <Typography>{selectedContact.address.street + ", " + selectedContact.address.city}</Typography>
                            <Typography>{selectedContact.address.zipCode + ", " + selectedContact.address.country}</Typography>
                        </CardContent>
                    </Card>
                    :
                    null
                }
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return({
        selectedContactId: state.selectedContact.id,
        contactList: state.contactList,
        showContact: state.selectedContact.showContact
    });
}
const mapDispatchToProps = (dispatch) => {
    return {
        onCloseClick : () => {
            dispatch(hideContact());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactDetails);