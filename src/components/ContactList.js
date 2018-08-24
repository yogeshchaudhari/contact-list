import React, {Component} from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import Item from './contactList/Item';

class ContactList extends Component{
    renderContacts = (contacts) => {
        return contacts.map((contact) => {
            return(
                <Item contact={contact} key={contact.id}/>
            )
        })
    }
    render(){
        return(
            <div>
                <div>
                    <List>
                        {this.renderContacts(this.props.contactList)}
                    </List>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return state;
}
export default connect(mapStateToProps)(ContactList);