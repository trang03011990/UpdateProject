import React from 'react'
import axios from 'axios'

export default function UserModal() {

    return (
        <div className="modal fade" id="myModal">
                    <div className="modal-dialog formUser">
                        <div className="modal-content px-3">
                            <header className="head-form mb-0">
                                <h3 id="header-title">THÊM NGƯỜI DÙNG</h3>
                            </header>
                            {/* Modal Header */}
                            {/* 	<div class="modal-header">
					<h4 class="modal-title" id="modal-title">Modal Heading</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div> */}
                            {/* Modal body */}
                            <div className="modal-body">
                                <form  role="form">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-user" /></span>
                                            </div>
                                            <input type="text" name="tk" id="tknv" className="form-control input-sm" placeholder="Tài khoản" />
                                        </div>
                                        <span className="sp-thongbao" id="tbTKNV" />
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-address-book" /></span>
                                            </div>
                                            <input type="name" name="name" id="name" className="form-control input-sm" placeholder="Họ và tên" />
                                        </div>
                                        <span className="sp-thongbao" id="tbTen" />
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-envelope" /></span>
                                            </div>
                                            <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email" />
                                        </div>
                                        <span className="sp-thongbao" id="tbEmail" />
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-key" /></span>
                                            </div>
                                            <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Mật khẩu" />
                                        </div>
                                        <span className="sp-thongbao" id="tbMatKhau" />
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-phone" /></span>
                                            </div>
                                            <input type="text" name="ngaylam" id="datepicker" className="form-control" placeholder="Số điện thoại" />
                                        </div>
                                        <span className="sp-thongbao" id="tbNgay" />
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-briefcase" /></span>
                                            </div>
                                            <select className="form-control" id="chucvu">
                                                <option>Loại người dùng</option>
                                                <option>Giáo vụ</option>
                                                <option>Học viên</option>
                                            </select>
                                        </div>
                                        <span className="sp-thongbao" id="tbChucVu" />
                                    </div>
                                   
                                </form>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer" id="modal-footer">
                                <button id="btnThemNV" type="button" className="btn btn-success">Thêm người dùng</button>
                                <button id="btnCapNhat" type="button" className="btn btn-success">Cập nhật</button>
                                <button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
