import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="info-footer">

                    <ul>
                        <h3>Thông tin</h3>
                        <li>
                            <div><i className="fas fa-phone-square-alt"></i></div>
                            <div>097 475 24 95</div>
                        </li>
                        <li>
                            <div><i className="fab fa-facebook-messenger"></i></div>
                            <div> m.me/tomstore3</div>
                        </li>
                        <li>
                            <div><i className="fas fa-map-marker-alt"></i></div>
                            <div> 108 Hai Bà Trưng, Dĩ An, Bình Dương</div>
                        </li>
                        <li>
                            <div><i className="fas fa-phone-square-alt"></i></div>
                            <div>0929 267 686</div>
                        </li>
                    </ul>
                </div>

                <div className="introduce-footer">
                    
                    <ul>
                        <h3>Giới thiệu</h3>
                        <li>
                            <div><i className="fas fa-check"></i></div>
                            <div>Thương Hiệu Việt</div>
                        </li>
                        <li>
                            <div><i className="fas fa-check"></i></div>
                            <div>Giá Tốt Nhất</div>
                        </li>
                        <li>
                            <div><i className="fas fa-check"></i></div>
                            <div>Sỉ Và Lẻ</div>
                        </li>
                        <li>
                            <div><i className="fas fa-check"></i></div>
                            <div>Uy Tín</div>
                        </li>
                        <li>
                            <div><i className="fas fa-check"></i></div>
                            <div>Chất Lượng</div>
                        </li>
                    </ul>
                </div>

                <div>
                    Fanpage
                </div>


            </footer>
        )
    }
}
