import React, {Component} from 'react';
import { connect } from 'react-redux';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import Grid from '@material-ui/core/Grid';

import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

import { populateList } from "../actions/populateList";

class Application extends Component{
    constructor(props) {
        super(props);
        this.state = {height: "800px"};
    }

    componentWillMount(){
    this.setState({height: window.innerHeight + 'px'});
    }
    componentDidMount(){
        this.props.didMount();
    }
    render(){
        let style = {};
        if(isWidthDown('md', this.props.width))
            style = {"position": "absolute"}
        let height = this.state.height;
        return(
            <Grid container spacing={0}>
                <Grid style={{overflowY:"scroll", height: height}} item sm={12} md={3}>
                    <ContactList />
                </Grid>
                <Grid style={style} item sm={12} md={9}>
                    <ContactDetails />
                </Grid>
            </Grid>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        didMount: () => {
            dispatch(
                populateList()
            );
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(Application));