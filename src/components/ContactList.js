import React, {Component} from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import Item from './contactList/Item';
import SearchBar from './contactList/SearchBar';

class ContactList extends Component{
    renderContacts = (contacts) => {
        return contacts.map((contact) => {
            return(
                <Item contact={contact} key={contact.id}/>
            )
        })
    }
    render(){
        let contacts = this.props.contactList;
        if(this.props.searchResult.filteredContacts)
            contacts = this.props.searchResult.filteredContacts;
        return(
            <div>
                <div>
                    <SearchBar />
                </div>
                <div>
                    <List>
                        {this.renderContacts(contacts)}
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