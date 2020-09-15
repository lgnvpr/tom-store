import Step  from '../components/Step'
import React, { Component } from 'react'
import CartItem from '../components/CartItem'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <Step></Step>
                <hr />
                <div className="list-cart-item">
                    <div>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                    </div>
                    <div className="info-total-money">
                        <div>
                            <div className="header-amount-total-money">
                                <div>Tạm tính 5 sản phẩm</div>
                                <div>Phí Ship</div>
                                <div className="header-tolal-money">Tổng tiền</div>
                            </div>
                            <div>
                                <div>1.200.000</div>
                                <div>15.000</div>
                                <div className="total-money">12.015.000</div>
                            </div>

                        </div>
                        <button>Tiến hành đặt hàng</button>
                     </div>
                </div>

                <hr />
                <Footer></Footer>
            </div>
        )
    }
}
