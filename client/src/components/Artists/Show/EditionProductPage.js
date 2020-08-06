import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import * as actions from '../../../actions/index';
import DetailsWithPrice from './editionProduct/DetailsWithPrice';
import DetailsTopTabs from './editionProduct/DetailsTopTabs';
import Portfolio from './ProductCommon/Portfolio';
import 'react-image-lightbox/style.css';

class EditionProductPage extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchArtist(id);
    window.onpopstate = this.onBackButtonEvent;
  }

  onBackButtonEvent = (e) => {
    e.preventDefault();
    this.goBack('/');
  };

  selectImage = (index) => {
    this.setState({
      photoIndex: index,
      isOpen: true,
    });
  };

  render() {
    const {
      _id,
      name,
      intro,
      productImgs,
      portfolioImgs,
      profileImg,
      reviews,
      products,
    } = this.props.artist;
    const { photoIndex } = this.state;
    // const { key, width, height, quantity, price } = products[0];
    // const productName = products.name;

    if (name && products) {
      const imgs = [...productImgs, ...portfolioImgs];
      const { key, width, height, quantity, price } = products[0];
      const productName = products[0].name;

      return (
        <div>
          <div>
            <section>
              <div className='collection-wrapper'>
                <div className='container'>
                  <div className='row'>
                    <div
                      onClick={() => {
                        this.selectImage(0);
                      }}
                      className='col-lg-6 product-thumbnail'
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={`https://artbanana-resized.s3.ap-northeast-2.amazonaws.com/${key}`}
                        className='img-fluid image_zoom_cls-0'
                        alt={name}
                      />
                    </div>
                    <DetailsWithPrice
                      name={name}
                      productName={productName}
                      price={price}
                      width={width}
                      height={height}
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
                      quantity={quantity}
                    />
                  </div>
                </div>
              </div>
            </section>
            <Portfolio
              portfolioImgs={portfolioImgs}
              productImgs={productImgs}
            />
          </div>
          {this.state.isOpen && imgs ? (
            <Lightbox
              mainSrc={`https://artbanana.s3.ap-northeast-2.amazonaws.com/${imgs[photoIndex].key}`}
              nextSrc={`https://artbanana.s3.ap-northeast-2.amazonaws.com/${
                imgs[(photoIndex + 1) % imgs.length]
              }`}
              prevSrc={`https://artbanana.s3.ap-northeast-2.amazonaws.com/${
                imgs[(photoIndex + imgs.length - 1) % imgs.length].key
              }`}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() => {
                this.setState({
                  photoIndex: (photoIndex + imgs.length - 1) % imgs.length,
                });
              }}
              onMoveNextRequest={() => {
                this.setState({
                  photoIndex: (photoIndex + 1) % imgs.length,
                });
              }}
            />
          ) : null}
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist };
};

export default connect(mapStateToProps, actions)(EditionProductPage);
