import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import TitleTemp from '../../../TitleTemp';

class Portfolio extends Component {
  state = {
    masonryBreakpoint: 4,
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

  renderImgs = () => {
    const { imgs } = this.props;
    return imgs.map(({ _id, key }) => {
      return (
        <div key={_id} className='isotopeSelector fashion'>
          <div className='overlay'>
            <div className='border-portfolio'>
              <a
                href='/'
                className='overlay-background d-flex justify-content-center align-items-center'
              >
                <br style={{ display: 'none' }} />
              </a>
              <img
                src={`https://artbanana.s3.ap-northeast-2.amazonaws.com/${key}`}
                alt='portfolio'
              />
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    if (this.props.imgs) {
      return (
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
                  {/* SHOW Artists */}
                  {this.renderImgs()}
                </Masonry>
              </div>
            </div>
          </section>
        </div>
      );
    }
    return null;
  }
}

export default Portfolio;
