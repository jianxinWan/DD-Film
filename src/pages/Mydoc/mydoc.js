import React,{Component} from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import './style/mydoc.less';

class Mydoc extends Component{
    constructor(props){
        super(props);
        this.state={
            logged:false
        }
    }
    componentDidMount(){
    }
    render(){
        return (
            <div className="mydoc-warp">
                {this.props.children}
            </div> 
        )   
    }
}
export default Mydoc;