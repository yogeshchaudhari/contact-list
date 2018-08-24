import React, {Component} from 'react';
import { connect } from 'react-redux';

class ContactList extends Component{
    render(){
        return(
            <div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return state;
}
export default connect(mapStateToProps)(ContactList);