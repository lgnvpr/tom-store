import React, { Component } from 'react'
import Footer from '../components/Footer'
import InfoContact from '../components/InfoContact'
import ListProduct from '../components/ListProduct'
import Menu from '../components/Menu'
import Slider from '../components/Slider'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Menu></Menu>
                    <Slider></Slider>
                    <hr/>
                    <ListProduct></ListProduct>
                    <hr/>
                    <InfoContact></InfoContact>
                    <hr/>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}
