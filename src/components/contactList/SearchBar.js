import React, {Component} from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import { search } from '../../actions/search';
import { InputAdornment } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

class SearchBar extends Component{
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
                    onChange={this.props.onSearchChange}/>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onSearchChange :(event) => {
            dispatch(
                search(event.target.value)
            );
        }
    };
}
export default connect(null, mapDispatchToProps)(SearchBar);