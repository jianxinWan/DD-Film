import React,{Component} from 'react';
import '../style/ciname.less';
class Cinema extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log(this.props.cinameInfo);
    }
    render(){
        const cinameList  = this.props.cinameInfo.map((item)=>{
            return (
                <div className="ciname-item-warp" key={item.id}>
                    <p className="cinema-name">
                        <span>{item.name}</span>
                        <i className="iconfont icon-more"></i>
                    </p>
                    <p className="cinema-address">{item.address}</p>
                    <p>距离未知</p>
                </div>
            )
        })
        return (
            <React.Fragment>
                {cinameList}
            </React.Fragment>
        )
    }
}
export default Cinema;