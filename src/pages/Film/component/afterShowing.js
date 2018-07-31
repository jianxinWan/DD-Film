import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

import '../style/nowShowing.less';
class AfterShowing extends Component{
    constructor(props){
        super(props);
        this.state = {
            afterShowingFilmList:[]
        }
    }
    getAfterShowList(){
        let afterShowUrl = '/v4/api/film/coming-soon?page=2&count=10';
        fetch(afterShowUrl).then((data)=>
            data.json()
        ).then((res)=>{
            this.setState({
                afterShowingFilmList:res.data.films
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    componentDidMount(){
        this.getAfterShowList();
    }
    render(){
        const afterShowDomList = this.state.afterShowingFilmList.map((item)=>{
            return (
                <div key={item.id}>
                    <NavLink to={`/films/${item.id}`}>
                        <div className="now-show-item">
                            <div className="now-show-cen">
                                <div className="left-img-warp">
                                    <img src={item.poster.origin} alt="电影照片" />
                                </div>
                                <div className="right-info-warp">
                                    <p className="filmName">
                                        <b>{item.name}</b>
                                        <i className="iconfont icon-more"></i>
                                    </p>
                                    <p className="filmIntro">{item.intro}</p>
                                    <p className="filmCount">{item.scheduleCount}家影院上映</p>
                                </div>
                            </div>
                        </div>
                        <hr style={{border:'1px dashed  #ccc'}} /> 
                    </NavLink>
                </div>
            )
        }) 
        return (
            <div className="now-show-warp">
                {afterShowDomList}
            </div>
        )
    }
}
export default AfterShowing;