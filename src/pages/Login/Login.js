import React from 'react'
import { useState } from 'react'
import './login.css'
import {Formik,Form,Field} from 'formik'

export default function Login() {
    let[container,setContainer]=useState("container")


    return (
        <div>
                <div className={container} id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Đăng ký</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                            </div>
                            <span>hoặc đăng nhập bằng email</span>
                            <input type="number" placeholder="Tài khoản" />
                            <input type="text" placeholder="Họ tên" />
                            <input type="password" placeholder="Mật khẩu" />
                            <input type="password" placeholder="Nhập lại mật khẩu" />
                            <input type="email" placeholder="Email" />
                            <input type="phone" placeholder="Số điện thoại" />

                            <button>Đăng ký</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Đăng nhập</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                            </div>
                            <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>
                            <input type="email" placeholder="Tài khoản" />
                            <input type="password" placeholder="Mật khẩu" />
                            <a href="#">Quên mật khẩu?</a>
                            <button >Đăng nhập</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Chào mừng bạn đã trở lại!</h1>
                                <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
                                <button onClick={()=>{setContainer("container")}} className="ghost" id="signIn">Đăng nhập</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Xin chào!</h1>
                                <p>Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!</p>
                                <button onClick={()=>{setContainer("container right-panel-active")}} className="ghost" id="signUp">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}