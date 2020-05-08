import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import * as actions from '../../actions';
import catLogo from '../../assets/logos/cat.svg';

// React-icons
import { IoIosSearch, IoMdPerson, IoIosHome } from 'react-icons/io';
import { FaKiwiBird } from 'react-icons/fa';

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
    switch (this.props.auth) {
      case null:
        return;
      case false:
        // ****** 로그인 안했을때! ****** //
        return (
          <ul>
            <li>
              <Link to="/signin" className="nav-link make-link-black">
                로그인
              </Link>
            </li>
            <li>
              <Link to="/signup" className="btn btn-solid px-4">
                화원가입
              </Link>
            </li>
          </ul>
        );
      default:
        // ****** 로그인 했을때! ****** //
        return (
          <ul>
            <li>
              <Link to="/mypage" className="nav-link make-link-black">
                마이페이지
              </Link>
            </li>
            <li>
              <Link to="/change-password" className="nav-link make-link-black">
                비밀번호변경
              </Link>
            </li>
            <li>
              <button onClick={this.props.signOut} className="btn btn-solid">
                로그아웃
              </button>
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
    return (
      <div>
        <header
          id="sticky"
          className="sticky"
          style={{ backgroundColor: '#1cdffe' }}
        >
          <div className="mobile-fix-option"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="main-menu" style={{ height: '9vh' }}>
                  <div className="menu-left">
                    <Link to="/">
                      <div
                        className="d-flex align-items-center"
                        style={{ paddingTop: '2vh', paddingBottom: '2vh' }}
                      >
                        <div className="d-inline mr-2">
                          <img
                            src={catLogo}
                            width="30"
                            height="30"
                            className="align-top"
                            alt=""
                          />
                        </div>
                        <div className="d-inline catcnap-logo-text mt-1">
                          CatSnap
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="menu-right pull-right">
                    {/*Top Navigation Bar Component*/}
                    <div>
                      <div className="icon-nav">
                        <ul>
                          {/* SEARCH */}
                          <li className="onhover-div mobile-search">
                            <HashLink to="/#prolist" className="search-link">
                              <IoIosSearch
                                style={{ width: '2em', height: '2em' }}
                              />
                            </HashLink>
                          </li>
                          {/* Go back to Homepage */}
                          <li className="d-block d-sm-none onhover-div mobile-globe">
                            <Link to="/" className="search-link">
                              <IoIosHome
                                style={{ width: '2em', height: '2em' }}
                              />
                            </Link>
                          </li>
                          {/* SIGN IN */}
                          <li className="onhover-div mobile-setting mobile-person">
                            <div>
                              <IoMdPerson
                                style={{ width: '2em', height: '2em' }}
                              />
                            </div>
                            <div className="show-div setting">
                              {this.renderAuth()}
                            </div>
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
        <div id="search-overlay" className="search-overlay">
          <div>
            <span
              className="closebtn"
              onClick={this.closeSearch}
              title="Close Overlay"
            >
              ×
            </span>
            <div className="overlay-content">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Search a Product"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-search"></i>
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

const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, actions)(Header);
