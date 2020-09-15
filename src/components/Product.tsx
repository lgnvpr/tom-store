import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className="fr-product">
                <div className="product">
                <div className="salePercent-image-product">
                    <div className="salePercent-product">
                        10%
                    </div>
                    <div className="img-product">
                        <img src="https://vanluongg.github.io/vanluong/img/home/img-product/0.jpg" alt="" />
                    </div>
                </div>

                <div className="name-price-product">
                    <div>Con Vượn</div>
                    <div className="price-pricesale">
                        <div className="price-before-product">200.000</div>
                        <div className="price-after-product">180.0000</div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
