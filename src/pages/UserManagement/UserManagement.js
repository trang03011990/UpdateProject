import React from 'react'
import '../Admin/admin.css'
import UserModal from './UserModal'
import UserRegisterModal from './UserRegisterModal'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'


export default function UserManagement() {
    const [user, setuser] = useState({
        userArray: []
    })

    const getUserList = () => {
        let promise = axios({
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
            method: 'GET',
            headers: {
                "TokenCybersoft": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjEyLzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTcyMTYwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjQ5ODY5MjAwfQ.RkFKrifGWTY3MP0bQtIpvA5WpWWrcSkGjDSw01LwhuI'
            }
        });
        promise.then((result) => {
            setuser({ userArray: result.data })
        });
        promise.catch((err) => {
            console.log(err.response.data)
        })
    }
    //Pagination
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        getUserList()
    }, [])

    useEffect(() => {
        // getUserList()
        const endOffset = itemOffset + 5;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(user.userArray.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(user.userArray.length / 5));
        // console.log(currentItems)
    }, [itemOffset,user])

    const handlePageClick = (event) => {
        const newOffset = event.selected * 5 % user.userArray.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    const renderUserList = (currentItems) => {
        return currentItems.map((item, index) => {
            return <tr>
                <td className="align-middle">{itemOffset + index + 1}</td>
                <td className="align-middle text-wrap">{item.taiKhoan}</td>
                <td className="align-middle text-wrap">{item.maLoaiNguoiDung}</td>
                <td className="align-middle text-wrap">{item.hoTen}</td>
                <td className="align-middle text-break">{item.email}</td>
                <td className="align-middle text-wrap">{item.soDt}</td>
                <td>
                    <button type="button" className="btn btn-success mx-1" data-toggle="modal" data-target="#userReg" >Ghi danh</button>
                    <button className="btn btn-warning mx-1" >Sửa</button>
                    <button className="btn btn-danger mx-1" >Xóa</button>
                </td>
            </tr>
        })

    }
    return (
        <div className="details container-fluid card text-center">
            {/* Header */}
            <div className="card-header myCardHeader">
                <div className="row">
                    <div className="col-md-3 text-left ">
                        <button className="btn btn-success" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm người dùng</button>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Nhập vào tài khoản hoặc họ tên người dùng" id="searchName" />
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-right ">
                        <span className="text-right text-dark font-weight-bold fs-1">Chào Trang,</span>
                        <img className="rounded-circle ml-2" style={{ width: '40px', height: '40px' }} src="../img/logo512.png" alt="" />
                        <span className="dropdown">
                            <button className="btn btn-lg btn-white dropdown-toggle ml-1" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">

                            </button>
                            <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Cập nhật thông tin</a></li>
                                <li><a className="dropdown-item" href="#">Đăng xuất</a></li>
                            </ul>
                        </span>

                    </div>

                </div>
            </div>
            {/* Body */}
            <div className="container">

                <table className="table table-bordered table-hover myTable">
                    <thead className="text-dark bg-light">
                        <tr>
                            <th className="align-middle">STT</th>
                            <th className="align-middle col-1">Tài khoản</th>
                            <th className="align-middle col-1">Mật khẩu</th>
                            <th className="align-middle col-2 ">Họ và tên</th>
                            <th className="align-middle col-2 ">Email</th>
                            <th className="align-middle col-2 ">Số điện thoại</th>

                            <th className="align-middle col-4"><em className="fa fa-cog" /></th>
                        </tr>
                    </thead>
                    <tbody id="tableDanhSach" >
                        {renderUserList(currentItems)}
                    </tbody>
                </table>
            </div>

            {/* The Modal */}
            <UserModal />
            <UserRegisterModal />
            <ReactPaginate
                nextLabel="Sau >"
                pageRangeDisplayed={5}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                previousLabel="< Trước"
                pageClassName="page-item"
                pageLinkClassName="pageLinkPages"
                previousClassName="page-item"
                previousLinkClassName="pageLinkPages"
                nextClassName="page-item"
                nextLinkClassName="pageLinkPages"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="pageLinkPages"
                containerClassName="paginationPages"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}
