import React, {Component} from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import { search } from '../../actions/search';
import { InputAdornment } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

class SearchBar extends Component{
    handleSearchTermChange = (event) => {
        let term = event.target.value;
        this.props.onSearchChange(term, this.props.contactList);
    }
    render(){
        return(
            <div style={{paddingLeft: "5%", paddingTop:"5%"}}>
                <Input 
                    style={{width:"80%"}}
                    type="search" 
                    placeholder="Search" 
                    startAdornment={
                        <InputAdornment>
                            <Search />
                        </InputAdornment>
                    }
                    onChange={this.handleSearchTermChange}/>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return({
        contactList: state.contactList
    });
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onSearchChange :(searchTerm, contactList) => {
            dispatch(
                search(searchTerm, contactList)
            );
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);