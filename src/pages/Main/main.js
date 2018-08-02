import React,{Component} from 'react';
import IndexHeader from './component/indexHeader';
import IndexMenu from './component/indexMenu';

import './style/app.less'

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuDisplay:false,
            isFirstShow:true
        }
    }
    //自定义函数
    getChildInfo(){
        this.setState({
            menuDisplay:!this.state.menuDisplay,
            isFirstShow:false //是否第一次加载
        })
    }
    getListClick(){
        this.setState({
            menuDisplay:false
        })
    }
    //钩子函数
    componentWillUnmount() {
    }
    render(){
        return (
            <div className="pageIndex">
                <div>
                    <IndexHeader getChildInfo={this.getChildInfo.bind(this)} />
                </div>
                <div className="content-warp" >
                    <div  style={{display:this.state.isFirstShow?'none':'block'}} 
                    className={['animated','leftMenu',this.state.menuDisplay ? 'slideInLeft':'slideOutLeft'].join(' ')}>
                        <IndexMenu getListClick={this.getListClick.bind(this)} />
                    </div>
                    <section>
                        {this.props.children}
                    </section>
                </div>
            </div>
        )
    }
}
export default Index;