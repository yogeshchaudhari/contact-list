import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as JsSearch from 'js-search';

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
    filterContacts = () => {
        if(!this.props.searchTerm || this.props.searchTerm === '')
            return this.props.contactList;
        var search = new JsSearch.Search('id');
        search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
        search.addIndex(['general', 'firstName']);
        search.addIndex(['general', 'lastName']);
        search.addIndex(['job', 'company']);
        search.addIndex(['job', 'title']);
        search.addIndex(['contact', 'email']);
        search.addDocuments(this.props.contactList);
        return search.search(this.props.searchTerm);
    }
    render(){
        let contacts = this.filterContacts();
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