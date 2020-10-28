import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import * as actions from '../../actions';
import DetailsWithPrice from './common/DetailsWithPrice';
import DetailsTopTabs from './common/DetailsTopTabs';
import Portfolio from './common/Portfolio';
import 'react-image-lightbox/style.css';

class ProductPage extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    selectedImg: '',
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    await this.props.fetchProduct(id);
    if (this.props.product) {
      const artistId = this.props.product.artistId;
      this.props.fetchArtist(artistId);
      if (this.props.product.productImgs[0]) {
        this.setState({ selectedImg: this.props.product.productImgs[0].key });
      }
    }
    window.onpopstate = this.onBackButtonEvent;
  };

  onBackButtonEvent = (e) => {
    e.preventDefault();
    this.goBack('/');
  };

  clickBigImg = (index) => {
    this.setState({
      photoIndex: index,
      isOpen: true,
    });
  };

  showThumbnail = (i) => {
    this.setState({
      selectedImg: this.props.product.productImgs[i].key,
      photoIndex: i,
    });
  };

  render() {
    const {
      _id,
      name,
      artistName,
      medium,
      description,
      price,
      productImgs,
    } = this.props.product;
    const { intro, profileImg, portfolioImgs, reviews } = this.props.artist;
    const { photoIndex } = this.state;
    // const { key, width, height, quantity, price } = products[0];
    // const productName = products.name;

    if (name && profileImg) {
      const imgs = [...productImgs, ...portfolioImgs];
      const images = imgs.map(
        (img) => `https://artbanana.s3.ap-northeast-2.amazonaws.com/${img.key}`
      );

      return (
        <div>
          <div>
            <section>
              <div className='collection-wrapper'>
                <div className='container'>
                  <div className='row'>
                    <div
                      onClick={() => {
                        this.clickBigImg(this.state.photoIndex);
                      }}
                      className='col-lg-6 product-thumbnail'
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={`https://artbanana-resized.s3.ap-northeast-2.amazonaws.com/${this.state.selectedImg}`}
                        className='img-fluid image_zoom_cls-0'
                        alt={name}
                      />
                    </div>
                    {/* Desktop Product Images */}
                    <div className='col-2 d-none d-md-block add-product'>
                      <ul>
                        {productImgs.map((img, i) => {
                          return (
                            <li key={i}>
                              <div
                                className='box-input-file mb-1'
                                style={{ marginTop: '0.9rem' }}
                              >
                                <img
                                  className=''
                                  src={`https://artbanana-resized.s3.ap-northeast-2.amazonaws.com/${img.key}`}
                                  style={{
                                    position: 'absolute',
                                    width: '70px',
                                    height: '70px',
                                    left: '0',
                                    right: '0',
                                  }}
                                  onClick={() => {
                                    this.showThumbnail(i);
                                  }}
                                  alt='products'
                                />
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    {/* Mobile Product Images */}
                    <div className='container mt-3 mr-4 d-inline d-block d-md-none'>
                      <ul className='row'>
                        {productImgs.map((img, i) => {
                          return (
                            <li className='col-2 mb-2' key={i}>
                              <img
                                src={`https://artbanana-resized.s3.ap-northeast-2.amazonaws.com/${img.key}`}
                                style={{
                                  width: '40px',
                                  height: '30px',
                                }}
                                onClick={() => {
                                  this.showThumbnail(i);
                                }}
                                alt='products'
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    {/* Price & Product Description */}
                    <DetailsWithPrice
                      name={artistName}
                      productName={name}
                      price={price}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className='tab-product m-0'>
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-12 col-lg-12'>
                    <DetailsTopTabs
                      intro={intro}
                      profileImg={profileImg}
                      artistId={_id}
                      reviews={reviews}
                      medium={medium}
                      description={description}
                    />
                  </div>
                </div>
              </div>
            </section>
            <Portfolio portfolioImgs={portfolioImgs} />
          </div>
          {this.state.isOpen && imgs ? (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          ) : null}
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist, product: state.product };
};

export default connect(mapStateToProps, actions)(ProductPage);
