import React, {Component} from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { InputAdornment } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

import { search } from '../../actions/search';

class SearchBar extends Component{
    handleSearchTermChange = (event) => {
        let term = event.target.value;
        this.props.onSearchChange(term, this.props.contactList);
    }
    render(){
        return(
            <div className={this.props.classes.searchContainer}>
                <Input 
                    className={this.props.classes.inputStyle}
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
const mapDispatchToProps = {
    onSearchChange : search
}

const styles = {
    searchContainer : {
        paddingLeft: "5%",
        paddingTop: "5%"
    },
    inputStyle : {
        width: "80%"
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchBar));