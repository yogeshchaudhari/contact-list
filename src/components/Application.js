import React, {Component} from 'react';
import { connect } from 'react-redux';

import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

class Application extends Component{
    constructor(props) {
        super(props);
        this.state = {height: "800px"};
    }

    componentWillMount(){
        this.setState({height: window.innerHeight + 'px'});
    }
    render(){
        let height = this.state.height;
        return(
            <div>
                <div>
                    <div style={{float:"left", width:"25%", overflowY:"scroll", height:height}}>
                        <ContactList />
                    </div>
                    <div style={{float:"left", width:"75%"}}>
                        <ContactDetails />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps)(Application);