import React,{Component} from 'react';

import './loading.less'
class Loading extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return (
            <div className={['loading-warp',this.props.isShow?'loading-show':'loading-hide'].join(" ")}>
                <img src="http://static.m.maizuo.com/v4/static/pure/image/global/loading/projector-d71dfe7c77.gif" alt="loading" />
            </div>
        )
    }
}
export default Loading;