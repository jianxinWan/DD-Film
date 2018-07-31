import React,{Component} from 'react'
import '../style/indexMenu.less'
import {NavLink} from 'react-router-dom' 

class IndexMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            hello:'Dolary',
            menuList:[
                {
                    pageName:'首页',
                    link:'/home'
                },
                {
                    pageName:'影片',
                    link:'/films'
                },
                {
                    pageName:'影院',
                    link:'/theater'
                },
                {
                    pageName:'商城',
                    link:'/store'
                },
                {
                    pageName:'我的',
                    link:'mydoc'
                },
                {
                    pageName:'专属VIP',
                    link:'/vip'
                }
            ]
        }
    }
    render(){
        const menuList  = this.state.menuList.map((linkInfo)=>{
            return (
                <li onClick={this.props.getListClick} key={linkInfo.pageName.toString()}>
                    <NavLink to={linkInfo.link}>
                        <span>{linkInfo.pageName} </span>
                        <i className="iconfont icon-more"></i>
                    </NavLink>
                </li>
            )
        });
        return(
            <div className="index-menu-warp">
                <ul>
                    {menuList}
                </ul>
            </div>  
        )
    }
}
export default IndexMenu;