import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import catLogo from '../assets/logos/cat.svg';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class Header extends Component {
  renderAuth() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'
          >
            <Link to='/signup' className='nav-link mr-4 make-link-black'>
              사진작가 등록하기{' '}
            </Link>
            <Link to='/signin' className='nav-link mr-4 make-link-black'>
              로그인
            </Link>
            <Link to='/signup' className='btn btn-yellow px-4'>
              무료 회원가입
            </Link>
          </Navbar.Collapse>
        );
      default:
        return (
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'
          >
            <Link to='/signup' className='nav-link mr-4 make-link-black'>
              사진작가 등록하기{' '}
            </Link>
            <Link to='/mypage' className='nav-link mr-4 make-link-black'>
              마이페이지
            </Link>
            <Link
              to='/change-password'
              className='nav-link mr-4 make-link-black'
            >
              비밀번호변경
            </Link>
            <Button
              onClick={this.props.signOut}
              className='nav-link mr-4 make-link-black btn-clear'
            >
              로그아웃
            </Button>
          </Navbar.Collapse>
        );
    }
  }

  render() {
    return (
      <div className='container'>
        <Navbar expand='lg'>
          <Link to='/'>
            <div className='d-flex align-items-center'>
              <div className='d-inline mr-2'>
                <img
                  src={catLogo}
                  width='30'
                  height='30'
                  className='align-top'
                  alt=''
                ></img>
              </div>
              <div className='d-inline catcnap-logo-text mt-1'>CatSnap</div>
            </div>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          {this.renderAuth()}
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, actions)(Header);
