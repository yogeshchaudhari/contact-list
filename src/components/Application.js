import React, {Component} from 'react';
import { connect } from 'react-redux';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core';
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
        let className = "";
        if(isWidthDown('md', this.props.width))
            className = this.props.classes.smallScreen;
        let height = this.state.height;
        return(
            <Grid container spacing={0}>
                <Grid className={this.props.classes.scroll} style={{height}} item sm={12} md={3}>
                    <ContactList />
                </Grid>
                <Grid className={className} item sm={12} md={9}>
                    <ContactDetails />
                </Grid>
            </Grid>
        );
    }
}
const styles = {
    smallScreen: {
        position: "absolute"
    },
    scroll: {
        overflowY: "scroll"
    }
}
const mapDispatchToProps = {
    didMount: populateList
};
export default connect(null, mapDispatchToProps)(withStyles(styles)(withWidth()(Application)));