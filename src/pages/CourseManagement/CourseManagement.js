import React from 'react'
import '../Admin/admin.css'
import CourseModal from './CourseModal'
import CourseRegisterModal from './CourseRegisterModal'
import {useState,useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

export default function CourseManagement() {

    const [course, setCourse] = useState({
        courseArray: [],
    });
    const getCourseList = () => {
        let promise = axios({
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
            method: 'GET',
            headers: {
                "TokenCybersoft": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjEyLzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTcyMTYwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjQ5ODY5MjAwfQ.RkFKrifGWTY3MP0bQtIpvA5WpWWrcSkGjDSw01LwhuI'
            }
        });
        promise.then((result) => {
            setCourse({ courseArray: result.data })
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

    useEffect(()=>{
        getCourseList()
    },[])

    useEffect(() => {
        // getUserList()
        const endOffset = itemOffset + 5;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(course.courseArray.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(course.courseArray.length / 5));
        // console.log(currentItems)
    },[itemOffset,course])

    const handlePageClick = (event) => {
        const newOffset = event.selected * 5 % course.courseArray.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    

    const renderCourseList = (currentItems) => {
        return currentItems.map((item, index) => {
            return <tr>
                <td className="align-middle">{itemOffset+index + 1}</td>
                <td className="align-middle text-wrap">{item.maKhoaHoc}</td>
                <td className="align-middle text-wrap">{item.tenKhoaHoc}</td>
                <td className="align-middle text-wrap" style={{backgroundImage:`url(${item.hinhAnh})`,backgroundSize:"cover"}}>
                                
                    </td>
                <td className="align-middle text-break">{item.luotXem}</td>
                <td className="align-middle text-wrap">{item.nguoiTao.hoTen} </td>
                <td>
                    <button type="button" className="btn btn-success mx-1" data-toggle="modal" data-target="#courseReg" >Ghi danh</button>
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
                            <button className="btn btn-success" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm khóa học</button>
                        </div>
                        <div className="col-md-6">
                        <div className="col">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Nhập vào tài khoản hoặc họ tên người dùng" id="searchName" />
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
                                </div>
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
                                <th>STT</th>
                                <th className="nowrap">Mã khóa học
                                    {/* <span>Tài khoản</span>
                                                <i className="fa fa-arrow-up" id="SapXepTang" />
                                                <i className="fa fa-arrow-down" id="SapXepGiam" /> */}
                                </th>
                                <th className="col-2">Tên khóa học</th>
                                <th>Hình ảnh</th>
                                <th>Lượt xem</th>
                                <th>Người tạo</th>

                                <th className="col-4">Thao tác<em className="fa fa-cog ml-3" /></th>
                            </tr>
                        </thead>
                        <tbody id="tableDanhSach" >
                            {renderCourseList(currentItems)}
                        </tbody>
                    </table>
                </div>
                {/* Footer */}
                {/* <div className="card-footer myCardFooter">
                                    <nav>
                                        <ul className="pagination justify-content-center" id="ulPhanTrang">
                                        </ul>
                                    </nav>
                                </div> */}


                {/* The Modal */}
                <CourseModal />
                <CourseRegisterModal/>
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

