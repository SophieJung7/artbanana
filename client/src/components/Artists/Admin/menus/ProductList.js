import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { fetchOneArtistProducts, deleteProduct } from '../../../../actions';
import SidebarWrapper from '../sidebar/SidebarWrapper';

class ProductList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const artistId = this.props.match.params.id;
    this.props.fetchOneArtistProducts(artistId);
  }

  deleteProduct = async (productId) => {
    try {
      await this.props.deleteProduct(productId);
      alert('제품이 삭제되었습니다.');
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  renderProducts() {
    if (this.props.products.length > 0) {
      return this.props.products.map(({ _id, name, price, productImgs }) => {
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
              <div
                className='col mt-3'
                style={{
                  paddingLeft: '0',
                  textAlign: 'center',
                }}
              >
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
                <div className='mt-3'>
                  <Link
                    to={`/products/edit-product/${_id}`}
                    className='btn btn-solid mr-4'
                  >
                    수정하기
                  </Link>
                  <button
                    className='btn btn-solid'
                    onClick={() => this.deleteProduct(_id)}
                    style={{
                      backgroundImage:
                        'linear-gradient(30deg, black 50%, transparent 50%)',
                      color: 'white',
                      borderColor: 'black',
                    }}
                  >
                    삭제하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <h4>등록된 제품이 없습니다. 제품을 추가해주세요!^^</h4>
        <Link
          to={`/products/add-product/${this.props.match.params.id}`}
          className='btn btn-solid mt-4 px-4'
          style={{ fontSize: '1.2rem' }}
        >
          제품 추가하기
        </Link>
      </div>
    );
  }

  render() {
    return (
      <SidebarWrapper
        artistId={this.props.match.params.id}
        breadTitle='제품리스트/ 제품정보수정'
        breadParent='아티스트페이지'
      >
        <div className='container-fluid'>
          <div className='my-5'>
            <section className='portfolio-section portfolio-padding pt-0 port-col zoom-gallery'>
              <div className='container'>
                <div className='isotopeContainer row'>
                  <Masonry
                    breakpointCols='2'
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'
                  >
                    {/* SHOW Products */}
                    {this.renderProducts()}
                  </Masonry>
                </div>
              </div>
            </section>
          </div>
        </div>
      </SidebarWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist, products: state.products };
};

export default connect(mapStateToProps, {
  fetchOneArtistProducts,
  deleteProduct,
})(ProductList);
