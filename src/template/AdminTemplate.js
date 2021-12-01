import React, { Fragment, useState } from 'react'
import { Route } from 'react-router'

export default function AdminTemplate(props) {
  const [active, setactive] = useState("")
  const addID = () => {
    if (active == "") {
      setactive("active")
    } else {
      setactive("")
    }
  }

  return <Fragment>
    <Route exact path={props.path} render={(propsRoute) => {
      return <Fragment>
        
        <div className=" container-fluid">
          {/* Right  */}
          <div id="content" className="text-center wrapper">
            <nav id="sidebar" className={active}>
              <div className="sidebar-header">
                <h3>Elearning</h3>
                {/* <strong>ML</strong> */}
                <button onClick={addID} type="button" id="sidebarCollapse" className="btn btn-light mx-2">
                  <span>
                    <i className="fa fa-list" />
                  </span>
                  {/* <span>Ẩn/Hiện</span> */}
                </button>
              </div>
              <ul className="list-unstyled components">
                <li className="">
                  <a href="#homeSubmenu">
                    <i className="fa fa-home" />
                    Quản lý người dùng
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-briefcase" />
                    Quản lý khóa học
                  </a>

                </li>

              </ul>

            </nav>
            {/* endRight */}

            {/* Left  */}
            <props.component {...propsRoute} />
            {/* endLeft */}
          </div>

        </div>



      </Fragment>
    }} />

  </Fragment>
}
