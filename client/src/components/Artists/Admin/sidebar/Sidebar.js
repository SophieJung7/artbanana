import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Settings, List, Plus, Image } from 'react-feather';
import { Link } from 'react-router-dom';
import { fetchArtist } from '../../../../actions';
import UserPanel from './UserPanel';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPath: '1',
      mainmenu: [],
    };
  }

  onItemSelection = (arg, e) => {
    this.setState({ selectedPath: arg.path });
  };

  componentDidMount() {
    const artistId = this.props.artistId;
    this.props.fetchArtist(artistId);
    let mainmenu = [
      {
        title: '제품리스트',
        path: `/products/product-list/${artistId}`,
        icon: List,
        type: 'link',
        active: false,
      },
      {
        title: '제품추가',
        path: `/products/add-product/${artistId}`,
        icon: Plus,
        type: 'link',
        active: false,
      },
      {
        title: '프로필수정',
        path: `/settings/profile/${artistId}`,
        icon: Settings,
        type: 'link',
        active: false,
      },
    ];
    this.setState({ mainmenu });

    var currentUrl = window.location.pathname;

    this.state.mainmenu.filter((items) => {
      if (!items.children) {
        if (items.path === currentUrl) {
          this.setNavActive(items);
          return false;
        }
      }
      items.children.filter((subItems) => {
        if (subItems.path === currentUrl) {
          return this.setNavActive(subItems);
        }
        if (!subItems.children) {
          return false;
        }
        subItems.children.filter((subSubItems) => {
          if (subSubItems.path === currentUrl) {
            return this.setNavActive(subSubItems);
          }
          return null;
        });
        return null;
      });
      return null;
    });
  }

  setNavActive(item) {
    let mainmenu = this.state.mainmenu;
    mainmenu.filter((menuItem) => {
      if (menuItem !== item) {
        return (menuItem.active = false);
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        return (menuItem.active = true);
      }
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems !== item) {
            return (submenuItems.active = false);
          }
          if (submenuItems.children) {
            submenuItems.children.map((childItem) => {
              return (childItem.active = false);
            });
            if (submenuItems.children.includes(item)) {
              submenuItems.active = true;
              menuItem.active = true;
              return null;
            }
          }
          return null;
        });
      }
      return null;
    });
    item.active = !item.active;

    this.setState({
      mainmenu,
    });
  }

  render() {
    const mainmenu = this.state.mainmenu.map((menuItem, i) => (
      <li className={`${menuItem.active ? 'active' : ''}`} key={i}>
        {menuItem.sidebartitle ? (
          <div className='sidebar-title'>{menuItem.sidebartitle}</div>
        ) : (
          ''
        )}
        {menuItem.type === 'sub' ? (
          <button
            className='sidebar-header '
            onClick={() => this.setNavActive(menuItem)}
          >
            <menuItem.icon />
            <span>{menuItem.title}</span>
            <i className='fa fa-angle-right pull-right'></i>
          </button>
        ) : (
          ''
        )}
        {menuItem.type === 'link' ? (
          <Link
            to={`${menuItem.path}`}
            className={`sidebar-header ${menuItem.active ? 'active' : ''}`}
            onClick={() => this.setNavActive(menuItem)}
          >
            <menuItem.icon />
            <span>{menuItem.title}</span>
            {menuItem.children ? (
              <i className='fa fa-angle-right pull-right'></i>
            ) : (
              ''
            )}
          </Link>
        ) : (
          ''
        )}
        {menuItem.children ? (
          <ul
            className={`sidebar-submenu ${menuItem.active ? 'menu-open' : ''}`}
            style={
              menuItem.active
                ? { opacity: 1, transition: 'opacity 500ms ease-in' }
                : {}
            }
          >
            {menuItem.children.map((childrenItem, index) => (
              <li
                key={index}
                className={
                  childrenItem.children
                    ? childrenItem.active
                      ? 'active'
                      : ''
                    : ''
                }
              >
                {childrenItem.type === 'sub' ? (
                  <button onClick={() => this.setNavActive(childrenItem)}>
                    <i className='fa fa-circle'></i>
                    {childrenItem.title}{' '}
                    <i className='fa fa-angle-right pull-right'></i>
                  </button>
                ) : (
                  ''
                )}

                {childrenItem.type === 'link' ? (
                  <Link
                    to={`${process.env.PUBLIC_URL}${childrenItem.path}`}
                    className={childrenItem.active ? 'active' : ''}
                    onClick={() => this.setNavActive(childrenItem)}
                  >
                    <i className='fa fa-circle'></i>
                    {childrenItem.title}{' '}
                  </Link>
                ) : (
                  ''
                )}
                {childrenItem.children ? (
                  <ul
                    className={`sidebar-submenu ${
                      childrenItem.active ? 'menu-open' : 'active'
                    }`}
                  >
                    {childrenItem.children.map((childrenSubItem, key) => (
                      <li
                        className={childrenSubItem.active ? 'active' : ''}
                        key={key}
                      >
                        {childrenSubItem.type === 'link' ? (
                          <Link
                            to={`${process.env.PUBLIC_URL}${childrenSubItem.path}`}
                            className={childrenSubItem.active ? 'active' : ''}
                            onClick={() => this.setNavActive(childrenSubItem)}
                          >
                            <i className='fa fa-circle'></i>
                            {childrenSubItem.title}
                          </Link>
                        ) : (
                          ''
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  ''
                )}
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </li>
    ));

    return (
      <Fragment>
        <div className='page-sidebar'>
          <div className='sidebar custom-scrollbar'>
            {this.props.artist.profileImg && (
              <UserPanel
                profilePhoto={`https://artbanana.s3.ap-northeast-2.amazonaws.com/${this.props.artist.profileImg}`}
                artistName={`${this.props.artist.name}`}
              />
            )}
            <ul className='sidebar-menu'>{mainmenu}</ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist };
};

export default connect(mapStateToProps, { fetchArtist })(Sidebar);
