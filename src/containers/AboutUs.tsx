import React, { Component } from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <hr />
                <div>
                    <h1>Chính sách đổi trả</h1>
                </div>
                <div></div>
                <div>
                    <h1>Địa chỉ</h1>
                    <div className="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.7162168333852!2d106.78101313785488!3d10.908132567007458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8fb3c6f90f9%3A0x4cd69cb15db984f5!2zMTA4IEhhaSBCw6AgVHLGsG5nLCBUw6JuIMSQw7RuZyBIaeG7h3AsIETEqSBBbiwgQsOsbmggRMawxqFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1600002985064!5m2!1svi!2s" />
                    </div>
                </div>
                <hr />
                <Footer></Footer>
            </div>
        )
    }
}
