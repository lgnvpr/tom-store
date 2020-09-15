import React, { Component } from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

export default class EditInfoCustom extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <hr/>
                    <div className="edit-info-custom">
                        <h2>Cập nhật thông tin</h2>
                        <div className="fr-input-info-custom">
                            <label>Tên khách hàng</label>
                            <input type="text"/>
                            <label className= "err"> Vui lòng nhập đầy đủ thông tin</label>
                        </div>
                        <div className="fr-input-info-custom">
                            <label>Số điện thoại</label>
                            <input type="text"/>
                            <label className= "err">Số điện thoại không phù hợp</label>
                        </div>
                        <div className="fr-input-info-custom">
                            <label>Địa chỉ</label>
                            <input type="text"/>
                            <label className= "err">Vui lòng nhập đầy đủ thông tin</label>
                        </div>


                        <button>Cập nhật</button>
                        
                    </div>
                <hr/>
                <Footer></Footer>

            </div>
        )
    }
}
