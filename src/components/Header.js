

import React, { Component } from 'react';
//import { connect } from 'react-redux';


class Header extends Component {
  render() {
    return (
        <nav className="nav  bg-dark">
            <a className="nav-link text-white active" >Component</a>
            <a className="nav-link text-white" >Trang Chủ</a>
            <a className="nav-link text-white" >Danh Mục Sản Phẩm</a>
        </nav>
    );
  }
}


export default Header;
