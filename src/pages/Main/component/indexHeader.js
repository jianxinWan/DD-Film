import React,{Component} from 'react'
import '../style/indexHeader.less'
import {NavLink} from 'react-router-dom'

class IndexHeader extends Component{
    constructor(props){
        super(props);
        this.state = {placeInfo:'西安'}
    }
    render(){
        return (
            <div>
                <div id="film-index-header">
                    <div className="header-left-warp">
                        <div className="menu-warp" onClick={this.props.getChildInfo}>
                            <i className='iconfont icon-category header-menu'></i>
                        </div>
                        <div className="appName">
                            <span>铛铛电影</span>
                        </div>
                    </div>
                    <div className="place-and-mydoc">
                        <div className="place">
                            <span>{this.state.placeInfo}</span>
                            <i className="iconfont icon-moreunfold"></i>                      
                        </div>
                        <div className="mydoc">
                            <NavLink to="/mydoc">
                                <i className="iconfont icon-account"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default IndexHeader;