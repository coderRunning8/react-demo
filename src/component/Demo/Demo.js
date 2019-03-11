import React, {Component} from 'react';
import './Demo.styl';
import { Link} from 'react-router-dom';

class Demo extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'demo',
            memberList:[{name:'王二',idCode:'20180001'},{name:'张三',idCode:'20180001'},{name:'李四',idCode:'20180001'},{name:'赵五',idCode:'20180001'}]
        }
    }
    componentWillMount(){
        // let params=this.props.match.params.;
        let params=this.props.location.params;
        if(!params){
            this.props.history.goBack();
        }else {
            this.setState({
                name:params.name
            })
        }
    }
    searchChange(e){
        this.setState({
            name:e.target.value
        })
    }
    render() {
        let memberHtml=[];
        this.state.memberList.forEach(function(obj,index){
            memberHtml.push(<MemberList key={index} name={obj.name} idCode={obj.idCode} />)
        });
        return (
            <div className="demo">
                <h2>{this.state.name}</h2>
                <input onChange={this.searchChange.bind(this)}/>
                <div>
                    {memberHtml}
                </div>
                <Link to={{pathname:'/'}}>
                    <p>跳转到Home</p>
                </Link>
            </div>
        );
    }
}
class MemberList extends Component{
    render (){
        return (
            <div className="memberList">
                <h3>{this.props.name}</h3>
                <p>{this.props.idCode}</p>
            </div>
        )
    }
}
export default Demo;