import React, { Component } from 'react'

export default class InfoContact extends Component {
    render() {
        return (
            <div className="fr-info-contact">
                <div>
                    <div className="header-info-contact">{`HỖ TRỢ(06h-22h)`}</div>
                    <div className="phone-info-contact">
                        <div><i className="fas fa-phone-volume"></i></div>
                        <div>0335614195</div>
                    </div>
                    <div>Tất cả các ngày trong tuần</div>
                </div>
                
                <div>
                    <div  className="header-info-contact">
                        ĐĂNG KÝ NHẬN THÔNG TIN MỚI TỪ HỆ THỐNG TÓM STORE
                    </div>
                    <div>
                        <input type="text" placeholder="Nhập email của bạn..."/>
                        <button>ĐĂNG KÍ</button>
                    </div>
                </div>

                <div>
                    <div  className="header-info-contact">LIÊN KẾT</div>
                    <ul className = "list-link-social">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fas fa-phone-square-alt"></i></a></li>

                    </ul>
                </div>

            </div>
        )
    }
}
