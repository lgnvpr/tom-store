
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ToggleMenu from './ToggleMenu'
export default class Menu extends Component {
    render() {
        return (
            <div>
                <div className = 'menu'>
                    <div className = "logo">
                        <Link to = "/">
                        <img className= "img" src={"https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/22814531_1929790093714702_6711759996493530163_n.jpg?_nc_cat=1&_nc_sid=85a577&_nc_ohc=uUD6UQAghHIAX_gH8bX&_nc_ht=scontent.fsgn2-5.fna&oh=c1705d08ee0c3235099c3091d9b7963d&oe=5F808D22"} alt="" />
                        </Link>
                    </div>

                    <div>
                        <ul>
                            <li><Link to="/">Trang chủ</Link></li>
                            <li><Link to="/blog">Mẹo</Link></li>
                            <li><Link to="/product">Sản phẩm</Link></li>
                            <li><Link to="/tutorial">Huớng dẫn</Link></li>
                            <li><Link to="/introduce">Giới thiệu</Link></li>
                            
                        </ul>
                    </div>

                    <div className= "cart-login-search">
                        <div >
                            <a href="#" ><i className="fas fa-user"></i></a>
                            
                        </div>
                        <div className="search-menu">
                            <a href="#" className="icon-search-menu"><i className="fas fa-search"></i></a>
                            <input type="text"/>
                        </div>
                        <div>
                            <a href="#"><i className="fas fa-shopping-bag"></i></a>
                        </div>
                        <div className="toggle-menu">
                            <a href="#">
                                <ToggleMenu></ToggleMenu>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
