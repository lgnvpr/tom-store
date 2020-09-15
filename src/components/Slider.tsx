import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default class Slider extends Component {
    render() {
        return (
            <div className="home-slider">
                <Carousel className = "slider"
                    autoPlay = {true}
                    stopOnHover = {true}
                    
                >
                    <div>
                        <img src="https://vanluongg.github.io/vanluong/img/home/img-product/0.jpg" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src="https://vanluongg.github.io/vanluong/img/home/img-product/2.jpg" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img src="https://vanluongg.github.io/vanluong/img/home/img-product/3.jpg" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>
            </div>
        )
    }
}
