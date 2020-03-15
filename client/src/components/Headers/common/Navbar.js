import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlActions } from 'react-redux-multilingual';
import { withTranslate } from 'react-redux-multilingual';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import * as actions from '../../../actions';
import store from '../../../store';
import { FaBars } from 'react-icons/fa';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navClose: { right: '0px' }
    };
  }

  componentWillMount() {
    if (window.innerWidth < 750) {
      this.setState({ navClose: { right: '-410px' } });
    }
    if (window.innerWidth < 1199) {
      this.setState({ navClose: { right: '-300px' } });
    }
  }
  changeLanguage(lang, e) {
    e.preventDefault();
    //   Cookie expires in 365 days
    Cookie.set('language', lang, {
      expires: 365
    });
    store.dispatch(IntlActions.setLocale(lang));
  }

  handleSubmenu = event => {
    if (event.target.classList.contains('sub-arrow')) return;
    if (event.target.nextElementSibling.classList.contains('opensubmenu'))
      event.target.nextElementSibling.classList.remove('opensubmenu');
    else {
      document.querySelectorAll('.nav-submenu').forEach(function(value) {
        value.classList.remove('opensubmenu');
      });
      event.target.nextElementSibling.classList.add('opensubmenu');
    }
  };

  renderAuth() {
    const { translate } = this.props;
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul className='nav-menu' style={this.state.navClose}>
            <li className='back-btn' onClick={this.closeNav.bind(this)}>
              <div className='mobile-back text-right d-sm-none'>
                <span>Back</span>
                <i className='fa fa-angle-right pl-2' aria-hidden='true'></i>
              </div>
            </li>
            <li>
              <div className='nav-link' onClick={e => this.handleSubmenu(e)}>
                {translate('Language')}
                <span className='sub-arrow'></span>
              </div>
              <ul className='nav-submenu'>
                <li>
                  <div
                    className='nav-sub'
                    onClick={e => this.changeLanguage('en', e)}
                  >
                    English
                  </div>
                </li>
                <li>
                  <div
                    className='nav-sub'
                    onClick={e => this.changeLanguage('ko', e)}
                  >
                    한국어
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/signup' className='nav-link make-link-black'>
                {translate('Apply_for_photographer')}
              </Link>
            </li>
            <li>
              <Link to='/signin' className='nav-link make-link-black'>
                {translate('Login')}
              </Link>
            </li>

            <li>
              <Link to='/signup' className='btn btn-yellow px-4'>
                {translate('Signup')}
              </Link>
            </li>
          </ul>
        );
      default:
        return (
          <ul className='nav-menu' style={this.state.navClose}>
            <li className='back-btn' onClick={this.closeNav.bind(this)}>
              <div className='mobile-back text-right'>
                <span>Back</span>
                <i className='fa fa-angle-right pl-2' aria-hidden='true'></i>
              </div>
            </li>
            <li>
              <div className='nav-link' onClick={e => this.handleSubmenu(e)}>
                {translate('Language')}
                <span className='sub-arrow'></span>
              </div>
              <ul className='nav-submenu'>
                <li>
                  <div
                    className='nav-sub'
                    onClick={e => this.changeLanguage('en', e)}
                  >
                    English
                  </div>
                </li>
                <li>
                  <div
                    className='nav-sub'
                    onClick={e => this.changeLanguage('ko', e)}
                  >
                    한국어
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/signup' className='nav-link make-link-black'>
                {translate('Apply_for_photographer')}
              </Link>
            </li>
            <li>
              <Link to='/mypage' className='nav-link make-link-black'>
                {translate('My_page')}
              </Link>
            </li>
            <li>
              <Link to='/change-password' className='nav-link make-link-black'>
                {translate('Change_password')}
              </Link>
            </li>

            <li>
              <button
                onClick={this.props.signOut}
                className='nav-link mr-4 make-link-black btn-clear'
              >
                {translate('Signup')}
              </button>
            </li>
          </ul>
        );
    }
  }

  openNav() {
    console.log('open');
    this.setState({ navClose: { right: '0px' } });
  }
  closeNav() {
    this.setState({ navClose: { right: '-410px' } });
  }

  onMouseEnterHandler() {
    if (window.innerWidth > 1199) {
      document.querySelector('#main-menu').classList.add('hover-unset');
    }
  }

  render() {
    const { translate } = this.props;
    return (
      <div className='main-navbar'>
        <div id='mainnav'>
          <div
            className='toggle-nav d-sm-none'
            onClick={this.openNav.bind(this)}
          >
            <FaBars className='sidebar-bar' style={{ fontSize: '20px' }} />
          </div>
          {this.renderAuth()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, actions)(withTranslate(NavBar));
