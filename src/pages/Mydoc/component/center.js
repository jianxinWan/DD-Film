import React,{Component} from 'react';
import '../style/center.less';
class Center extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="center-warp">
                <div className="center-header">
                    <div className="photo-id-warp">
                        <div className="photo">
                            <img src="http://139.199.104.60/wvue/static/img/imgDefault.jpg" alt="userPhoto" />
                        </div>
                        <div className="id">
                            <p>手机用户:</p>
                            <p>Id:</p>
                        </div>
                    </div>
                </div>
                <ul className="fun-list-warp">
                    <li>
                        <span><i className="iconfont icon-attachment"></i>影票订单</span>
                        <i className="iconfont icon-more"></i>
                    </li>
                    <li>
                        <span><i className="iconfont icon-process"></i>影票代付订单</span>
                        <i className="iconfont icon-more"></i>
                    </li>
                    <li>
                        <span><i className="iconfont icon-imagetext"></i>商城订单</span>
                        <i className="iconfont icon-more"></i>
                    </li>
                    <li>
                        <span><i className="iconfont icon-dollar"></i>我的现金卷</span>
                        <i className="iconfont icon-more"></i>
                    </li>
                    <li>
                        <span><i className="iconfont icon-raw"></i>账户余额</span>
                        <i className="iconfont icon-more"></i>
                    </li>
                    <li>
                        <span><i className="iconfont icon-edit"></i>我的卖座卡</span>
                        <i className="iconfont icon-more"></i>
                    </li>
                    <li>
                        <span><i className="iconfont icon-set"></i>设置</span>
                        <i className="iconfont icon-more"></i>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Center;