import React,{Component} from 'react';
import fetch from 'isomorphic-fetch';
import {NavLink} from 'react-router-dom';

import Slide from './component/slide';
import FilmBox from './component/filmBox';
import './style/home.less';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            nowFilmInfoList:[],
            afterFilmInfoList:[]
        }
    }
    getNowShowing(){
        let nowShowingUrl = "/v4/api/film/now-playing?__t=1532942225955&page=1&count=5";
        fetch(nowShowingUrl).then(data=>
            data.json()
        ).then((res)=>{
            this.setState({
                nowFilmInfoList:res.data.films
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    getAfterShowing(){
        let afterShowUrl = "/v4/api/film/coming-soon?__t=1532997690622&page=1&count=5";
        fetch(afterShowUrl).then(data=>
            data.json()
        ).then((res)=>{
            console.log(res);
            this.setState({
                afterFilmInfoList:res.data.films
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    componentDidMount(){
        let loadingFilm = new Promise((resolve,reject)=>{
            this.getNowShowing();
            resolve();
        }).then(()=>{
            this.getAfterShowing();
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        const nowFilmItemList = this.state.nowFilmInfoList.reverse().map((item)=>{
            return (
                <FilmBox filmInfo={item} key={item.id} />
            )
        })
        const AfterFilmItemList = this.state.afterFilmInfoList.reverse().map((item)=>{
            return (
                <FilmBox filmInfo={item} key={item.id} />
            )
        })
        return (
            <div className="homePage">
                <Slide />
                <div className="nowShow-warp">
                    {nowFilmItemList}
                    <div className="show-more">
                        <NavLink to="/films/now-showing">
                            <div className="show-more-btn">加载更多</div>
                        </NavLink>
                    </div>
                </div>
                <div className="afterShow-warp">
                    <div className="spliceLine">
                        <hr/>
                        <div className="afterLine">即将上映</div>
                        <hr/>
                    </div>
                    {AfterFilmItemList}
                    <div className="show-more">
                        <NavLink to="/films/after-showing">
                            <div className="show-more-btn">加载更多</div>
                        </NavLink>
                    </div>
                </div>
                <div className="home-footer">
                    <div className="spliceLine">
                        <hr/>
                        <div className="power">由铛铛提供技术支持</div>
                        <hr/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;