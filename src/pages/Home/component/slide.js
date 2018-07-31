import React,{Component} from 'react';
import fetch from 'isomorphic-fetch';

import '../style/slide.less';

import Swiper from 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.min.css'


class Slide extends Component{
    constructor(props){
        super(props);
        this.state = {
            slideInfo:[]
        }
    }
    getSlideInfo(){
        let url="/v4/api/billboard/home";
        fetch(url).then(data=>
           data.json()
        ).then((res)=>{
            this.setState({
                slideInfo:res.data.billboards
            })
            this.createSlide();
        }).catch((err)=>{
            console.log(err);
        })
    }
    createSlide(){
        const mySwiper = new Swiper('.swiper-container',{
            autoplay: true,
            loop:true
        })
    }
    componentDidMount(){
        this.getSlideInfo();
    }
    render(){
        let slideList = this.state.slideInfo.map((slide)=>{
            return (
                <div className="swiper-slide" key={slide.id}>
                    <a href={slide.url}>
                        <img src={slide.imageUrl} alt="slide-images"/>
                    </a>
                </div>  
            )
        })
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {slideList}
                </div>
            </div>
        ) 
    }
}
export default Slide;