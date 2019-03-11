import React, { Component } from 'react';
import './App.styl';
import { Route, Switch} from 'react-router-dom';
import Demo from "./component/Demo/Demo";
import Home from "./component/Home/Home";
import { connect } from 'react-redux';
import { alertOperateFn } from './store/action'; // action

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            navigateShow: true
        }
    }

    /**
     * 弹窗组件是否显示
     */
    alertShowFn(){
        let {alertData:{alertStatus,alertText}, dispatch}=this.props;
        if(alertStatus)
            return <Alert alertText={alertText} dispatch={dispatch} />
    }

    // 路由发生变化-触发生命周期函数
    componentWillReceiveProps(){
        let path=this.props.history.location.pathname;// 当前路由名字
        this.checkPathFn(path)
    }
    /**
     * 路由变化判断路由是否是'/' || '/mine'
     */
    checkPathFn(p){
        if(p==='/' || p==='/home'){
            this.setState({
                navigateShow:true
            })
        }else{
            this.setState({
                navigateShow:false
            })
        }
    }
  render() {
    return (
      <div className="App">
          {this.state.navigateShow?<Welcome></Welcome>:""}
          {
              /*弹窗组件*/
              this.alertShowFn()
          }
          <Switch>
              {/*Home*/}
              <Route exact  path="/" component={Home} />
              {/*Demo*/}
              {/*<Route path="/demo/:name" component={Demo} />*/}
              <Route path="/demo" component={Demo} />
          </Switch>
      </div>
    );
  }
}
class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount(){
        this.timeId = setInterval(
            () =>
                this.setState({
                    date: new Date()
                }),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timeId);
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleString()}.</h2>
            </div>
        );
    }
}

// alert
class Alert extends Component {
    render() {
        const operateCancelFn=(e) => {
            e.preventDefault()
            this.props.dispatch(alertOperateFn(''))
        };
        const operateConfirmFn=(e) => {
            e.preventDefault()
            this.props.dispatch(alertOperateFn('',true))
        };
        return (
            <div className="Alert">
                <div className="content">
                    <h3>提示</h3>
                    <section>{this.props.alertText}</section>
                    <div className="btn">
                        <p className="cancel" onClick={operateCancelFn}>取消</p>
                        <p className="confirm" onClick={operateConfirmFn}>好的</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(({alertData})=>{return {alertData}})(App);
