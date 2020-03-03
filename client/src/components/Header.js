import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlActions } from 'react-redux-multilingual';
import { withTranslate } from 'react-redux-multilingual';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import store from '../store';
import catLogo from '../assets/logos/cat.svg';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends Component {
  changeLanguage(lang, e) {
    e.preventDefault();
    store.dispatch(IntlActions.setLocale(lang));
  }

  renderAuth() {
    const { translate } = this.props;
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'
          >
            <NavDropdown
              title='English'
              id='basic-nav-dropdown'
              className='mr-4'
            >
              <NavDropdown.Item onClick={e => this.changeLanguage('en', e)}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={e => this.changeLanguage('ko', e)}>
                한국어
              </NavDropdown.Item>
            </NavDropdown>
            <Link to='/signup' className='nav-link mr-4 make-link-black'>
              {translate('Apply_for_photographer')}
            </Link>
            <Link to='/signin' className='nav-link mr-4 make-link-black'>
              {translate('Login')}
            </Link>
            <Link to='/signup' className='btn btn-yellow px-4'>
              {translate('Signup')}
            </Link>
          </Navbar.Collapse>
        );
      default:
        return (
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'
          >
            <NavDropdown
              title='English'
              id='basic-nav-dropdown'
              className='mr-4'
            >
              <NavDropdown.Item onClick={e => this.changeLanguage('en', e)}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={e => this.changeLanguage('ko', e)}>
                한국어
              </NavDropdown.Item>
            </NavDropdown>
            <Link to='/signup' className='nav-link mr-4 make-link-black'>
              {translate('Apply_for_photographer')}
            </Link>
            <Link to='/mypage' className='nav-link mr-4 make-link-black'>
              {translate('My_page')}
            </Link>
            <Link
              to='/change-password'
              className='nav-link mr-4 make-link-black'
            >
              {translate('Change_password')}
            </Link>
            <button
              onClick={this.props.signOut}
              className='nav-link mr-4 make-link-black btn-clear'
            >
              {translate('Logout')}
            </button>
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
              <Link to='/' className='d-inline catcnap-logo-text mt-1'>
                CatSnap
              </Link>
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
export default connect(mapStateToProps, actions)(withTranslate(Header));
