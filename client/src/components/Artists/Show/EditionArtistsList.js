import React, { Component } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css';
import * as actions from '../../../actions/index';
import TitleTemp from '../../TitleTemp';

class ArtistsList extends Component {
  state = {
    masonryBreakpoint: 4,
  };

  componentDidMount() {
    this.props.fetchEditionArtists();
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

  renderArtists = () => {
    if (this.props.editionArtists) {
      return this.props.editionArtists.map(
        ({ _id, name, address, profileImg, products }) => {
          const { key, price } = products[0];
          return (
            <div key={_id} className='isotopeSelector fashion'>
              <div className='overlay'>
                <div className='border-portfolio'>
                  <a
                    href={`/artists/edition/show/${_id}`}
                    className='overlay-background d-flex justify-content-center align-items-center'
                  >
                    <br style={{ display: 'none' }} />
                  </a>
                  <img
                    src={`https://artbanana-resized.s3.ap-northeast-2.amazonaws.com/${key}`}
                    alt={name}
                  />
                </div>
              </div>
              <div className='mt-2 row d-flex align-items-center'>
                <div className='col-3'>
                  <img
                    className='avatar-img rounded-circle'
                    src={`https://artbanana-resized.s3.ap-northeast-2.amazonaws.com/${profileImg}`}
                    style={{ width: '3rem', height: '3rem' }}
                    alt='profile'
                  />
                </div>
                <div
                  className='col ml-2'
                  style={{
                    paddingLeft: '0',
                  }}
                >
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
                    {name}
                  </div>
                  <div>
                    <del style={{ fontSize: '0.9rem', fontWeight: '700' }}>{`${(
                      price * 2
                    ).toLocaleString('en')}원`}</del>
                    <span
                      className='ml-1'
                      style={{ color: '#d8a6a2', fontWeight: '700' }}
                    >
                      50% Off
                    </span>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: '700' }}>
                    {`${price.toLocaleString('en')}원`}
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
        <TitleTemp
          bigTitle='아트에디션을 만나보세요!'
          subTitle='Brighten your home with art editions!'
        />
        <section className='portfolio-section portfolio-padding pt-0 port-col zoom-gallery'>
          <div className='container'>
            <div className='isotopeContainer row'>
              <Masonry
                breakpointCols={this.state.masonryBreakpoint}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
              >
                {/* SHOW Artists */}
                {this.renderArtists()}
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

export default connect(mapStateToProps, actions)(ArtistsList);
