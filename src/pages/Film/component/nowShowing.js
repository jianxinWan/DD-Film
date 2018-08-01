import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

import '../style/nowShowing.less';
class NowShowing extends Component{
    constructor(props){
        super(props);
        this.state = {
            nowShowingFilmList:[]
        }
    }
    getNowShowList(){
        let nowShowUrl = '/v4/api/film/now-playing?page=1&count=10';
        fetch(nowShowUrl).then((data)=>
            data.json()
        ).then((res)=>{
            this.setState({
                nowShowingFilmList:res.data.films
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    componentDidMount(){
        this. getNowShowList();
    }
    render(){
        const nowShowDomList = this.state.nowShowingFilmList.map((item)=>{
            return (
                <div key={item.id}>
                    <NavLink to={`/detail/${item.id}`}>
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
                {nowShowDomList}
            </div>
        )
    }
}

export default NowShowing;