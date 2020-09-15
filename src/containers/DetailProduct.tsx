import React, { Component } from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Slider from '../components/Slider'

export default class DetailProduct extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <hr />
                <div className="slider-info-detail">
                    <div>
                        <Slider></Slider>
                    </div>

                    <div className="fr-info-detail-product">
                        <div className="name-detail-product">
                            Con vượn đen
                        </div>
                        <div className="price-detail-product">
                            <div className="before-detail-product">30.0000</div>
                            <div className="after-detail-product">20.000VND</div>
                        </div>
                        <div className="fr-option-detail-product">
                            <h5>Màu : </h5>
                            <div className= "option-detail-product">
                                <div>Hồng Phấn</div>
                                <div>Đỏ đô</div>
                                <div>Trắng</div>
                            </div>
                        </div>
                        <div className="fr-option-detail-product">
                            <h5>Size : </h5>
                            <div className= "option-detail-product">
                                <div>XL</div>
                                <div>L</div>
                                <div>M</div>
                                <div>S</div>
                            </div>
                        </div>
                        <div>Xem quy đổi kích cỡ </div>
                        <div className = {"fr-option-detail-product amount-detail"}>
                            <h5>Số lượng</h5>
                            <div>
                                <button>-</button>
                                <input className="inputAmount" type="text" value= "1" />
                                <button>+</button>
                            </div>
                        </div>
                        <div className="action-buy-detail-product">
                            <button>Thêm vào giỏ</button>
                            <button>Mua ngay</button>
                        </div>
                    </div>
                </div>

                <div className="description-detail-product">
                    <h2>Mô Tả</h2>
                    <div>
                        {`khúc này mô tả 
                            
                        ahihi
                        `}
                    </div>
                </div>
                <hr />
                <Footer></Footer>
            </div>
        )
    }
}
