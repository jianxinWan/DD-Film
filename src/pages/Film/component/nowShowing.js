import React,{Component} from 'react';
import '../style/nowShowing.less';
class NowShowing extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log("我是现在上映，我已被加载");
    }
    render(){
        return (
            <div className="now-show-warp">
                我是正在上映列表
            </div>
        )
    }
}

export default NowShowing;