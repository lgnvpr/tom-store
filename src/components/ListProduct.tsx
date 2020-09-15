import React, { Component } from 'react'
import Product from './Product'

export default class ListProduct extends Component {
    render() {
        return (
            <div className="fr-list-product">
                <h1>Sản phẩm</h1>
                <div className = "list-product">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>

                </div>
            </div>
        )
    }
}
