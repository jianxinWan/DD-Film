import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import './style/film.less';

class Film extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props.children);
    }
    render(){
        return (
            <div className="film-warp">
                <div className="film-top-link-warp">
                    <NavLink to="/films/now-showing">
                        <div className="nowShowing-link">正在上映</div>
                    </NavLink>
                    <NavLink to="/films/after-showing">
                        <div className="afterShowimg-link">即将上映</div> 
                    </NavLink>
                </div>
                <div className="film-list">    
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Film;