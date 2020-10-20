import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import * as actions from '../../actions';
import TitleTemp from '../TitleTemp';

class ProductsList extends Component {
  state = {
    // *** HOW MANY PRODUCTS per row will be shown on landing page. IMPORTANT.
    masonryBreakpoint: 3,
    products: [],
  };

  componentDidMount = async () => {
    this.props.fetchEditionArtists();
    window.scrollTo(0, 0);
    window.addEventListener('load', this.updateMasonry);
    window.addEventListener('resize', this.updateMasonry);
    const response = await axios.get(`/api/category/${this.props.category}`);
    this.setState({ products: response.data });
  };

  componentWillUnmount() {
    window.removeEventListener('load', this.updateMasonry);
    window.removeEventListener('resize', this.updateMasonry);
  }

  updateMasonry = () => {
    if (window.innerWidth <= 768) {
      // *** HOW MANY PRODUCTS per row will be shown on landing page. IMPORTANT.
      this.setState({ masonryBreakpoint: 2 });
    } else {
      this.setState({ masonryBreakpoint: 3 });
    }
  };

  showTitle = () => {
    switch (this.props.category) {
      case 'pencil':
        return (
          <TitleTemp
            bigTitle='소중한 사진을 펜슬드로잉 작품으로 바꿔보세요!'
            subTitle='Transform your photos to alive artworks!'
          />
        );
      case 'illustration':
        return (
          <TitleTemp
            bigTitle='사진을 재밌는 일러스트레이션 작품으로 바꿔보세요!'
            subTitle='Meet beautiful illustrations created with your photos!'
          />
        );
      case 'photoshop':
        return (
          <TitleTemp
            bigTitle='소중한 사진을 작품으로 만들어보세요!'
            subTitle='Make your photos even more precious!'
          />
        );
      default:
        return (
          <TitleTemp
            bigTitle='소중한 사진을 작품으로 만들어보세요!'
            subTitle='Make your photos even more precious!'
          />
        );
    }
  };

  renderProducts = () => {
    if (this.state.products) {
      return this.state.products.map(
        ({ _id, artistProfile, artistName, name, price, productImgs }) => {
          return (
            <div key={_id} className='isotopeSelector fashion'>
              <div className='overlay'>
                <div className='border-portfolio'>
                  <a
                    href={`/products/show/${_id}`}
                    className='overlay-background d-flex justify-content-center align-items-center'
                  >
                    <br style={{ display: 'none' }} />
                  </a>
                  <img
                    src={`https://artbanana-resized.s3.ap-northeast-2.amazonaws.com/${
                      productImgs[0]
                        ? productImgs[0].key
                        : 'website/photo_icon.jpg'
                    }`}
                    alt={name}
                  />
                </div>
              </div>
              <div className='mt-2row d-flex align-items-center'>
                <div className='col-4'>
                  <img
                    className='avatar-img rounded-circle'
                    src={`https://artbanana-resized.s3.ap-northeast-2.amazonaws.com/${artistProfile}`}
                    style={{ width: '3rem', height: '3rem' }}
                    alt='profile'
                  />
                </div>
                <div
                  className='col mt-3'
                  style={{
                    paddingLeft: '0',
                  }}
                >
                  <div
                    style={{
                      color: '#777',
                      fontSize: '1rem',
                      fontWeight: '700',
                    }}
                  >
                    {name}
                  </div>
                  <div
                    className='d-inline'
                    style={{
                      color: '#cbcbcb',
                      fontFamily: 'Work Sans',
                      fontSize: '1.1rem',
                    }}
                  >
                    by
                  </div>
                  <div
                    className='d-inline ml-1'
                    style={{
                      color: '#777',
                      fontSize: '1rem',
                      fontWeight: '700',
                    }}
                  >
                    {artistName}
                  </div>
                  <div>
                    <del
                      style={{ fontSize: '0.9rem', fontWeight: '700' }}
                    >{`${price.sm.toLocaleString('en')}원`}</del>
                    <span
                      className='ml-1'
                      style={{ color: '#d8a6a2', fontWeight: '700' }}
                    >
                      50% Off
                    </span>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: '700' }}>
                    {`${(price.sm * 0.5).toLocaleString('en')}원`}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      );
    }
    return null;
  };

  render() {
    return (
      <div className='my-5'>
        {this.showTitle()}
        <section className='portfolio-section portfolio-padding pt-0 port-col zoom-gallery'>
          <div className='container'>
            <div className='isotopeContainer row'>
              <Masonry
                breakpointCols={this.state.masonryBreakpoint}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
              >
                {/* SHOW Artists */}
                {this.renderProducts()}
              </Masonry>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { editionArtists: state.editionArtists };
};

export default connect(mapStateToProps, actions)(ProductsList);
