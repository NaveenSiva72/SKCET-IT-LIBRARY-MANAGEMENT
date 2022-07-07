import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Sidebar = () => {
  return (
    <div className="container-fluid ">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2  px-0 bg-dark">
          <div className="d-flex flex-column align-items-start align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="#" className="navbar-brand text-light mt-5 mb-auto">
                  <i className="fs-4  bi-house"></i>{" "}
                  <span className=" d-none d-sm-inline ">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  className="navbar-brand text-light mt-5"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="d-sm-inline">Dashboard</span>{" "}
                </a>
                <ul
                  className="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                </ul>
              </li>
              <li>
                <a href="#" className="navbar-brand text-light mt-5">
                  <i className="fs-5 bi-table"></i>{" "}
                  <span className="d-none d-sm-inline">Orders</span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu2"
                  data-bs-toggle="collapse"
                  className="navbar-brand text-light mt-5 "
                >
                  <i className="fs-4 bi-bootstrap"></i>{" "}
                  <span className="d-none d-sm-inline">Bootstrap</span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu3"
                  data-bs-toggle="collapse"
                  className="navbar-brand text-light mt-5"
                >
                  <i className="fs-4 bi-grid"></i>{" "}
                  <span className="d-none d-sm-inline">Products</span>{" "}
                </a>
               
              </li>
              <li>
                <a href="#" className="navbar-brand text-light mt-5">
                  <i className="fs-4 bi-people"></i>{" "}
                  <span className="d-none d-sm-inline">Customers</span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3">Content area...</div>
      </div>
    </div>
  );
};

export default Sidebar;
