import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'react-image-lightbox';
import TitleTemp from '../../../TitleTemp';
import 'react-image-lightbox/style.css';

class Portfolio extends Component {
  state = {
    masonryBreakpoint: 4,
    photoIndex: 0,
    isOpen: false,
    imgs: [...this.props.productImgs, ...this.props.portfolioImgs],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('load', this.updateMasonry);
    window.addEventListener('resize', this.updateMasonry);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.updateMasonry);
    window.removeEventListener('resize', this.updateMasonry);
  }

  updateMasonry = () => {
    if (window.innerWidth <= 768) {
      this.setState({ masonryBreakpoint: 2 });
    } else {
      this.setState({ masonryBreakpoint: 4 });
    }
  };

  selectImage = (index) => {
    this.setState({
      photoIndex: index,
      isOpen: true,
    });
  };

  renderImgs = () => {
    return this.state.imgs.map(({ _id, key }, index) => {
      return (
        <div key={_id} className='isotopeSelector fashion'>
          <div className='overlay'>
            <div className='border-portfolio'>
              <div
                style={{ cursor: 'pointer' }}
                className='overlay-background d-flex justify-content-center align-items-center'
                onClick={() => this.selectImage(index)}
              >
                <br style={{ display: 'none' }} />
              </div>
              <img
                src={`https://artbanana-resized.s3.ap-northeast-2.amazonaws.com/${key}`}
                alt='portfolio'
              />
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    const { photoIndex, imgs } = this.state;

    if (imgs) {
      return (
        <div>
          <div className='mb-5'>
            <TitleTemp bigTitle='작가 포트폴리오' subTitle='Portfolio Images' />
            <section className='portfolio-section portfolio-padding pt-0 port-col zoom-gallery'>
              <div className='container'>
                <div className='isotopeContainer row'>
                  <Masonry
                    breakpointCols={this.state.masonryBreakpoint}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'
                  >
                    {/* SHOW ARTWORKS */}
                    {this.renderImgs()}
                  </Masonry>
                </div>
              </div>
            </section>
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

export default Portfolio;
