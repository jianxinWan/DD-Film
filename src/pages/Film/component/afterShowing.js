import React,{Component} from 'react';
import '../style/afterShowing.less';
class AfterShowing extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log("我是即将上映列表");
    }
    render(){
        return (
            <div>
                我是即将上列表
            </div>
        )
    }
}
export default AfterShowing;