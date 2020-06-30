import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import DetailsWithPrice from './product/DetailsWithPrice';
import DetailsTopTabs from './product/DetailsTopTabs';
import Portfolio from './product/Portfolio';

class ArtistPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchArtist(id);
    window.onpopstate = this.onBackButtonEvent;
  }

  onBackButtonEvent = (e) => {
    e.preventDefault();
    this.goBack('/');
  };

  render() {
    const { name, productImgs, portfolioImgs } = this.props.artist;
    if (name) {
      return (
        <div>
          <section>
            <div className='collection-wrapper'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6 product-thumbnail'>
                    <img
                      src={`https://artbanana.s3.ap-northeast-2.amazonaws.com/${productImgs[0].key}`}
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
                  <DetailsTopTabs item='Sori' />
                </div>
              </div>
            </div>
          </section>
          <Portfolio imgs={portfolioImgs} />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist };
};

export default connect(mapStateToProps, actions)(ArtistPage);
