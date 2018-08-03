import React,{Component} from 'react';
import Cinema from './component/cinema';
import './style/theater.less';
class Theater extends Component{
    constructor(props){
        super(props);
        this.state = {
            getInfoFinshed:false,
            district:{}
        },
        this.myRef = React.createRef();
        this.addAnimated = this.addAnimated.bind(this);
    }
    addAnimated(e){
        let district = e.target.firstChild.innerHTML;
        console.log(district);
    }
    getNewArray(arry){
        let newObj = {};
        for(let i=0;i<arry.length;i++){
            let areaName = arry[i].district.name;
            if(areaName in newObj){
                newObj[areaName].push(arry[i]);
            }else{
                let area = [];
                area.push(arry[i]);
                newObj[areaName] = area;
            }
        }
        return newObj;
    }
    getTheaterInfo(){
        let cinemaUrl = '/v4/api/cinema?__t=1533130183409';
        fetch(cinemaUrl).then(data=>
            data.json()
        ).then((res)=>{
            console.log(this.getNewArray(res.data.cinemas));
            this.setState({
                getInfoFinshed:true,
                district:this.getNewArray(res.data.cinemas)
            })
        }).catch((err)=>{ 
            console.log(err);
        })
    }
    componentWillMount(){
        this.getTheaterInfo();
    }
    render(){
        let districtDom = null; 
        if(this.state.getInfoFinshed){
            let districtList = Object.keys(this.state.district).map((item)=>{
                return (
                    <React.Fragment key={item}>
                        <div className="district-item" onClick={this.addAnimated}  >
                            <span>{item}</span>
                            <i className={["iconfont",'icon-more'].join(" ")}></i>
                        </div>
                        <Cinema cinameInfo={this.state.district[item]} />
                    </React.Fragment>
                )
            })
            districtDom  = (
                <div className="district-area">
                    {districtList}
                </div>
            )
        }
        return (
            <div className="district-warp">{districtDom}</div>
        )
    }
}
export default Theater;