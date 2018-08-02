import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

import '../style/filmBox.less';

class FilmBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            filmItemInfo:{}
        }
    }
    getDate(dateObj){
        return dateObj.getFullYear() + "年" + (dateObj.getMonth() + 1) + "月" + dateObj.getDate() + "日 "
    }
    componentDidMount(){
    }
    render(){
        let gradeOrTime = "";
        this.props.filmInfo.isNowPlaying!==""?gradeOrTime=this.props.filmInfo.grade:gradeOrTime=this.getDate(new Date(this.props.filmInfo.premiereAt));
        let cinemaCount = "";
        this.props.filmInfo.isNowPlaying!==""?cinemaCount=this.props.filmInfo.cinemaCount+"家电影上映":cinemaCount="";
        return (
            <div className="move-item">
                <NavLink to={`/detail/${this.props.filmInfo.id}`} >
                     <div className="movie-item-filmImage">
                        <img src={this.props.filmInfo.cover.origin} alt="电影照片" />
                    </div>
                    <div className="movie-item-filmInfo" style={{height:this.props.filmInfo.isNowPlaying!==""?'3rem':'2.4rem'}} >
                        <div className="left-info">
                            <b>{this.props.filmInfo.name}</b>
                            <br/>
                            <p style={{display:this.props.filmInfo.isNowPlaying!==""?'block':'none'}}>{cinemaCount}</p>
                        </div>
                        <div className="right-score" style={{fontSize:this.props.filmInfo.isNowPlaying!==""?'1.2rem':'0.9rem'}}>
                            {gradeOrTime}
                        </div>
                    </div>
                </NavLink>
            </div>
        )
    }
}
export default FilmBox;