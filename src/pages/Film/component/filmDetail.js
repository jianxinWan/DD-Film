import React,{Component} from 'react';
import '../style/filmDetail.less';
class FilmDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            filmDetilInfo:{},
            filmCover:"",
            actors:[]
        }
    }
    getDate(dateObj){
        return dateObj.getFullYear() + "年" + (dateObj.getMonth() + 1) + "月" + dateObj.getDate() + "日 "
    }
    concatActor(arry){
        let actors = "";
        for(let i=0;i<arry.length-1;i++){
            actors+=arry[i].name+" | ";
        }
        actors+=arry[arry.length-1].name;
        return actors;
    }
    getDetailInfo(){
        let url = "/v4/api/film/"+this.props.match.params.filmId+"?__t=1533087192747";
        fetch(url).then(data=>
            data.json()
        ).then((res)=>{
            this.setState({
                filmDetilInfo:res.data.film,
                filmCover:res.data.film.cover.origin,
                actors:this.concatActor(res.data.film.actors)
            });
        }).catch((err)=>{
            console.log(err);
        })
    }
    componentWillMount(){
        this.getDetailInfo();
    }
    render(){
        const filmDetail = this.state.filmDetilInfo;
        return (
            <div className="film-detail-warp">
                <div  className="film-cover">
                    <img src={this.state.filmCover} />
                </div>
                <div className="film-info-warp">
                    <p>
                        <i className="iconfont icon-pin-fill"></i>
                        影片简介
                    </p>
                    <p>
                        <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span>
                        {this.state.filmDetilInfo.director}
                    </p>
                    <p>
                        <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span>
                        {this.state.actors}
                    </p>
                    <p>
                        <span>地区语言:</span>
                        {this.state.filmDetilInfo.language}
                    </p>
                    <p>
                        <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</span>
                        {this.state.filmDetilInfo.category}
                    </p>
                    <p>
                        <span>上映日期:</span>
                        {this.getDate(new Date(this.state.filmDetilInfo.premiereAt))}
                    </p>
                    <p>
                        {this.state.filmDetilInfo.synopsis}
                    </p>
                </div>
            </div>
        )
    }
}
export default FilmDetail;