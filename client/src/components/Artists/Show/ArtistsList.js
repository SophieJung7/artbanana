import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../../actions/index';

class ArtistsList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchArtists();
  }

  renderArtists() {
    return this.props.artists.map(({ _id, name, address, profileImageUrl }) => {
      return (
        <div key={_id} className='col-sm-4 d-inline-block'>
          <div className='card'>
            <img
              src={`https://artbanana.s3.ap-northeast-2.amazonaws.com/${profileImageUrl}`}
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              <h5 className='card-title'>{name}</h5>
              <p className='card-text'>{address}</p>
              <Link to={`/artists/${_id}`} className='btn btn-primary'>
                Check Details
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderArtists()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { artists: state.artists };
};

export default connect(mapStateToProps, actions)(ArtistsList);
