import { Link } from 'react-router-dom'
import React, { Component } from "react";

export default class DashBoard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="logo-dashboard">
                    <img
                        className="img"
                        src={
                            "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/22814531_1929790093714702_6711759996493530163_n.jpg?_nc_cat=1&_nc_sid=85a577&_nc_ohc=uUD6UQAghHIAX_gH8bX&_nc_ht=scontent.fsgn2-5.fna&oh=c1705d08ee0c3235099c3091d9b7963d&oe=5F808D22"
                        }
                        alt=""
                    />
                </div>
                <div className="menu-dashboard">
                    <div className="submenu-dashboard">
                        <h2>Quản lí</h2>
                        <Link to="/">

                            <div className="menu-item active-menu-item">
                                <i className="fas fa-shopping-basket"></i>
                                Sản phẩm
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="menu-item">
                                <i className="fas fa-file-invoice"></i>
                                Đơn hàng
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="menu-item">
                                <i className="fas fa-users"></i>
                                Khách hàng
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="menu-item">
                                <i className="fas fa-cart-arrow-down"></i>
                                Nhập hàng
                            </div>
                        </Link>


                    </div>
                    <hr />
                    <div className="submenu-dashboard">
                        <h2>Thống kê</h2>
                        <Link to="/">
                            <div className="menu-item">
                                <i className="fas fa-chart-pie"></i>
                                Đơn hàng
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="menu-item">
                                <i className="fas fa-chart-line"></i>
                                Doanh Thu
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
