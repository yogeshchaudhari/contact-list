import React, {Component} from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import Item from './contactList/Item';
import SearchBar from './contactList/SearchBar';

import { getFilteredList } from '../stores/reducers/selectors/getFilteredList';

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
            <div >
                <div>
                    <SearchBar />
                </div>
                <div>
                    <List>
                        {this.renderContacts(this.props.filteredContactList)}
                    </List>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        filteredContactList : getFilteredList(state)
    };
}
export default connect(mapStateToProps)(ContactList);