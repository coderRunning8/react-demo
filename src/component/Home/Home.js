import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {SEND_ALERT_STATUS, SEND_CALLBACK_STATUS} from '../../store/action';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Tom'
        };
    }
    turnOn =()=>{
        let {dispatch}=this.props;
        dispatch({type:SEND_ALERT_STATUS,data:{ alertStatus:true, alertText:'确定要跳转页面吗？' }});
        dispatch({type:SEND_CALLBACK_STATUS,data:{ callback:()=>{ console.log(1111)}}});
    };

    render(){
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">react</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.turnOn}>确认</button>
                <Link to={{pathname:'/demo',params:{name:'Tom'}}}>
                {/*<Link to={{pathname:'/demo/'+this.state.name}}>*/}
                    <p>跳转到Demo</p>
                </Link>
            </div>
        )
    }
}

export default connect()(Home);
