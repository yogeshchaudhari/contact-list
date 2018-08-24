import React, {Component} from 'react';

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
                    </div>
                    <div style={{float:"left", width:"75%"}}>
                    </div>
                </div>
            </div>
        );
    }
}
export default Application;