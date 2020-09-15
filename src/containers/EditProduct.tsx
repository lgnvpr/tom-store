import React, { Component } from 'react'
import DashBoard from '../components/DashBoard'
import ItemEditProduct from '../components/ItemEditProduct'

export default class EditProduct extends Component {
    render() {
        return (
            <div className="fr-dash-board">
                <div className="nav-dashboard">
                    <DashBoard></DashBoard>
                </div>
                <div className="center-dashboard">
                    <div className="header-filter-edit-product">

                    </div>
                    <div className="list-product-admin">
                        <ItemEditProduct></ItemEditProduct>
                        <ItemEditProduct></ItemEditProduct>
                        <ItemEditProduct></ItemEditProduct>
                        <ItemEditProduct></ItemEditProduct>
                        <ItemEditProduct></ItemEditProduct>
                        <ItemEditProduct></ItemEditProduct>

                    </div>
                </div>
            </div>
        )
    }
}
