import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import * as actions from '../../../actions/index';
import DetailsWithPrice from './pencilProduct/DetailsWithPrice';
import DetailsTopTabs from './pencilProduct/DetailsTopTabs';
import Portfolio from './ProductCommon/Portfolio';
import 'react-image-lightbox/style.css';

class PencilProductPage extends Component {
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
      productImgs,
      portfolioImgs,
      profileImg,
      reviews,
    } = this.props.artist;
    const { photoIndex } = this.state;

    if (name) {
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
                        this.selectImage(0);
                      }}
                      className='col-lg-6 product-thumbnail'
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={`https://artbanana-resized.s3.ap-northeast-2.amazonaws.com/${imgs[0].key}`}
                        className='img-fluid image_zoom_cls-0'
                        alt={name}
                      />
                    </div>
                    <DetailsWithPrice name={name} />
                  </div>
                </div>
              </div>
            </section>
            <section className='tab-product m-0'>
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-12 col-lg-12'>
                    <DetailsTopTabs
                      profileImg={profileImg}
                      artistId={_id}
                      reviews={reviews}
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
          ) : // <Lightbox
          //   onImageLoadError={(imageSrc, _srcType, errorEvent) =>
          //     console.log(imageSrc)
          //   }
          //   mainSrc={`https://artbanana.s3.ap-northeast-2.amazonaws.com/${imgs[photoIndex].key}`}
          //   nextSrc={`https://artbanana.s3.ap-northeast-2.amazonaws.com/${
          //     imgs[(photoIndex + 1) % imgs.length]
          //   }`}
          //   prevSrc={`https://artbanana.s3.ap-northeast-2.amazonaws.com/${
          //     imgs[(photoIndex + imgs.length - 1) % imgs.length].key
          //   }`}
          //   onCloseRequest={() => this.setState({ isOpen: false })}
          //   onMovePrevRequest={() => {
          //     this.setState({
          //       photoIndex: (photoIndex + imgs.length - 1) % imgs.length,
          //     });
          //   }}
          //   onMoveNextRequest={() => {
          //     this.setState({
          //       photoIndex: (photoIndex + 1) % imgs.length,
          //     });
          //   }}
          // />
          null}
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist };
};

export default connect(mapStateToProps, actions)(PencilProductPage);
