import React, {
    Component
} from "react"
import styled from 'styled-components';
import img1 from '../images/hom1.jpeg';
import img2 from '../images/about_n.jpeg';
import img3 from '../images/home_i2.jpeg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default class Home extends Component {
    render(){
        return(
        <div class="home">
                <div id="carousel">
                <Carousel showThumbs={false} 
                          showArrows={false} 
                          showIndicators={false} 
                          showStatus={false} 
                          autoPlay={true}
                          id="car">
                    <img alt="900x500" src={img1}/>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel>
                </div>
                <div id="middle"/>
                <div id="homebar"/>
                <div id="info">

                </div>
                <div id="bottombar">
                </div>
        </div>
        )
    }
}