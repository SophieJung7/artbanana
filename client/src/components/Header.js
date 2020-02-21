import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import catLogo from '../assets/logos/cat.svg';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <Navbar expand="lg">
                    <Link to="/">
                        <div className="d-flex align-items-center">
                            <div className="d-inline mr-2">
                                <img src={ catLogo } width="30" height="30" className="align-top" alt=""></img>
                            </div>
                            <div className="d-inline catcnap-logo-text mt-1">CatSnap</div>
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Link to="/signup" className="nav-link mr-4 make-link-black">사진작가 등록하기 </Link>
                        <Link to="/signin" className="nav-link mr-4 make-link-black">로그인</Link>
                        <Link to="/signup" className="btn btn-yellow px-4">무료 회원가입</Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        );
    }
}


export default connect(null, actions)(Header);
