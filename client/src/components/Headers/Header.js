import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlActions } from 'react-redux-multilingual';
import { withTranslate } from 'react-redux-multilingual';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import * as actions from '../../actions';
import store from '../../store';

// React-icons
import { IoIosSearch, IoMdPerson, IoMdBasket, IoMdHeart } from 'react-icons/io';
import { GiAges } from 'react-icons/gi';

class Header extends Component {
  /*=====================
         Pre loader
     ==========================*/

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  changeLanguage(lang, e) {
    e.preventDefault();
    //   Cookie expires in 365 days
    Cookie.set('language', lang, {
      expires: 365
    });
    store.dispatch(IntlActions.setLocale(lang));
  }

  handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 576) {
        document.getElementById('sticky').classList.remove('fixed');
      } else document.getElementById('sticky').classList.add('fixed');
    } else {
      document.getElementById('sticky').classList.remove('fixed');
    }
  };
  renderAuth() {
    const { translate } = this.props;
    switch (this.props.auth) {
      case null:
        return;
      case false:
        // ****** 로그인 안했을때! ****** //
        return (
          <ul>
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
            <li>
              <Link to='/signup' className='nav-link make-link-black'>
                {translate('Apply_for_photographer')}
              </Link>
            </li>
          </ul>
        );
      default:
        // ****** 로그인 했을때! ****** //
        return (
          <ul>
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
              <Link to='/signup' className='nav-link make-link-black'>
                {translate('Apply_for_photographer')}
              </Link>
            </li>
            <li>
              <a
                href={null}
                onClick={this.props.signOut}
                className='nav-link make-link-black'
              >
                {translate('Logout')}
              </a>
            </li>
          </ul>
        );
    }
  }

  openNav() {
    var openmyslide = document.getElementById('mySidenav');
    if (openmyslide) {
      openmyslide.classList.add('open-side');
    }
  }
  openSearch() {
    document.getElementById('search-overlay').style.display = 'block';
  }

  closeSearch() {
    document.getElementById('search-overlay').style.display = 'none';
  }

  /*=====================
         Change Language and Set Cookie 
     ==========================*/

  render() {
    const { translate } = this.props;
    return (
      <div>
        <header id='sticky' className='sticky'>
          <div className='mobile-fix-option'></div>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='main-menu' style={{ height: '9vh' }}>
                  <div className='menu-left'>
                    {/* <div className='brand-logo'>CatSnap</div> */}
                    <Link to='/'>
                      <div
                        className='d-flex align-items-center'
                        style={{ paddingTop: '2vh', paddingBottom: '2vh' }}
                      >
                        <GiAges
                          className='d-inline mr-2'
                          style={{ fontSize: '2rem', color: 'black' }}
                        />
                        <div className='d-inline catcnap-logo-text mt-1'>
                          Pro
                          <div
                            className='d-inline'
                            style={{ color: '#ffce03' }}
                          >
                            In
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='menu-right pull-right'>
                    {/*Top Navigation Bar Component*/}
                    <div>
                      <div className='icon-nav'>
                        <ul>
                          {/* SEARCH */}
                          <li className='onhover-div mobile-search'>
                            <div>
                              <IoIosSearch
                                onClick={this.openSearch}
                                style={{ width: '2em', height: '2em' }}
                              />
                            </div>
                          </li>
                          {/* SIGN IN */}
                          <li className='onhover-div mobile-setting mobile-person'>
                            <div>
                              <IoMdPerson
                                style={{ width: '2em', height: '2em' }}
                              />
                            </div>
                            <div className='show-div setting'>
                              {this.renderAuth()}
                            </div>
                          </li>
                          {/* FAVOURITE */}
                          <li className='onhover-div mobile-setting mobile-heart'>
                            <div>
                              <IoMdHeart
                                style={{ width: '2em', height: '2em' }}
                              />
                            </div>
                            <div className='show-div setting'>
                              <ul>
                                <li>
                                  <Link to={null}>찜한 포토그래퍼보기</Link>{' '}
                                </li>
                              </ul>
                            </div>
                          </li>
                          {/* BASKET */}
                          <li className='onhover-div mobile-setting mobile-basket'>
                            <div>
                              <Link to='/basket' style={{ color: 'black' }}>
                                <IoMdBasket
                                  style={{ width: '2em', height: '2em' }}
                                />
                              </Link>
                            </div>
                            {/* <div className='show-div setting'>
                              <ul>
                                <li>
                                  <Link to={null}>장바구니</Link>{' '}
                                </li>
                                <li>
                                  <Link to={null}>찜한목록</Link>{' '}
                                </li>
                              </ul>
                            </div> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id='search-overlay' className='search-overlay'>
          <div>
            <span
              className='closebtn'
              onClick={this.closeSearch}
              title='Close Overlay'
            >
              ×
            </span>
            <div className='overlay-content'>
              <div className='container'>
                <div className='row'>
                  <div className='col-xl-12'>
                    <form>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Search a Product'
                        />
                      </div>
                      <button type='submit' className='btn btn-primary'>
                        <i className='fa fa-search'></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, actions)(withTranslate(Header));
